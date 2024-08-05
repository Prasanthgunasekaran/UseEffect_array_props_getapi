import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetApi from "./component/GetApi";
import Array from "./component/Array";
import Parent from "./Prop/Parent";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<GetApi />} />
          <Route path="/array" element={<Array />} />
          <Route path="/props" element={<Parent />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
