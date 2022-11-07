n=int(input())
total=0
sum=0
num_list=list(map(int,input().split()))
num_list.sort()

for i in num_list:
    sum+=i
    total+=sum
print(total)
