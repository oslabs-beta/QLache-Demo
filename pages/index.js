import NavBar from '../components/navbar';

function HomePage() {
  return (
    <>
      <NavBar />
      <div id="content">
        <div id="logo-container">
          <img src="/pink-logo.svg" id="logo-main" />
        </div>
        <div id="summary">
          <h1 className="text-4xl font-bold">
            A lightweight, eviction-conscious GraphQL caching library.
          </h1>
          <ul className="text-xl font-medium text-gray-500">
            <li>Support for LRU, LFU + MFU eviction</li>
            <li>Constant time complexity across all operations</li>
          </ul>
        </div>
      </div>
      <div id="content-2">
        <div className="step">
          <div className="instructions">
            <h1 className="text-xl font-bold text-gray-700">
              Start by installing our package as a dependency to your project.
            </h1>
          </div>
          <pre class=" language-bash">
            <code class="code-bl">
              <span class="code-el">npm</span>{' '}
              <span class="code-el">install</span> qlache
            </code>
          </pre>
        </div>
        <div className="step">
          <div className="instructions">
            <h1 className="text-xl font-bold text-gray-700">
              Require QLache into your project.
            </h1>
          </div>
          <pre class=" language-bash">
            <code class="code-bl">
              <span class="code-el">const</span>{' '}
              <span class="code-el">QLache</span> = require('qlache');
            </code>
          </pre>
        </div>
        <div className="step">
          <div className="instructions">
            <h1 className="text-xl font-bold text-gray-700">
              Invoke QLache to create an instance of the cache.
            </h1>
          </div>
          <pre class=" language-bash">
            <code class="code-bl">
              <span class="code-el">const</span>{' '}
              <span class="code-el">cache</span> = QLache(exampleAPIURL.com/gql,
              LRU, 100);
            </code>
          </pre>
        </div>
        <div className="step">
          <div className="instructions">
            <h1 className="text-xl font-bold text-gray-700">
              Instead of directly querying the API, utilize the query method as
              a middleware function in your server.
            </h1>
          </div>
          <pre class=" language-bash">
            <code class="code-bl">
              <span class="code-el"></span>cache.query('yourGQLQueryString');
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}

export default HomePage;
