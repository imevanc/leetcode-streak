# Number of Substrings Containing All Three Characters

### Approach
1. The algorithm maintains three pointers (a, b, and c) that track the most recent position of each character 'a', 'b', and 'c' in the string.
2. Initially, all three pointers are set to -1, indicating that none of these characters have been encountered yet.
3. The algorithm iterates through each character of the string. When it encounters an 'a', 'b', or 'c', it updates the corresponding pointer to the current position.
4. For each position i, the algorithm calculates how many valid substrings end at position i by using the formula Math.min(a, b, c) + 1.
5. The minimum of the three pointers indicates the earliest position where all three characters 'a', 'b', and 'c' have been encountered.
6. If Math.min(a, b, c) is -1, it means at least one of the characters hasn't been found yet, so no valid substrings end at position i.
7. If Math.min(a, b, c) is non-negative, then all substrings starting from positions 0 to Math.min(a, b, c) and ending at position i contain all three characters. That's why we add 1 to the minimum (to count from 0).
