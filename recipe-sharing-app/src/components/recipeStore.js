import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes, // Keep filtered in sync
      };
    }),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter(
        (recipe) => recipe.id !== id
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes, // Keep filtered in sync
      };
    }),

  // Update a recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes, // Keep filtered in sync
      };
    }),

  // Set the search term
  setSearchTerm: (term) =>
    set({ searchTerm: term }),

  // Filter recipes based on search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes:
        state.searchTerm === ""
          ? state.recipes
          : state.recipes.filter((recipe) =>
              recipe.title
                .toLowerCase()
                .includes(state.searchTerm.toLowerCase())
            ),
    })),
}));


export default useRecipeStore;
