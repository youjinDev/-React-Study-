// input value를 받아서 state를 설정해주는 커스텀 훅
const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);
  const onChange = (e) => {
    if (typeof validator !== Function) return;
    const value = e.target.value;
    validator(value) && setValue(value);
  };
  return { value, onChange };
};

export const App = () => {
  const maxLengthValidator = (value) => value.length > 10;
  //useInput은 state를 설정하고 input에대한 validator로직 등을 외부에서 신경쓰지 않게 해줌
  const name = useInput("초기값", maxLengthValidator);
  return (
    <div className="App">
      <input type="text" placeholder="닉네임을 입력하세요" {...name} />
    </div>
  );
};
