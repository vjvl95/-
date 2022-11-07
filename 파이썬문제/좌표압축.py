n=int(input())
num_list=list(map(int,input().split()))
count=[0]*n
for i in range(n):
    for j in num_list:
        if num_list[i]>j:
            count[i]+=1

print(*count)

