import sys
input=sys.stdin.readline
sys.setrecursionlimit(10**6)
N,M=map(int,input().split())
adj= [[0]*N for _ in range(N)]
for _ in range(M):
    a,b=map(int,input().split())
    a-=1
    b-=1
    adj[a][b]=adj[b][a]=1
check=[False]*N
ans=0


def dfs(now):
    for next in range(N):
        if adj[now][next] and not check[next]:
            check[next]=True
            dfs(next)

for i in range(N): 
    if not check[i]:
        ans+=1
        check[i]=True
        dfs(i)
print(ans)