#include<bits/stdc++.h>
using namespace std;
int main(){
          int t;
          cin>>t;
          while(t--){
int n;
vector<vector<int>> a(1000,vector<int>(1000,0));
cin>>n;


for(int i=0;i<n;i++){
          int m;
          cin>>m;
for(int j=0;j<m;j++){
cin>>a[i][j];
}
}

sort(a.begin(),a.end(),[](const std::vector<int> &p, const std::vector<int>&q){
          return p[0]<q[0];
});

for(int i=0;i<a.size();i++){
          cout<<a[i][0];
}



int get=0;
for(int i=0;i<n;i++){
          get=min(get,a[i][0]);
}

int array[1000];
for(int i=0;i<n;i++){
          array[i]=max(a[i][0],a[i][1]);
}

sort(array,array+n);

for(int i=1;i<n;i++){
get+=array[i];
}

cout<<get<<endl;

}



return 0;
}