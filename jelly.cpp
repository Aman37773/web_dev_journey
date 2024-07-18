#include <bits/stdc++.h>
using namespace std;
int main()
{
  int t;
  cin >> t;
  while (t--)
  {
    int n, m, k, a[50], b[50];
    cin >> n >> m >> k;
    for (int i = 0; i < n; i++)
    {
      cin >> a[i];
    }
    for (int i = 0; i < m; i++)
    {
      cin >> b[i];
    }
    sort(a, a + n);
    sort(b, b + m);

    for (int i = 1; i <= k; i++)
    {
      if (i % 2 != 0)
      {
        if (a[0] < b[m - 1])
        {
          swap(a[0], b[m - 1]);
        }

        sort(a, a + n);
        sort(b, b + m);
      }
      if (i % 2 == 0)
      {
        if (b[0] < a[n - 1])
        {
          swap(b[0], a[n - 1]);
        }

        sort(a, a + n);
        sort(b, b + m);
      }
    }
    int sum = 0;
    for (int i = 0; i < n; i++)
    {
      sum += a[i];
    }
    cout << sum << endl;
  }

  return 0;
}