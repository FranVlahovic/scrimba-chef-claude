import { useState } from "react";

export default function Main(){
    const [ingredients, setIngredients] = useState([]);
    
    const ingredientsListItems = ingredients.map((ingredient) => {
        return (
            <li key={ingredient}>{ingredient}</li>
        );
    })

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient");
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }

    return(
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input 
                    aria-label="Add ingredient" 
                    type="text" 
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    );
}