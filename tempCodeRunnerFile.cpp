#include<bits/stdc++.h>
using namespace std;
int main(){
          int t;
          cin>>t;
          while(t--){
int n,k,a[100000],b[100000];
cin>>n>>k;
for(int i=0;i<n;i++){
          cin>>a[i];
}
 
if(k==4){
          bool get =false;
for(int i=0;i<n;i++){
          if(b[i]%k==0){
                    cout<<0<<endl;
                    get=true;
                    break;
 
          }
}
if(get==true){
          continue;
}
 
    for(int i=0;i<n;i++){
        b[i]=a[i]%2;
    }
    int count=0;
    for(int i=0;i<n;i++){
      if(b[i]==0){
          ++count;
      }  
    }
    sort(b,b+n);
    if(count==0){
        cout<<2-b[n-1]+2-b[n-2]<<endl;
        continue;
    }
      if(count==1){
        cout<<2-b[n-1]<<endl;
        continue;
    }
    
    else{
        cout<<0<<endl;
        continue;
    }
    
}
 
 
for(int i=0;i<n;i++){
          b[i]=a[i]%k;
}
bool get =false;
for(int i=0;i<n;i++){
          if(b[i]%k==0){
                    cout<<0<<endl;
                    get=true;
                    break;
 
          }
}
if(get==true){
          continue;
}
 
 
sort(b,b+n);
 
cout<<k-b[n-1]<<endl;
 
          }
return 0;
}