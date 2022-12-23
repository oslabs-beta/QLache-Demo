import NavBar from '../components/navbar';

function HomePage() {
  return (
    <>
      <NavBar />
      <div id="content">
        <div>
          <img src="/qlache-top-lightning.png" id="logo-main" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">
            A lightweight, eviction & expiration-conscious GraphQL caching
            solution.
          </h1>
          <ul className="text-xl font-medium text-gray-500">
            <li>QLache allows you to...</li>
            <li>So cool</li>
          </ul>
        </div>
      </div>
      <div id="content-2">
        <div className="step">
          <div>
            <h1 className="text-2xl font-bold text-gray-700">
              Start by installing our package as a dependency to your project.
            </h1>
          </div>
          <pre className=" language-bash">
            <code className="code-bl">
              <span className="code-el">npm</span>{' '}
              <span className="code-el">install</span> qlache
            </code>
          </pre>
        </div>
        <div className="step">
          <div>
            <h1 className="text-2xl font-bold text-gray-700">
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
          <div>
            <h1 className="text-2xl font-bold text-gray-700">
              Invoke QLache to create an instance of the cache.
            </h1>
          </div>
          <pre class=" language-bash">
            <code class="code-bl">
              <span class="code-el">const</span>{' '}
              <span class="code-el">cache</span> = QLache.LRU();
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}

export default HomePage;
