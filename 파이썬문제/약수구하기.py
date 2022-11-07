def solution(left, right):
    sum=0
    answer=''
    count=0
    num=1
    for i in range(left,right+1):
        while i>=num:
            if i%num==0:
                count+=1
            num+=1
        if count%2==0:
            sum+=i
        else:
            sum-=i
    
        count=0
        num=1
        answer=sum
    return answer
solution(3,10)