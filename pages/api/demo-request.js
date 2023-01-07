export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    if (req.body.used === false) {
      console.log('not cached');
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
          res.status(200).json('made query');
        });
    } else {
      console.log('cached');
      res.status(200).json('cached');
    }
  } else {
    // Handle any other HTTP method
  }
}
