str1=input()
str1=str1.split(":")
str1[0]=int(str1[0])
str1[1]=int(str1[1])

num=2
while 1:
    if str1[0]%num==0 and str1[1]%num==0:
        str1[0]=str1[0]//num
        str1[1]=str1[1]//num
        num=2
    else:
        num+=1
    
    if num>str1[0] or num>str1[1]:
        break
print(str(str1[0])+":"+str(str1[1]))