# Minimum Recolors To Get K Consecutive Black Blocks

### Approach
We can use the Sliding Window Technique to efficiently determine the minimum recolors required:
- Firstly, we count the number of Ws in the first K blocks.
- Use a sliding window to move through the string while updating the count:
<br/> &nbsp;   &nbsp;   &nbsp; 1. If a new character entering the window is W, increase the count.
<br/> &nbsp;   &nbsp;   &nbsp; 2. If a character leaving the window is W, decrease the count.
- Keep track of the minimum count observed.
- The minimum count of Ws in any window of size K is our answer because those are the blocks we need to recolor.

### Visual Explaination
Below is an example visualization for blocks = "WBBWWBBWBW" and k = 7 :

Step-by-step sliding window process:

1. Initial Window (k=7):
"WBBWWBB" → 3 W's

2. Shift Right (remove W, add W):
"BBWWBBW" → 3 W's

3. Shift Right (remove B, add B):
"BWWBBWB" → 3 W's

4. Shift Right (remove W, add W):
"WWBBWBW" → 4 W's

Minimum recolors required : 3
This means we need to change 3 white blocks (W) into black (B) to get 7 consecutive Bs.
