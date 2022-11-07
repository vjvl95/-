n=int(input())
list=[]
count={}
for i in range(n):
    list.append(int(input()))

for j in list:
    
    if count.get(j) !=None:
        count[j]+=1
    else:
        count[j]=1
result=sorted(count.items(),key=lambda x: (-x[1],x[0]))
print(result[0][0])

