str=input()

count=[0]*26


for i in str:
    
    count[ord(i)-97]+=1

for i in range(0,26):
    print(count[i],end=" ")