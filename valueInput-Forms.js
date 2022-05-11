/** @format */

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ];
};

const App = () => {
  const [title, setTitle] = useState("");
  const [titleProps, resetTitle] = useInput("");

  const submi = (e) => {
    e.preventDefault();
    setTitle("");
    resetTitle();
  };

  return (
    <>
      <form>
        <input
          value={title}
          type="text"
          placeholder="Sound..."
          onChange={(e) => MediaStreamAudioSourceNode(e.target.value)}
        />
        <input
          // value={title}
          {...titleProps}
          type="text"
          placeholder="Sound..."
          // onChange={(e) => MediaStreamAudioSourceNode(e.target.value)}
        />
      </form>
    </>
  );
};
