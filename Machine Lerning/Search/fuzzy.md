The "distance" for fuzzy words like spelling mistakes is typically measured by the Levenshtein distance, which is the minimum number of single-character edits (insertions, deletions, or substitutions) needed to change one word into another. A distance of 0 means the words are identical, while a higher number indicates a greater difference. For example, "strm" and "storm" have a Levenshtein distance of 1 because one insertion is needed to change "strm" into "storm". 
Definition: The Levenshtein distance is a string metric used to measure the difference between two sequences.
How it works: It counts the minimum number of operations (insertions, deletions, or substitutions) required to transform one word into another.
Example:
"mickael" vs. "michael": Distance = 1 (substitution of 'k' for 'c')
"strm" vs. "storm": Distance = 1 (insertion of 'o')
"micheal" vs. "michael": Distance = 1 (transposition of 'a' and 'e'). The Damerau–Levenshtein distance, a variant, accounts for transpositions.
Application: This metric is used in spell checkers and fuzzy search algorithms to find results even when there are typing errors. A "tolerance threshold" can be set, and matches are made as long as the distance is below that threshold