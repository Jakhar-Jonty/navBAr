import {BrowserRouter as Router,Route ,Routes} from "react-router-dom";
import './App.css';
import { Nav_bar } from './Components/Nav_bar';
function App() {
  return (
   <>
  {/* <Nav_bar/> */}
    <Router>
      <Routes>
        <Route path="/Home" element={<Nav_bar/>}/>
      </Routes>
    </Router> 
   </>
  );
}

export default App;
