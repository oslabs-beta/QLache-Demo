import NavBar from '../components/navbar';

function HomePage() {
  return (
    <>
      <NavBar />
      <div id="content">
        <img src="/qlache-top-lightning.png" id="logo-main" />
        <h1 className="text-3xl font-bold">
          A lightweight, eviction & expiration-conscious GraphQL caching
          solution.
        </h1>
      </div>
    </>
  );
}

export default HomePage;
