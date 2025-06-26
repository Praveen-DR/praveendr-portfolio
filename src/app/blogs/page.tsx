import React from 'react'

const Blogs = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Blog</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore articles, updates, and stories coming soon!
        </p>
      </div>

      {/* Placeholder Cards Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col items-start justify-between h-60 animate-pulse"
          >
            <div className="w-full h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
            <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
            <div className="w-1/2 h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
          </div>
        ))}
      </div>

      {/* Empty State Message */}
      <div className="max-w-xl mx-auto mt-20 text-center">
        <div className="text-6xl mb-4">📰</div>
        <h2 className="text-2xl font-semibold mb-2">No Posts Published Yet</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We're currently preparing some awesome content for you.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
export default Blogs