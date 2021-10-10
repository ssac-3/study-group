# 7.동적 프로그래밍(Dynamic Programming)

## 목차


[1. 동적 프로그래밍의 이해](#1)

[2. 동일 합으로 배열 분할 문제](#2)

[3. 동전 교환](#3)

[4. 최장 공통부분 수열(Longest Common Subsequence)](#4)

---

## 1. 동적 프로그래밍의 이해<a id="1"></a>
- **동적** : 시가변적이며 다단계적인 특성을 나타내기 위해 채택한 용어
- **동적 프로그래밍 알고리즘 적용** : 하나의 문제를 작은 단위로 쪼개어 해결하고 결과를 수집 및 병합하여 최종 결론을 생성하는 과정
- **하위 문제(Sub problem)** 
  - 1+2+3+4+1+2 에서 1+2를 하위문제로 쪼개어 연산
  - 연산을 할 때 하위 문제로 쪼개어 이미 낸 결과를 연산하지 않고 꺼내어 사용
- **메모이제이션(Memoization)** : 하위문제의 연산 결과를 저장하는 방법
- **동적 프로그래밍 키워드** : [shortest / longest], [minimized / maximized], [least / most], [fewest / greatest], [biggest / smallest]
  - 최대 구간의 합 : 배열의 연속적인 요소로 만들 수 있는 모든 조합 중 가장 큰 값을 찾는 것

<br>

### 재귀와 메모이제이션 예시
- 피보나치수열 재귀
- 시간복잡도 O(2^n)
```py
from typing import List

def fib(n:int, memo:List[int]) -> int:
  if memo[n] == -1:
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
   return memo[n]
   
n = 4
memo = [-1] * (n+1)
memo[0], memo[1] = 0,1

print(fib(n, memo))
```

<br>

- 피보나치수열 메모이제이션
- 시간복잡도 O(n)
```py
def fib(n:int) -> int:
  memo = [-1] * (n-1)
  memo[0], memo[1] = 0, 1

  for i in range(2, n+1):
    memo[i] = memo[i-1] + memo[i-2]
  return memo[n]
  
print(fib_iter(4))
```

---

## 2. 동일 합으로 배열 분할 문제<a id="2"></a>

---

## 3. 동전 교환<a id="3"></a>

---

## 4. 최장 공통부분 수열(Longest Common Subsequence)<a id="4"></a>
