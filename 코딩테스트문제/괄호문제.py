n=int(input())
res=[]
answer=""
for i in range(n):
    str=input()
    for i in str:
        if i=="(":
            res.append(i)
        else:
            if len(res):
                res.pop()              
            else:
                print("NO")
                break
    else:
        if res:
            print("NO")
        else:
            print("YES")

    res=[]
    answer=""