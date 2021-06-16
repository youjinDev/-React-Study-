# ✨useEffect

## 1. 정의

- 컴포넌트에서 `부수 효과`를 처리할 때 사용하는 Hook
- `부수 효과 (Side Effect)` : 함수 실행시 함수 외부의 상태를 변경하는 연산. 대표적으로 API 호출과 이벤트 처리 함수, DOM 조작 등이 있다.
- 중요한 것은 useEffect를 이용하여 특정 컴포넌트의 **실행 타이밍**을 조정 할 수 있다는 것!

### 1-1. 컴포넌트의 생명주기

- `Mount` : 컴포넌트가 렌더링 된 상태
- `Updated` : 컴포넌트의 상태값이 변경된 상태
- `Unmount` : 컴포넌트를 더이상 보이지 않게 한 후의 상태

## 2. 이렇게 생겼어요👀

### 2-1. 기본

```Typescript
useEffect(() => {} , []);
```

- useEffect hook은 두 개의 파라미터를 가진다
  - 첫번째 인자 : 실행할 side effect 함수
  - 두번째 인자 : 배열 (의존성 배열) 👉 언제 useEffect가 실행될 지 알려줌

✔ 두번째 인자를 주지 않으면 렌더링 될 때마다 항상 실행된다 (every mount + updated)

```Typescript
useEffect(() => {});
```

✔ 빈 배열을 주면 최초 렌더링 될 때 실행된다 (ComponentDidMount)

```Typescript
useEffect(() => {} , []);
```

✔ 의존성 배열에 특정 state 변수를 주면 최초 렌더링, 해당 state가 변경될 때마다 실행된다 (ComponentDidUpdated)

```Typescript
useEffect(() => {} , [count, count2, ...etc]);
```

### 2-2. 함수 리턴

```Typescript
useEffect(() => {
    // do something...
    console.log('뭐가 먼저 실행될까?'); // 실행 순서 : 2

    return () => {
      console.log("이 함수는 컴포넌트가 unmount되기 직전, 부수 효과 함수가 실행되기 직전에 실행됩니다"); // 실행 순서 : 1
    }
}, []); // 👈 여기를 빈배열로 줘야 생성될 때 부수효과 함수가, 사라질 때 리턴 함수가 실행됨!!
```

## 3. 사용법
