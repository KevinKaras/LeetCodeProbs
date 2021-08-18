// example too messy link to problem here

//  https://www.hackerrank.com/challenges/bomber-man/problem


def afterDetonation(List,Row,Col):
    List2=[['O']*Col for i in range(Row)]
    for i in range(Row):
        for j in range(Col):
            if(List[i][j]=='O'):
                List2[i][j]='.'
                if(i-1 >= 0):List2[i-1][j]='.'
                if(i+1 < Row):List2[i+1][j]='.'
                if(j-1 >= 0):List2[i][j-1]='.'
                if(j+1 < Col):List2[i][j+1]='.'
    return List2
def printList(List,Row):
    for i in range(Row):
        print("".join(List[i]))
Row,Col,Time = map(int,input().split())
List = [list(input()) for i in range(Row)]
if(Time%2 == 0):printList([['O']*Col for i in range(Row)],Row)
elif(Time%4 == 3):
    List2 = afterDetonation(List,Row,Col)
    printList(List2,Row)
elif(Time!=1):
    List2 = afterDetonation(List,Row,Col)
    List2 = afterDetonation(List2,Row,Col)
    printList(List2,Row)
else:printList(List,Row)




#  DNF DNF DNF DNF