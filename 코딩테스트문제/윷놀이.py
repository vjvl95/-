
for _ in range(3):
    num_list=list(map(int,input().split()))

    count=num_list.count(1)
    if count==0:
        print("D")
    elif count==1:
        print("C")
    elif count==2:
        print("B")
    elif count==3:
        print("A")
    else:
        print("E")