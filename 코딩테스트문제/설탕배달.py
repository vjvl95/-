n=int(input())
count=0
if n%3==0:
    count+=n//3
    n=n%3
else:
    count=n//5
    n=n%5
    count+=n//3
    n=n%3


if n!=0:
    print(-1)
else:
    print(count)