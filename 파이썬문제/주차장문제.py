A,B,C=map(int,input().split())
count=[0]*101
total=0
for _ in range(3):
    a,b=map(int,input().split())
    for i in range(a+1,b+1):
        count[i]+=1

for i in range(1,101):
    if count[i]==0:
        continue
    elif count[i]==1:
        total+=A
    elif count[i]==2:
        total+=B*2
    elif count[i]==3:
        total+=C*3
print(total)