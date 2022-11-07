my_team=list(map(int,input().split()))
you_team=list(map(int,input().split()))
sum_my_team=0
sum_you_team=0
count=0
visit=[0,0]
for i,(x,y) in enumerate(zip(my_team,you_team)):

    sum_my_team+=x
    sum_you_team+=y

    if sum_my_team>sum_you_team:
        visit[0]+=1
    if sum_you_team>sum_my_team:
        visit[1]+=1
    