import express from 'express';
import { json, urlencoded } from 'body-parser';

const app: express.Express = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/events', (req: express.Request, res: express.Response) => {
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  setInterval(() => {
    res.write(`id: ${new Date().getTime()}\n`)
    res.write(`event: message\n`);
    res.write(`data: ${new Date().toLocaleTimeString()}\n\n`);
  }, 1000);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});