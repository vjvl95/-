n=int(input())
sum=int(input())
count=0
num_list=list(map(int,input().split()))

for i in range(n):
    for j in range(i+1,n):
        if num_list[i]+num_list[j]==sum:
            count+=1
print(count)