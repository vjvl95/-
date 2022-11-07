import copy
res=[]
input_list=[int(input()) for _ in range(8)]
input_list_sort=copy.deepcopy(input_list)

input_list_sort.sort(reverse=True)

for i in input_list_sort[:5]:
    res.append(input_list.index(i)+1)
print(sum(input_list_sort[:5]))
res.sort()
print(*res)
    