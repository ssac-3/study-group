# 2. 문자열(String)

## 목차


[1. 문자열의 이해](#1)

[2. 파이썬에서 문자열 사용법](#2)

[3. 회문(Palindrome) 확인](#3)

[4. 그룹 애너그램](#4)

[5. IPv4 / IPv6 검증 시스템](#5)


---

## 1. 문자열의 이해<a id="1"></a>

---

## 2. 파이썬에서 문자열 사용법<a id="2"></a>

- 파이썬에서 문자열 : 유니코드 문자로 표현한 배열
- character type을 제공하지 않고 str의 길이가 1인 것을 문자로 취급

---

## 3. 회문(Palindrome) 확인<a id="3"></a>
### **[문제]**
- 문자열이 주어지면 해당 문자열이 회문인지 아닌지 확인
- 회문인지 확인하는 문자는 알파벳과 숫자 (대/소문자 구분x)
- ex) 'AbbcbBa' --> true


### Tip. 문자열 합치기
- **+** 연산자
  - 가장 성능이 우수함
  ```js
  let str = 'Hello';
  str += ' ';
  str += 'world';

  console.log(str); // Hello world
  ```

<br>

- concat 함수
  - 파라미터로 문자열 이외의 다른 값도 넣을 수 있음
  - 배열이 arg로 들어가면 배열의 concat으로 인식
  ```js
  const result = 'Hello'.concat(' ', 'world', '!');

  document.write(result); // Hello world!
  ```

<br>

- join 함수
  - 문자열을 이어 붙일 때 separator(구분자)를 지정
  ```js
  const str1 = ['Hello', 'world'].join();
  const str2 = ['Hello', 'world'].join('♥');

  document.write(str1);
  document.write('<br>');
  document.write(str2);
  // Hello,world
  // Hello♥world
  ```
  
  <br>
  
---

## 4. 그룹 애너그램<a id="4"></a>
### **[문제]**
- 주어지는 문자열 리스트를 검사해 서로 같은 애너그램을 가지는 문자열을 그룹으로 묶기
- ex) str = ['eat', 'repaid', 'paired', 'tea', 'bat']
  - result = [['eat', 'tea'], ['repaid', 'paired'], ['bat']]

<br>

### Tip. 배열 중복 제거
- Set 객체
```js
const arr = [1, 2, 3, 3, 2];
const set = new Set(arr);
const uniqueArr = [...set];

document.writeln(Array.isArray(uniqueArr));  // true
document.writeln(uniqueArr);  // 1,2,3
```

- indexOf(), filter()
  - indexOf : 배열에서 특정값이 처음으로 나타나는 index를 리턴
  - filter : 특정 조건에 부합하는 배열의 모든 값을 배열 형태로 리턴
```js
const uniqueArr = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
});

document.writeln(Array.isArray(uniqueArr));
document.writeln(uniqueArr);
```

- forEach(), includes()
  - forEach : 배열을 순회하면서, 배열의 원소들로 주어진 callback함수를 실행
  - includes : 배열에 특정 값이 포함되는지 여부를 검사

```js
arr.forEach((element) => {
    if (!uniqueArr.includes(element)) {
        uniqueArr.push(element);
    }
});

document.writeln(Array.isArray(uniqueArr));
document.writeln(uniqueArr);
```
---

## 5. IPv4 / IPv6 검증 시스템<a id="5"></a>

