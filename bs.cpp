#include<bits/stdc++.h>
using namespace std;

class node{
    public:
    int val;
    node *left;
    node *right;

    node(int get){
        this->val=get;
this->left=NULL;
this->right=NULL;
    }
};

void print(node *head,int n){

queue<node*> m;
m.push(head);
int get=1;
cout<<m.front()->val<<" ";
while(m.empty()==0&&get!=n){
    
    if(m.front()->left!=NULL){
        m.push(m.front()->left);
        cout<<m.front()->left->val<<" ";
        ++get;
    }
    else if(m.front()->left==NULL){
        cout<<"null"<<" ";
    }

     if(m.front()->right!=NULL){
        m.push(m.front()->right);
        cout<<m.front()->right->val<<" ";
        ++get;
    }
    else if(m.front()->right==NULL){
cout<<"null"<<" ";
    }
    
m.pop();
}
return ;
}


void val(node *a,node *head,int count,int n){   //count==1

if(count==n){
    return; 
}

 a->left=new node(0);
    a->right=new node(0);


    val(a->left,head,count+2,n);
    val(a->right,head,count+2,n);
    
    if(count+2==n){
        print(head,n);
        cout<<endl;
    }
     a->left=NULL;
    a->right=NULL;
  
return;
}


int main(){
    int n;
    cout<<"enter n: ";
    cin>>n;
    node *a=new node(0);
    int count=1;
   val(a,a,count,n);
return 0;
}