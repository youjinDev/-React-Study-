# ✨useEffect

## 1. 정의

- 컴포넌트에서 `부수 효과`를 처리할 때 사용하는 Hook
- `부수 효과 (Side Effect)` : 함수 실행시 함수 외부의 상태를 변경하는 연산. 대표적으로 **API 호출과 이벤트 처리 함수, DOM 조작** 등이 있다.
- 부수효과 함수들이 컴포넌트 함수 본문 내에서 허락된다면 UI의 불일치를 야기할 수 있기 때문에 useEffect Hook을 사용해 처리한다. 리액트에서는 브라우저가 모두 그려질 때까지(=렌더링 될 때까지) useEffect의 수행을 지연하기 때문에 다른 작업의 수행에 영향을 끼치지 않음!
- 중요한 것은 useEffect를 이용하여 특정 컴포넌트의 **특정 생명주기**에 실행할 함수를 조정 할 수 있다는 것!

### 1-1. 컴포넌트의 생명주기

|  종류   | 설명                                       |
| :-----: | ------------------------------------------ |
|  Mount  | 컴포넌트가 렌더링 된 상태                  |
| Updated | 컴포넌트의 상태값이 변경된 상태            |
| Unmount | 컴포넌트를 더이상 보이지 않게 한 후의 상태 |

## 2. 이렇게 생겼어요👀

### 2-1. 기본

```Typescript
useEffect(sideEffectFunction, [dependencies]);
```

- useEffect hook은 두 개의 파라미터를 가진다
  - **첫번째 인자** : 실행할 side effect 함수. 비동기로 수행됨
  - **두번째 인자** : 배열 (의존성 배열) 👉 조건부 effect 수행 가능

✔ 두번째 인자를 주지 않으면 첫 렌더링과, 후에 모든 업데이트에서 항상 실행된다 (every mount + updated)

```javascript
useEffect(() => {});
```

✔ 빈 배열을 주면 최초 렌더링 된 후 실행된다 (ComponentDidMount)

```javascript
useEffect(() => {}, []);
```

✔ 의존성 배열에 특정 state 변수를 주면 최초 렌더링, 해당 state가 변경될 때마다 실행된다 (ComponentDidUpdated)

```javascript
useEffect(() => {}, [count, count2, ...etc]);
```

### 2-2. Clean up을 위한 함수 리턴

외부 데이터에 메모리 누수가 일어날 만한 일 (etc. 구독 설정) 을 할 때는 정리가 필요하다. (etc. 구독 설정 후 제거) 컴포넌트가 생성될 때 실행할 부수효과 함수와, 컴포넌트가 사라질 때 실행할 함수를 별도로 지정할 수 있다.

```javascript
useEffect(() => {
  // do something...
  console.log("뭐가 먼저 실행될까?"); // 실행 순서 : 2

  return () => {
    console.log(
      "이 함수는 컴포넌트가 unmount되기 직전, 부수 효과 함수가 실행되기 직전에 실행됩니다"
    ); // 실행 순서 : 1
  };
}, []); // 👈 여기를 빈배열로 줘야 의도대로 생성될 때 부수효과 함수가, 사라질 때 리턴 함수가 실행됨!!
```

## 3. 사용법

CodeSandBox : https://codesandbox.io/s/3dopx

---

## 📂 Reference

- 리액트 공식 문서 : https://ko.reactjs.org/docs/hooks-reference.html#useeffect
- 이재승, 실전 리액트 프로그래밍
