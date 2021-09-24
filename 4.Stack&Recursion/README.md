# 4. 스택(Stack)과 재귀(Recursion)

## 목차


[1. 스택의 이해](#1)

[2. 재귀의 이해](#2)

[3. 유효한 괄호 검증](#3)

[4. 재귀 연습문제](#4)

[5. 재귀 연습](#5)

---

## 1. 스택의 이해<a id="1"></a>
- 먼저 넣은 데이터가 나중에 꺼내지는 자료구조
- FILO; First In Last Out

```js
const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();
stack; //[1, 2]
```

### Stack의 List(Array) 방식과 deque(Linked List) 방식
- 표면적으로는 List와 똑같지만 내부적으로 구현이 다름
  - List는 연속적 메모리 블록을 할당하여 채움
  - deque는 이중 연결 리스트로 데이터 연결을 지원
  - 인덱스 접근 시 List는 바로 접근이 가능하지만 deque는 head부터 순차적 접근 (조회가 느림)
  - 데이터 추가 시 List는 공간 확장이 필요하지만 deque는 메모리 용량이 꽉 찰 때까지 계속 추가 가능

---

## 2. 재귀의 이해<a id="2"></a>

### 재귀 알고리즘의 3가지 조건
- 재귀 호출을 마무리하는 조건인 **베이스 케이스**의 정의
- 지속적인 재귀인자의 변경, 변경되는 인자는 베이스 케이스로 수렴
- 자기 자신을 호출

### 컴퓨터 처리과정
- EBP 레지스터 (Extended Base Pointer) : 스택의 시작점을 저장하는 레지스터
- ESP 레지스터 (Extended Stack Pointer) : 스택 메모리 공간 다음을 시작 위치로 가지는 레지스터
- main 함수 실행 시 메모리 구조 ==> 시작위치(EBP) : 지역변수 1 -> 지역변수 2 : ESP
- main 함수에서 func1 실행 시 메모리 구조 ==> 지역변수 1 -> 지역변수 2 -> arg 1 -> arg 2 -> return address -> EBP(main) 위치 좌표 -> EBP : return value : ESP
- Stack 처럼 역으로 return value를 꺼내고 EBP(main)을 CPU EBP 레지스터로 로드
- 이후 return address로 복귀하여 다음 수행 진행

---

## 3. 유효한 괄호 검증<a id="3"></a>
- 입력으로 주어지는 문자열은 3가지 괄호의 열고 닫고만을 포함 (), [], {}
- 열고 닫음 쌍이 정상적인지 확인
- 비어 있는 문자열은 유효하다고 판단
---

## 4. 재귀 연습문제<a id="4"></a>
- 순열(permutation) : 모든 문자열 치환
- ex) input: 'abc', output: ['abc','acb','bac','bca','cab','cba']
---

## 5. 재귀 연습<a id="5"></a>
