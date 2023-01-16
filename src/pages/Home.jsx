import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="flex justify-center text-blue-800 items-center h-3/4 flex-col gap-4">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Welcome to my home page"></meta>
        <link rel="canonical" href="/" />
      </Helmet>
      <h1>Welcome!!</h1>
      <h1>I am Banigo Kenebebh</h1>
    </div>
  );
};

export default Home;
