n=(input())

n_list=[list(map(int,input().split())) for _ in range(n)]
n_list.sort(key=lambda x:(x[1],x[0]))
for i in n_list:
    print(i[0],i[1])