const Counter = ({ count, onIncrement }) => {
  return (
    <div>
      <button
        onClick={onIncrement}
        className="rounded bg-blue-500 px-4 py-2 text-2xl font-bold text-white transition-colors hover:bg-blue-600 active:bg-blue-700"
      >
        count is {count}
      </button>
    </div>
  );
};

export default Counter;
