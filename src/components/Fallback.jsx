import { Helmet } from "react-helmet-async";

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex items-center justify-center flex-col h-screen gap-4">
      <Helmet>
        <title>Fallback Component</title>
        <meta
          name="description"
          content="This page displays when the application runs into an error"
        ></meta>
        <link rel="canonical" href="/fallback" />
      </Helmet>
      <h1 className="text-2xl font-bold uppercase text-blue-600">
        Something went wrong!!!
      </h1>
      <pre>{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="border-2 px-4 py-1 border-blue-400 shadow-lg hover:-translate-y-1 hover:cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}

export default Fallback;
