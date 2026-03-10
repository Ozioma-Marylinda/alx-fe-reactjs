import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setPage(1);

    try {
      const data = await fetchUserData(username, location, minRepos, 1);
      setUsers(data.items);
    } catch {
      setError("Looks like we cant find the user");
    }

    setLoading(false);
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const data = await fetchUserData(username, location, minRepos, nextPage);
    setUsers((prev) => [...prev, ...data.items]);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>

      <form
        onSubmit={handleSearch}
        className="grid gap-4 md:grid-cols-3 mb-6"
      >
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Min Repositories"
          className="border p-2 rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded md:col-span-3"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />

            <div>
              <h3 className="font-semibold">{user.login}</h3>

              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="mt-6 bg-gray-800 text-white px-4 py-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;