// src/pages/Error404.jsx
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 text-center">
   
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
