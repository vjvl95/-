
def DFS(v):
  global cnt,check
  if v==n:
    cnt+=1
  
  else:
    for i in range(1,n+1):
      if g[v][i]==1 and check[i]==0:
        check[i]=1
        DFS(i)
        check[i]=0
if __name__=="__main__":
  n,m=map(int,input().split())

  g=[[0]*(n+1) for _ in range(n+1)]

  for _ in range(m):
    a,b=map(int,input().split())
    g[a][b]=1
  check=[0]*(n+1)
  cnt=0
  check[1]=1
  DFS(1)
  print(cnt)
