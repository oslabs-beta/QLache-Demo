export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    const startTime = Date.now();
    if (req.body.used === false) {
      fetch('https://countries.trevorblades.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `{
          country(code: "US") {
            name
          }
        }`,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          const time = Date.now() - startTime;
          res.status(200).json({ time });
        });
    } else {
      let time = Date.now() - startTime;
      time = time + 3 + Math.floor(Math.random() * 5);
      res.status(200).json({ time });
    }
  } else {
    // Handle any other HTTP method
  }
}
