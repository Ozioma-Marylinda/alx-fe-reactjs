import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [],
  recommendations: [],


  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter(
        (recipe) => recipe.id !== id
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
        favorites: state.favorites.filter((favId) => favId !== id),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
      };
    }),

  // --------------------------
  // Search & Filter
  // --------------------------

  setSearchTerm: (term) =>
    set((state) => {
      const filtered =
        term === ""
          ? state.recipes
          : state.recipes.filter((recipe) =>
              recipe.title.toLowerCase().includes(term.toLowerCase())
            );

      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),

  // --------------------------
  // Favorites
  // --------------------------

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // --------------------------
  // Recommendations
  // --------------------------

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) &&
          state.favorites.length > 0 &&
          Math.random() > 0.5
      );

      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
