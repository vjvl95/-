n=int(input())
count=[0]*26
result=[]

for _ in range(n):
    str=input()
    count[ord(str[0])-97]+=1

for i in range(26):
    if count[i]>=5:
        result.append(chr(i+97))

if len(result)<1:
    print("PREDAJA")
else:
    print(''.join(result))
