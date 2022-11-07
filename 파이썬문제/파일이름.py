n=int(input())

str=input()
str_s=str[0]
str_f=str[2]

for _ in range(n):
    res=input()
    if str_s==res[0] and str_f==res[-1]:
        print("DA")
    else:
        print("NE")