import Link from "next/link";
import Head from "next/head";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | alx-project-0x03</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Oops! Page not found.</h2>
        <p className="text-gray-600 mb-6 text-center max-w-md">
          The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </>
  );
};

export default Custom404;
