N,M=map(int,input().split(" "))
lakeList=list(map(int,input().split(" ")))

lake=[False]*1001
for i in lakeList:
    lake[i]=True
count=0
x=0
while x<=1000:
    if lake[x]:
        x+=M
        count+=1
    else:
        x+=1

print(count)