n=int(input())

peo_list=[list(input().split()) for _ in range(n)]

peo_list.sort(key=lambda x:(x[0]))

for i in peo_list:
    print(type(int(i[0])),type(i[1]))