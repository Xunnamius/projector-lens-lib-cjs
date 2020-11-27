import 'jest-extended';
import listen from 'test-listen';
import puppeteer from 'puppeteer';
import { createServer } from 'http';
import type { Browser, Page } from 'puppeteer';
import { promises as fs } from 'fs';

const { readFile } = fs;

import type { Server, IncomingMessage, ServerResponse } from 'http';

export const unitServerPuppeteer = async ({
  code,
  client: clientFn,
  server: serverFn
}: {
  code?: number;
  client: ({
    browser,
    page,
    run,
    url
  }: {
    browser: Browser;
    page: Page;
    run: (path: string) => ReturnType<Page['evaluate']>;
    url: string;
  }) => Promise<void>;
  server?: (req: IncomingMessage, res: ServerResponse) => void;
}) => {
  let server: Server | null = null;
  let browser: Browser | null = null;

  try {
    const url = await listen(
      (server = createServer((req, res) => {
        res.statusCode = code || 200;
        (serverFn
          ? serverFn
          : (q: typeof req, s: typeof res) =>
              s.end(JSON.stringify({ method: q.method })))(req, res);
      }))
    );

    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const run = async (path: string) =>
      page.evaluate(await readFile(path, 'utf-8'));

    await clientFn({ browser, page, run, url });
  } finally {
    await browser?.close();
    server?.close();
  }
};
