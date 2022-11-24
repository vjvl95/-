list=[]
index=[]
for _ in range(9):
    list.append(int(input()))
listSum=sum(list)
for i in range(9):
    for j in range(i+1,9):
        if listSum-(list[i]+list[j])==100:
            index.append(list[i])
            index.append(list[j])
            break
    if(len(index)!=0):
        break
list.remove(index[0])
list.remove(index[1])
list.sort()
for i in list:
    print(i)
