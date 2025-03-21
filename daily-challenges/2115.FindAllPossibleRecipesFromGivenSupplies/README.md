# Find All Possible Recipes From Given Supplies

## Recipe-Ingredient Mapping
Create a map where each recipe points to its required ingredients.
Convert initial supplies into a set for efficient lookups.
ƒ
## Iterative Resolution Process
Initialise an empty result array to track recipes we can make.
Use a flag to track whether we made progress in each iteration.

## Continuous Resolution Loop
Continue processing recipes until we can't make any more new ones.
In each iteration:
- Check each recipe not yet made.
- Determine if all ingredients for a recipe are available.
- If a recipe can be made, add it to our results and available ingredients.
- Set the progress flag to true to continue the loop.

## Recipe Dependency Handling
As recipes are made, they become available as ingredients.
This creates a cascading effect where making one recipe can unlock others.
The process continues until no new recipes can be made.

## Return all possible recipes
The result array contains all recipes that can be created with our supplies.
