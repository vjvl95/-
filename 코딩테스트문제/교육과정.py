from collections import deque 
need=input()
N=int(input())

for _ in range(N):
    str=input()
    Q=deque(need)

    for i in str:
        if i in Q:
            if i!=Q.popleft():
                print("NO")
                break
    else:
        if len(Q)==0:
            print("YES")
        else:
            print("NO")
