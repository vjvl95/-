
res=[]
for _ in range(7):
    n=int(input())
    if n%2!=0:
        res.append(n)

if len(res)==0:
    print("-1")
else:
        
    print(sum(res))
    print(min(res))