import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const limit = 3;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
        );
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
        setFiltered(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [page]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFiltered(posts);
    } else {
      setFiltered(
        posts.filter((post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, posts]);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">📦 API Posts</h2>

      <input
        type="text"
        placeholder="Search posts by title..."
        className="mb-4 w-full p-2 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <p className="text-blue-500">Loading posts...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((post) => (
          <div key={post.id} className="border p-4 rounded shadow dark:bg-gray-800 dark:text-white">
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <p className="text-sm">{post.body}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded hover:bg-gray-400"
        >
          Prev
        </button>
        <span className="px-4 py-2">{page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded hover:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Posts;
