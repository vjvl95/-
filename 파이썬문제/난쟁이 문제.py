list = [int(input()) for _ in range(9)]

total=sum(list)
one,two=0,0
for i in range(8):
    for j in range(i+1,9):
        if 100==total-(list[i]+list[j]):
            one=list[i]
            two=list[j]

list.remove(one)
list.remove(two)
list.sort()

for i in list:
    print(i)

