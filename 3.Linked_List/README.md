# 1. 연결 리스트(Linked List)

## 목차


[1. 연결 리스트의 이해](#1)

[2. 연결 리스트 연산](#2)

[3. 연결 리스트 문제](#3)

[4. 연결 리스트 뒤집기](#4)

[5. 순환 검출(Cycle Detection)](#5)

[6. 두 수 더하기](#6)

---

## 1. 연결 리스트의 이해<a id="1"></a>

- 연결 리스트(Linked List)
  - 각 자료가 다음 자료에 연결 고리를 가진 자료구조
  - 데이터를 가진 하나의 요소 : 노드 (데이터 + 다음 노드 주소값)

<br>

- 배열 vs 연결 리스트
  - 배열
    - 관리하려는 하나의 데이터를 특정 크기의 공간에 연속적으로 저장
    - 고정 크기
    - 요소 사이에 값을 넣기 위해 값을 뒤로 옮겨주는 작업 필요
    - 인덱스를 사용하여 특정 위치 값에 접근
    - 데이터 크기만큼의 메모리 공간 필요
  - 연결 리스트
    - 데이터를 동적 크기로 관리, 불연속적으로 메모리에 저장
    - 요소 사이에 값을 넣기 위해 연결고리만 변경
    - 값에 접근하기 위해 처음부터 순회
    - 데이터와 연결 고리를 저장하기 위해 데이터 크기 이상의 메모리 공간 필요
    - big-O
      - insertion: O(1)
      - deletion: O(1)
      - search: O(n)

---

## 2. 연결 리스트 연산<a id="2"></a>
python Linked List 구현
```py
from typing import Any

# 노드 클래스 생성
class Node:
  def __init__(self, data: Any):
    self.data = data
    self.next = None


class LinkedList:

# 연결 리스트의 처음을 가리키는 포인터 변수 head
  def __init__(self):
    self.head = None

# 연결 리스트 순회
  def traverse(self):
    temp = self.head
    
    while (temp):
      print(temp.data, end=" ")
      temp = temp.next
    print()

# 맨 뒤 요소 삽입
def push_back(self, data:Any):
  new_node = Node(data)
  
  if self.head is None:
    self.head = new_node
    return
  
  last = self.head
  while (last.next):
    last = last.next
  
  last.next = new_node

# 맨 앞 요소 삽입
def push(self, data:Any):
  new_node = Node(data)
  
  if self.head is None:
    self.head = new_node
    return
    
  temp = self.head
  self.head = new_node
  new_node.next = temp

# TODO: Remove 부분 다시 공부!!

# 노드 삭제
def remove_node(self, node:Node):
  if node == None: return
  
  if node.next == None:
    node = None: return
  
  next_node = node.next
  node.val = next_node.val
  node.next = next_node.next
  
  next_node = None

# 객체 생성 방법
linked_list = LinkedList()

node = Node(3)
print(f'{node.data}')

# 데이터 간 연결
node1 = Node(11)
node2 = Node(12)
node3 = Node(13)

node1.next = node2
node2.next = node3

linked_list.traverse()


```
---

## 3. 연결 리스트 문제<a id="3"></a>

---

## 4. 연결 리스트 뒤집기<a id="4"></a>

---

## 5. 순환 검출(Cycle Detection)<a id="5"></a>

---

## 6. 두 수 더하기<a id="6"></a>
