const DATA = [
  {
    title: "Section 1",
    content: "내용111",
  },
  {
    title: "Section 2",
    content: "내용222",
  },
];

const useTab = (index, data) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  return {
    currentTab: data[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default function App() {
  const { currentTab, changeItem } = useTab(0, DATA);
  return (
    <div className="App">
      {data.map((elem, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {elem.title}
        </button>
      ))}
      <div>{currentTab.content}</div>
    </div>
  );
}
