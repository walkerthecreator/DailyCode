import  { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Submission from "./components/Submission"
import TableView from "./components/TableView"

const App = () => {
  return (
    <BrowserRouter>

      <Nav />
      <div className="w-4/5 mx-auto mt-10">
          <Routes>
            <Route path="/" element={<Submission />}></Route>
            <Route path="/view" element={<TableView />}></Route>
          </Routes>
      </div>
    </ BrowserRouter>
  )
}

export default App  