/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {
    // Two arrays for tracking:
    // frequencies[0]: marks which characters are vowels (1 for vowels, 0 for consonants)
    // frequencies[1]: counts occurrences of each vowel in current window
    let frequencies = [new Array(128).fill(0), new Array(128).fill(0)];
    
    // Mark the vowels in frequencies[0]
    "aeiou".split("").forEach(v => frequencies[0][v.charCodeAt(0)] = 1);
    
    let response = 0,      // Total valid substrings
        currentK = 0,      // Current consonant count
        vowels = 0,        // Count of distinct vowels in window
        extraLeft = 0,     // Tracks additional valid left positions
        left = 0;          // Left boundary of sliding window
    
    // Process each character with right pointer
    for (let right = 0; right < word.length; right++) {
        let rightChar = word[right].charCodeAt(0);
        
        // If current character is a vowel
        if (frequencies[0][rightChar] === 1) {
            // Increment its count and check if it's a new distinct vowel
            if (++frequencies[1][rightChar] === 1) vowels++;
        } else {
            // Increment consonant count
            currentK++;
        }
        
        // Shrink window if consonant count exceeds k
        while (currentK > k) {
            let leftChar = word[left].charCodeAt(0);
            if (frequencies[0][leftChar] === 1) {
                // If removing a vowel, check if it's the last of its kind
                if (--frequencies[1][leftChar] === 0) vowels--;
            } else {
                // Decrement consonant count
                currentK--;
            }
            left++;
            extraLeft = 0; // Reset extraLeft when window shrinks
        }
        
        // This is the key optimization: find additional valid left positions
        // by removing duplicate vowels from the left
        while (vowels === 5 && currentK === k && left < right && 
               frequencies[0][word[left].charCodeAt(0)] === 1 && 
               frequencies[1][word[left].charCodeAt(0)] > 1) {
            extraLeft++;
            frequencies[1][word[left].charCodeAt(0)]--;
            left++;
        }
        
        // If we have a valid substring (all vowels and exactly k consonants)
        if (currentK === k && vowels === 5) {
            // Add 1 for the current window plus extraLeft for additional valid left positions
            response += (1 + extraLeft);
        }
    }
    
    return response;
};
