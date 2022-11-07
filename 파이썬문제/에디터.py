str=list(input())
n=int(input())
cursor=len(str)

for _ in range(n):
    commend=list(input().split())
    
    if commend[0]=='P':
        str.insert(cursor,commend[1])
        cursor+=1
    elif commend[0]=='L':
        if cursor>0:
            cursor-=1
    elif commend[0]=='D':
        if cursor<len(str):
            cursor+=1
    else:
        if cursor==0:
            continue
        str.remove(str[cursor-1])
        if len(str)==cursor:
            cursor-=1
    

print(''.join(str))