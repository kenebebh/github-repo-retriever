import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <div>
      <Helmet>
        <title>Not Found Page</title>
        <meta
          name="description"
          content="any searched route with no result will show this page"
        ></meta>
        <link rel="canonical" href="*" />
      </Helmet>
      <h1>Page not Found</h1>
    </div>
  );
}

export default NotFound;
