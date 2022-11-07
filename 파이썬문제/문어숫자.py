import math
import sys
num={'-':0, '\\':1,'(':2,'@':3,'?':4,'>':5,'&':6,'%':7,"/":-1}
j=1
sum=0
while 1:
    str=input()
    if str=="#":
        break

    for i in str:
        sum+=int(num[i]*math.pow(8,len(str)-j))
        j+=1
    j=1
    print(sum)
    sum=0
