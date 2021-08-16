// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.









var findJudge = function(N, trust) {
    // Initialize array with 1..N
    // N + 1, so count is easier 
    const counts = new Array(N+1).fill(0);
    
    // Iterate through N people    
    for(let [i,j] of trust) {
        // If the person trusts somebody, then it does not meet requirement 1
        counts[i] -= 1
        
        // Count the people they trust
        counts[j] += 1
    }

    // If N-1 exists, then its the judge since the judge trusts no one except themselves
    // and everyone else trusts the judge, then its N-1
    for(let i = 1; i < counts.length; i++) {
        if ((N-1) === counts[i]) {
            return i;
        }
    }
    
    return -1
};