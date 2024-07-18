#include<bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin>>n;
    while(n--){
      long long  int m,k,a1,ak;
      cin>>m;
      cin>>k;
      cin>>a1;
      cin>>ak;


      
     long long  int get;
    if(ak*k<=m){     //when smaller
         get=ak*k;
         
    }
    else{
        get=m/k;
        
        get=get*k;
        
    }

long long int rem=m-get;


if(a1*1<=rem){
    get=a1*1;
    

}
else{
    
    rem=get;
}                 // m k a1 ak

rem=rem-get;

if(rem==0){
    cout<<0;
}
else{
long long int wet=k-(rem%k);
if(a1>=wet){
    rem+=wet;
}

long long int ans=rem/k;
long long int yo=rem/k;
yo=yo*k;
rem=rem-yo;
ans+=rem;
cout<<ans;

}
        
    }
    return 0;
}