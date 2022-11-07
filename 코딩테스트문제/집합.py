input()
n=set(map(int, input().split()))
m=set(map(int, input().split()))
sum=0
w=[]
w.append(n-m)
w.append(m-n)

for i in w:
    sum+=len(i)
print(sum)
