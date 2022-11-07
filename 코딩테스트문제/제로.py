n=int(input())

res=[]
for _ in range(n):
    num=int(input())

    if num!=0:
        res.append(num)
    else:
        res.pop()
print(sum(res))