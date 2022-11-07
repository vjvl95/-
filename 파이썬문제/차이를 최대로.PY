input()

num_list=list(map(int,input().split()))
s=0
print(max(num_list))
print(num_list)
while len(num_list) !=0:
    
    s+=abs(min(num_list)-max(num_list))
    num_list.pop(num_list.index(max(num_list)))
    num_list.pop(num_list.index(min(num_list)))
    print(s)
    if len(num_list)==1:
        s+=sum(num_list)
        num_list.pop()
print(s)