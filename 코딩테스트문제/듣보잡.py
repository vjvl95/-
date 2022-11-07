n,m=map(int,input().split())
n_list=[input() for _ in range(n)]
m_list=[input() for _ in range(m)]

result=dict()
result2=[]
for i in n_list:
    if i in result:
        result[i]+=1
    else:
        result[i]=1
for j in m_list:
    if j in result:
        result[j]+=1
    else:
        result[j]=1

for k in result:
    if result[k]==2:
        result2.append(k)
print(len(result2))

result2.sort()
for i in result2:
    print(i)
