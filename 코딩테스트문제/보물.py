n=int(input())
s=0
A=list(map(int,input().split()))
B=list(map(int,input().split()))

for i in range(n):
    s+=min(A)*max(B)
    A.pop(A.index(min(A)))
    B.pop(B.index(max(B)))
print(s)