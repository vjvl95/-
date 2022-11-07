n=int(input())
num_list=[]
for _ in range(n):
    num_list.append(list(map(str,input().split())))

num_list.sort(key=lambda x:(-int(x[1]),int(x[2]), -int(x[3]),x[0]))

for i in range(n):
    print(num_list[i][0])