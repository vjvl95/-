str1=input()
str2=input()

str1dict=dict()
str2dict=dict()

for i in str1:
    str1dict[i]=str1dict.get(i,0)+1
    print(str1dict.get(i,0))
    print(str1dict.get(i,1))

for i in str2:
    str2dict[i]=str2dict.get(i,0)+1

for i in str1dict.keys():
    if i in str2dict.keys():
        if str1dict[i]!=str2dict[i]:
            print("NO")
            break
    else:
        print("NO")
else:
    print("YES")
