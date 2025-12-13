import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Error from "./component/base/error"
import Home from "./component/Home"
import Navbar from "./component/base/Navbar"
import { Routes, Route } from "react-router-dom"
import Fundamentals from "./component/QBank/fundamentals"
import Termo from "./component/QBank/termo"
import Phisiology from "./component/QBank/phesiology"
import Add from "./component/add"
import "./app.css"
import Exam from "./component/Exam"
import Micro from "./component/QBank/micro"
import Anatomy from "./component/QBank/anatomy"
function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />

          <Route path="/fundamentals" element={<Fundamentals />} />
          <Route path="/termo" element={<Termo />} />
          <Route path="/physiology" element={<Phisiology />} />
          <Route path="/micro" element={<Micro />} />
          <Route path="/anatomy" element={<Anatomy />} />

          <Route path="/add/:subject" element={<Add />} />
          <Route path="/:subject/exam/:num" element={<Exam />} />
        </Routes>
      </div>
    </>
  )
}

export default App
