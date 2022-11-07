from collections import deque
N,K =map(int,input().split())

list=list(range(1,N+1))
list=deque(list)


while len(list)!=1:
    for _ in range(K-1):
        temp=list.popleft()
        list.append(temp)
    list.popleft()

print(list[0])
