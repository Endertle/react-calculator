function App() {
  return (
    <div className="App">
      <div className="calcu-grid">
        <div className="output top-border">
          <div className="prev-operand">32443 *</div>
          <div className="curr-operand">4543</div>
        </div>
        <button className="btn btn-2 btn-method">CE</button>
        <button className="btn btn-method">DEL</button>
        <button className="btn btn-operator">+</button>
        <button className="btn">7</button>
        <button className="btn">8</button>
        <button className="btn">9</button>
        <button className="btn btn-operator">-</button>
        <button className="btn">4</button>
        <button className="btn">5</button>
        <button className="btn">6</button>
        <button className="btn btn-operator">x</button>
        <button className="btn">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button className="btn btn-operator">÷</button>
        <button className="btn btn-2 bottom-left-border">0</button>
        <button className="btn">.</button>
        <button className="btn bottom-right-border btn-equal">=</button>
      </div>
    </div>
  );
}

export default App;
