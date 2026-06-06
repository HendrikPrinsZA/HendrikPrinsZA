import { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="island-card">
      <p className="island-label">React · client:load</p>
      <p className="island-desc">Hydrates immediately on page load.</p>
      <p className="count-display">{count}</p>
      <button
        type="button"
        className="island-btn"
        onClick={() => setCount(c => c + 1)}
      >
        Bump it
      </button>
    </div>
  );
}
