def DFS(L,sum):
  global res
  if sum>money:
    return
  if sum==money:
    if L<res:
      res=L
  else:
    for i in range(n):
      DFS(L+1,sum+coin[i])

if __name__=="__main__":
  n=int(input())
  coin=list(map(int,input().split()))
  # coin.sort(reverse=True)
  money=int(input())
  res=222222222
  DFS(0,0)
  print(res)
