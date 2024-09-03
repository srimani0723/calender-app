import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import CalendarView from "./components/CalenderView";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CalendarView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
