# Reverse Vowels of a String

### Approach
Convert the string to a character array
Place one pointer at the beginning of the string, another at the end
Move the left pointer right until it finds a vowel
Move the right pointer left until it finds a vowel
Swap these two vowels
Repeat until the pointers meet or cross


The time complexity is O(n) where n is the string length, and space complexity is O(n) for the character array.
