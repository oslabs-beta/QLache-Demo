import NavBar from '../components/navbar';
import Head from 'next/head';


function Docs() {
  return (
    <>
      <Head>
        <title>QLache Documentation</title>
        <link rel="icon" href="/pink-logo.svg"></link>
        <meta property='og:title' content='QLache Documentation'/>
        <meta property='og:image' content='https://www.qlache.dev/pink-logo.svg'/>
        <meta property='og:url' content='www.qlache.dev/docs'/>
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='627' />
      </Head>
      <NavBar />
      <div id="content-docs">
        <h1>Documentation</h1>
        <div className='docs-container'>
          <h2>Getting Started</h2>
          <p>Welcome to the QLache docs! <br />
          QLache is intended for use with the Express library, in line with the middleware design pattern. For background on using middleware functions,
           check out the <a href="https://expressjs.com/en/guide/using-middleware.html" styles={{color: "white"}}>Express Official Documentation.</a></p>
           <h2>Setup</h2>
          <p>To add QLache to your project, navigate to the root directory from your command line and install via npm, using the following command:</p>
          <pre className="code-bl language-bash">
            <code>
              <span className="code-el">npm</span>{' '}
              <span className="code-el">install</span> qlache
            </code>
          </pre>
          <p>Next, you can use the library in your code by requiring it in the file where your intended route is defined. This stores the QLache class to the label QLache.</p>
          <pre className="code-bl language-bash">
            <code>
              <span className="code-el">const</span>{' '}
              <span className="code-el">QLache</span> = require('qlache');
            </code>
          </pre>
          <p>Once the QLache class is available in memory, creating a cache is as simple as instantiating an object from the class.</p>
          <pre className="code-bl language-bash">
            <code>
              <span className="code-el">const</span>{' '}
              <span className="code-el">cache</span> = new QLache(apiURL,
              evictionMethod, cacheSize);
            </code>
          </pre>
          <h3>Constructor Parameters</h3>
          <p><span className='parameter'>apiURL</span><br/>
          A string containing the path to the GraphQL API you want to request from.
          </p>
          <p><span className='parameter'>evictionMethod</span><br/>
          A string to decide the eviction method of the instantiated cache. Must strictly be one of "LFU", "LRU", or "MRU", corresponding to least frequently used, least recently used, and most recently used, respectively.
          </p>
          <p><span className='parameter'>cacheSize</span><br/>
          The number of entries available in your cache before data is evicted from memory.
          </p>
          <h2>Implementation</h2>
          <p>After initializing your cache, adding its query method as a middleware function to your route will enable server-side caching.</p>
          <pre className="code-bl language-bash">
            <code>
            app.post('/gqlapi', cache.query, function(req, res) &#123; <br />
            {'  '}res.send(res.locals.queryRes);<br />
            &#125;)
            </code>
          </pre>
          <p>Note that in the final function, the the query result is sent back in the response to the client as "res.locals.queryRes". By default, the query method stores the result of your GraphQL query, whether cached or not, to the res.locals object under the key "queryRes".</p>
          <p>That's all it takes to set up server-side caching with QLache!</p>
        </div>
      </div>
    </>
  );
}

export default Docs;
