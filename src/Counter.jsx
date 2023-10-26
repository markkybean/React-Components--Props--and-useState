import React, { useState, useEffect } from 'react';
import CountDisplay from './CountDisplay';

function Counter({ count, countStatus }) {
  const increment = () => {
    countStatus(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      countStatus(count - 1);
    }
  };

  useEffect(() => {
    if (count % 5 === 0) {
      const bgElement = document.getElementById('bg');
      const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      bgElement.style.backgroundColor = randomColor;
    }
  }, [count]);

  return (
    <div className="row justify-content-center bg-secondary-subtle">
      <div className="col-lg-10 col-sm-8 text-center p-5 mb-2">
        <div className="card shadow" id="bg">
          <CountDisplay count={count} />
          <div className="m-2">
            <button className="btn btn-success m-auto fw-bold" onClick={increment}>
              Increment
            </button>
          </div>

          <div>
            <button
              className="btn btn-danger m-auto fw-bold"
              onClick={decrement}
              disabled={count === 0}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
