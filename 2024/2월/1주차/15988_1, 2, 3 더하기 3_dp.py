# import sys
# input = sys.stdin.readline
T=int(input())
dp=[0 for _ in range(1000001)]
dp[1:4]=[1,2,4]
for i in range(4,1000001):dp[i]=(dp[i-1]+dp[i-2]+dp[i-3])%1000000009
for _ in range(T):print(dp[int(input())])