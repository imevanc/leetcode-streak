# Can Place Flowers

### Edge Cases:
For the first element in the array (i = 0), flowerbed[i-1] is undefined
For the last element in the array, flowerbed[i+1] is undefined

### The Power of Undefined in JavaScript:
The solution uses !== 1 which means "not planted"
When checking flowerbed[i-1] !== 1, this condition is true for both:

- An empty plot (0)
- undefined (when we're at the edge of the array)

Same applies to flowerbed[i+1] !== 1

This correctly handles the edge cases by allowing planting at the edges of the flowerbed if those edges aren't adjacent to planted spots
