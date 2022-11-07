n=int(input())
count=0
for _ in range(n):
    sum=int(input())

    for i in range(1,4):
        for j in range(1,4):
            for k in range(1,4):
                if i+j+k==sum:
                    count+=1
                elif i+j+k>sum:
                    break
    print(count)
    count=0


