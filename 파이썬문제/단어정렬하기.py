n=int(input())
word=[input() for _ in range(n)]
res=[]
word=set(word)
for i in word:
    res.append([len(i),i])
res.sort(key=lambda x:(x[0],x[1]))
for i in res:
    print(i[1])