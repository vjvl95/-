n=int(input())

for _ in range(n):
    s,p=map(str,input().split())
    len_s=len(s)
    len_p=len(p)
    res=len_s-(s.count(p)*len_p)
    print(res+s.count(p))
        