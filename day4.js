// You will be given a square chess board with one queen and a number of obstacles placed on it. Determine how many squares the queen can attack.

// A queen is standing on an  chessboard. The chess board's rows are numbered from  to , going from bottom to top. Its columns are numbered from  to , 
// going from left to right. Each square is referenced by a tuple, , describing the row, , and column, , where the square is located.

// The queen is standing at position . In a single move, she can attack any square in any of the eight 
// directions (left, right, up, down, and the four diagonals). In the diagram below, the green circles denote 
// all the cells the queen can attack from 


// Given the queen's position and the locations of all the obstacles, find and print the number of squares the queen can attack from her position at . In the board above, there are  such squares.

// Function Description

// Complete the queensAttack function in the editor below.

// queensAttack has the following parameters:
// - int n: the number of rows and columns in the board
// - nt k: the number of obstacles on the board
// - int r_q: the row number of the queen's position
// - int c_q: the column number of the queen's position
// - int obstacles[k][2]: each element is an array of  integers, the row and column of an obstacle





def queensAttack(n, k, r_q, c_q, obstacles):
    u = n - r_q
    d = r_q-1
    r = n - c_q
    l = c_q-1
    ru = min(u, r)
    rd = min(r,d)
    lu = min(l,u)
    ld = min(l,d)
    for o in obstacles:
        if o[1] == c_q:
            if o[0] < r_q:
                d = min(d, r_q-1-o[0])
            else:
                u = min(u, o[0]-r_q-1)
        elif o[0] == r_q:
            if o[1] < c_q: l = min(l, c_q-1-o[1])
            else: r = min(r, o[1]-c_q-1)
        elif abs(o[0]-r_q) == abs(o[1]-c_q):
            if o[1]>c_q:
                if o[0]>r_q: ru = min(ru, o[1]-c_q-1)
                else: rd = min(rd, o[1]-c_q-1)
            else:
                if o[0]>r_q: lu = min(lu, c_q-1-o[1])
                else: ld = min(ld, c_q-1-o[1])
                
    return u + d + r + l + ru + rd + lu + ld