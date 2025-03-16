# Minimum Time To Repair Cars

## **Binary search**
left = 1 (minimum possible time)
right = minimum_rank * cars * cars (maximum theoretical time)
answer = right (initialise with maximum)

## **Binary search loop**
Calculate mid = (left + right) / 2
Set totalCars = 0

## **For each mechanic**
Calculate cars repaired: floor(sqrt(mid / rank))
Add to totalCars

## **Check feasibility**
If totalCars >= cars (can repair all cars)
- Update answer = mid
- Search lower: right = mid - 1
If totalCars < cars (can't repair all cars)
- Search higher: left = mid + 1

## **Repeat until left > right**
Return answer (minimum time to repair all cars)
