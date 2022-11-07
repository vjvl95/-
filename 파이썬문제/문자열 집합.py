n,m=map(int,input().split())
set_list=set(input() for _ in range(n))
list=list(input() for _ in range(m))
count=0
for i in list:
    if i in set_list:
        count+=1

print(count)