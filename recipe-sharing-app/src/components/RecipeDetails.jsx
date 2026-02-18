import { useParams, Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id))
  )

  if (!recipe) return <p>Recipe not found</p>

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>

      <DeleteRecipeButton id={recipe.id} />
    </div>
  )
}

export default RecipeDetails
