#include<bits/stdc++.h>
using namespace std;
bool compareBySecond(const std::pair<int, int>& a, const std::pair<int, int>& b) {
    return a.second > b.second;
}

int main(){
          int t;
          cin>>t;
          while(t--){
int n,k;
int a[300000];
cin>>n>>k;
for(int i=0;i<n;i++){
          cin>>a[i];
}

for(int i=0;i<n;i++){
          a[i]=a[i]%k;
}

for(int i=0;i<n;i++){
          if(a[i]==0){
                    cout<<i+1<<" ";
          }
}

vector<pair<int,int>> get;
for(int i=0;i<n;i++){
          pair<int,int> p;
          p.first=i+1;
          p.second=a[i];
get.push_back(p);
}
  sort(get.begin(), get.end(), compareBySecond);


for (const auto& i : get) {
if(i.second!=0){
        cout << i.first<<" ";
    }
}
cout<<endl;

          }

return 0;
}