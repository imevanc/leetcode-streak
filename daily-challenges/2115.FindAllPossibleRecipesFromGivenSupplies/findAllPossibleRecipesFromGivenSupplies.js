/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    const graph = new Map();
    for (let i = 0; i < recipes.length; i++) {
        graph.set(recipes[i], ingredients[i]);
    }
    const availableIngredients = new Set(supplies);
    const result = [];
    let madeSomething = true;
    while (madeSomething) {
        madeSomething = false;
        for (let i = 0; i < recipes.length; i++) {
            const recipe = recipes[i];
            if (!availableIngredients.has(recipe)) {
                const requiredIngredients = graph.get(recipe);
                let canMake = true;
                for (const ingredient of requiredIngredients) {
                    if (!availableIngredients.has(ingredient)) {
                        canMake = false;
                        break;
                    }
                }
                if (canMake) {
                    availableIngredients.add(recipe);
                    result.push(recipe);
                    madeSomething = true;
                }
            }
        }
    }
    return result;
};
