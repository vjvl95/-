str=input()
key=input()

res=[]
for i in str:
    if i.isdigit():
        continue
    else:
        res.append(i)
if key in ''.join(res):
    print(1)
else:
    print(0)

