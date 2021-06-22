const useTitle = (initTitle) => {
  const [title, setTitle] = useState(initTitle);
  useEffect(() => {
    document.querySelector("title").innerText = title;
  }, [title]);
  return setTitle;
};

export const App = () => {
  const updateTitle = useTitle("initial Title");
  setTimeout(() => updateTitle("Changed Title"), 3000);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
    </div>
  );
};
