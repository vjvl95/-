n,m=map(int,input().split(" "))

coinList=[int(input()) for _ in range(n)]
count=0
coinList.reverse()
for coin in coinList:
        count+=m//coin
        m=m%coin
print(count)
