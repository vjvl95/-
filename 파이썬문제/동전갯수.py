import sys
n,sum=map(int,input().split())

coins=[]
count=0
for _ in range(n):
    coins.append(int(input()))

coins.sort(reverse=True)
for coin in coins:
    if sum >= coin:
        count += sum // coin
        sum %= coin
        if sum <= 0: # 만약 K가 0이면 반복문을 탈출합니다.
       		break    
print(count)