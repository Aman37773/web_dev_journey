#include<bits/stdc++.h>
using namespace std;
int solve(string s,int n,int count,vector<int> &dp){  //count=0;
    if(count>=n){
         // supans=min(ans,supans);
          return 0;
    }
    if(dp[count]!=-1){
        return dp[count];
    }
    string a,rev;
    int ans=INT_MAX-1;
    for(int i=count;i<n;i++){
        a+=s[i];
        rev=a;
        reverse(rev.begin(),rev.end());
        if(a==rev){
         int get= solve(s,n,i+1,dp)+1;
         dp[count]=min(ans,get);
        }
    }
    return dp[count];
}



int main(){
string s;
cin>>s;
vector<int> dp(s.length()+1,-1);
cout<<solve(s,s.length(),0,dp)-1;
return 0;
}