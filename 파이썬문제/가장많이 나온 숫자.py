import sys
str=sys.stdin.read()
count=[0]*26

for i in str:
    if i.islower():
        count[ord(i)-97]+=1

for i in range(26):
    if count[i]==max(count):
        print(chr(97+i),end="")
