import sys
n = int(sys.stdin.readline())
res=[]
for _ in range(n):
    a=sys.stdin.readline().split()

    if a[0]=="push":
        res.append(int(a[1]))
    elif a[0]=="pop":
        if len(res)==0:
            print(-1)
        else:
            print(res.pop())
    elif a[0]=="size":
        print(len(res))
    elif a[0]=="empty":
        if len(res)==0:
            print(1)
        else:
            print(0)
    elif a[0]=="top":
        if len(res)==0:
            print(-1)
        else:
            print(res[-1])