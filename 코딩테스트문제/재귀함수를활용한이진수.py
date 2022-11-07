def Todigit(x):

  if x<=1:
    print(x,end="")
  else:
    Todigit(x//2)
    print(x%2,end="")

if __name__=="__main__":
  n=int(input())

  Todigit(n)