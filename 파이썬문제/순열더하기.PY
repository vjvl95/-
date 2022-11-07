def DFS(L,S):
  global cnt
  if L==k:
    if sum(res)%m==0:
      cnt+=1
    else:
      return
  else:
    for i in range(S,n):
      res[L]=numList[i]
      DFS(L+1,i+1)

if __name__=="__main__":
  n,k=map(int,input().split())
  numList=list(map(int,input().split()))
  res=[0]*k
  m=int(input())
  cnt=0
  DFS(0,0)
  print(cnt)