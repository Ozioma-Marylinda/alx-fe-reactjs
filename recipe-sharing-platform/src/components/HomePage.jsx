import { useState, useEffect } from "react";
import recipesData from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setRecipes(recipesData);
}, []);;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">
        Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {recipe.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                {recipe.summary}
              </p>

              <button className="text-blue-600 hover:underline">
                View Recipe →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;