import sys
a,b=map(int,sys.stdin.readline().split())

sum=0

for i in range(1,a):
    sum-=i

for j in range(a,b+1):
    sum+=j
print(sum)
