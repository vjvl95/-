import sys
input=sys.stdin.readline
n,m=map(int,input().split())
num_list=list(map(int,input().split()))
sum_value=0
prefix_sum=[0]

for i in num_list:
    sum_value+=i
    prefix_sum.append(sum_value)

for _ in range(m):
    i,j=map(int,input().split())
    print(prefix_sum[j]-prefix_sum[i-1])
