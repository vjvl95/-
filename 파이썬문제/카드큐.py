from collections import deque
n=int(input())
a=deque(range(1,n+1))

while len(a)!=1:
  a.popleft()
  temp=a.popleft()
  a.append(temp)
print(a[0])
  
