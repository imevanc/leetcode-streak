# Count Days Without Meetings

## Problem Comprehension
We need to find how many days are completely free of meetings
We're given:
Total number of available days
A list of meetings with their start and end dates

## Key Strategy
The goal is to count days NOT occupied by meetings
This means tracking and removing meeting days from total days

## Initial Approach
First, sort the meetings by their start time
This helps us process meetings in chronological order
Makes it easier to handle overlapping meetings

## Calculation Method
Track the total number of days occupied by meetings
Use a clever approach to count occupied days accurately
Consider:
Overlapping meetings
Meetings that extend beyond total available days
Avoiding double-counting days

## Tracking Meeting Days
Start with zero occupied days
Process each meeting systematically
For each meeting:
Determine how many unique days it covers
Add these days to total occupied days
Ensure no days are counted twice

## Final Computation
Subtract occupied days from total available days
The result is the number of completely free days

## Core Insights
Efficiently handle complex meeting schedules
Work with minimal extra memory
Process meetings in a single pass

## Complexity Considerations
Time Efficiency: O(n log n) due to sorting
Space Efficiency: O(1)
