n=int(input())
count=1
round=0
while n!=0:
    if n>=count:
        n-=count
        round+=1
    else:
        count=0
    count+=1
print(round)

