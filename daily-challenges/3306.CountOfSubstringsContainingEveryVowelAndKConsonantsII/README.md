# Count Of Substrings Containing Every Vowel And K Consonants II

### Step by step approach
1. Initialisation
Create two arrays: one to mark vowels and another to count vowels in the current window
Initialise counters for consonants, distinct vowels, valid left position extras, and result
Set left pointer to 0 (start of sliding window)

2. Iterate through the string with the right pointer
For each character at the right pointer:
Check if it's a vowel or consonant
If it's a vowel, increment its count and update distinct vowels if needed
If it's a consonant, increment the consonant counter

3. Window Adjustment (First Phase)
If consonant count exceeds k:
Move left pointer forward, removing characters from the window
Update vowel and consonant counts accordingly
Continue until consonant count is at most k
Reset the extraLeft counter to 0

4. Window Optimisation (Second Phase)
If we have all 5 vowels and exactly k consonants:
While the left-most character is a vowel that appears multiple times:
Increment extraLeft counter
Decrease the count of that vowel
Move the left pointer forward
This identifies additional valid substrings where we can remove duplicate vowels

5. Update Result
If current window has exactly k consonants and all 5 vowels:
Add 1 + extraLeft to the result
This counts the current window plus all the additional valid windows found in step 4

6. Complete the Iteration
Continue until the right pointer has traversed the entire string

7. Return the Final Result
This approach works in O(n) time because each character is processed at most twice - once when entering the window (right pointer) and once when leaving it (left or extraLeft adjustments).

### Hint
The key insight is tracking duplicate vowels on the left side to avoid recounting, allowing us to find all valid substrings in a single pass through the string.




