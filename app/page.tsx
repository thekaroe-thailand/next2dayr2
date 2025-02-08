'use client'
const { useState } = require("react");
export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="text-2xl text-yellow-200">
        Count: {count}
      </div>
      <button
        className="button-blue"
        onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button
        className="button-red"
        onClick={() => setCount(count - 1)}>
        Click me
      </button>
    </div>
  );
}
