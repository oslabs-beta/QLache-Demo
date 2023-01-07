import express from 'express';
import next from 'next';
import QLache from './qlache-server/src/qlache.js';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const cache = new QLache(
      'https://countries.trevorblades.com/graphql',
      'LRU',
      3
    );

    server.use(express.json());

    server.post('/demo-request', cache.query, (req, res) => {
      console.log("res info", res.locals.queryRes);
      res.status(203).json(res.locals.queryRes);

      // fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      //   .then((response) => response.json())
      //   .then((data) => {
      //     res.sendStatus(202);
      //   });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
