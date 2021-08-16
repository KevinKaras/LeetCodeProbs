# DNA is a nucleic acid present in the bodies of living things. Each piece of DNA contains a number of genes, some of which are beneficial and 
# increase the DNA's total health. Each gene has a health value, and the total health of a DNA is 
# the sum of the health values of all the beneficial genes that occur as a substring in the DNA. 
# We represent genes and DNA as non-empty strings of lowercase English alphabetic letters, and the 
# same gene may appear multiple times as a susbtring of a DNA.

# Given the following:

# An array of beneficial gene strings, genes = [g[0], g[1] g[n-1]] . Note that these gene sequences are not guaranteed to be distinct.
# An array of gene health values, health = [h[0], h[1], h[n-1]], where each  is the health value for gene .
# A set of  DNA strands where the definition of each strand has three components, start , end , and d , where string  is a DNA for which genes  are healthy.
# Find and print the respective total healths of the unhealthiest (minimum total health) and healthiest (maximum total health) strands of DNA as two space-separated values on a single line.

# Input Format

# The first line contains an integer, , denoting the total number of genes.
# The second line contains  space-separated strings describing the respective values of  (i.e., the elements of ).
# The third line contains  space-separated integers describing the respective values of  (i.e., the elements of ).
# The fourth line contains an integer, , denoting the number of strands of DNA to process.
# Each of the  subsequent lines describes a DNA strand in the form start end d, denoting that the healthy genes 
# for DNA strand  are  and their respective correlated health values are .

## example

from math import inf
from bisect import bisect_left as bLeft, bisect_right as bRight
from collections import defaultdict

# ------------------------------------------------------------------------------
def getHealth(seq, first, last, largest):
  h, ls = 0, len(seq)
  for f in range(ls):
    for j in range(1, largest+1):
      if f+j > ls: break
      sub = seq[f:f+j]
      if sub not in subs: break
      if sub not in gMap: continue
      ids, hs = gMap[sub]
      h += hs[bRight(ids, last)]-hs[bLeft(ids, first)]
  return h

# ------------------------------------------------------------------------------
howGenes = int(input())
genes = input().rstrip().split()
healths = list(map(int, input().rstrip().split()))
howStrands = int(input())
gMap = defaultdict(lambda: [[], [0]])
subs = set()
for id, gene in enumerate(genes):
  gMap[gene][0].append(id)
  for j in range(1, min(len(gene), 500)+1): subs.add(gene[:j])
for v in gMap.values():
  for i, ix in enumerate(v[0]): v[1].append(v[1][i]+healths[ix])

# ------------------------------------------------------------------------------
largest = max(list(map(len, genes)))
hMin, hMax = inf, 0
for _ in range(howStrands):
  firstLastd = input().split()
  first = int(firstLastd[0])
  last = int(firstLastd[1])
  strand = firstLastd[2]
  h = getHealth(strand, first, last, largest)
  hMin, hMax = min(hMin, h), max(hMax, h)
print(hMin, hMax)


