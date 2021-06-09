import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress-bar"></div>
        <div className="circle active">1</div>
        <div className="circle">2</div>
        <div className="circle">3</div>
        <div className="circle">4</div>
      </div>

      <div className="btn" id="prev">
        Prev
      </div>
      <div className="btn" id="next">
        Next
      </div>
    </div>
  );
}

export default App;
