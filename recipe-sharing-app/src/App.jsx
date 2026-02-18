import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Recipe Sharing App</h1>

        <SearchBar />
        <RecipeList />
        <FavoritesList />
        <RecommendationsList />
      </div>
    </Router>
  );
}

export default App;
