function Counter() {
  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input 
        id="step" 
        type="number" 
      />
      <button type="button">-_-</button>
      <button type="button">0_0</button>
      <button type="button">+_+</button>
      <span>0</span>
    </div>
  );
}

export default Counter;