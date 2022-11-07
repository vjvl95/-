def solution(N,coffee_times):
    coffee_num=len(coffee_times)    
    working=[0]*N
    result=[]
    for i in range(1,N+1):
        working[i-1]=[i,coffee_times[0]]
        coffee_times.pop(0)
    count=N+1
    print(len(working))
    while len(working)!=0 or len(coffee_times)!=0:
        for i in range(0,N):
            working[i][1]-=1
            if working[i][1]==0:
                result.append(working[i][0])

                if len(coffee_times)!=0:
                    working[i]=[count,coffee_times[0]]
                    coffee_times.pop(0)
                    count+=1
        if len(result)==coffee_num:
            break


solution(1,[100,1,50,1,1])