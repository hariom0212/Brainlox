import "./css/styles.css";

import Difficulty from './components/Difficulty'
import IdePage from './components/IdePage'
import Login from './components/Login'
import Navbar from "./components/Navbar";
import Widget from './components/Widget';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Playground from "./components/Playground";

export default function App() {

  return (
    <Router>
      <div className="App">
        
        <Routes>
          {/* Login Route is the first page*/}
          <Route path='/' element={<Login />} />
          
          {/* Problems Route */}
          <Route
            path='/problems'
            element={
              <>
                <Navbar />
                <Difficulty ptype="problems" />
                <Widget />
                <Footer />
              </>
            }   
          />

          {/* Workshop Route */}
          <Route
            path='/workshops'
            element={
              <>
                <Navbar />
                <Difficulty ptype="workshops" />
                <Widget />
                <Footer />
              </>
            }   
          />

          {/* IDE Page */}
          <Route 
            path="/idePage"
            element={
              <>
                <Navbar />
                <IdePage />
                <Widget />
                <Footer />
              </>
            }
          />

          {/* Playground page */}
          <Route
            path='/playground'
            element={
              <>
                <Navbar />
                <Playground />
                <Widget />
                <Footer />
              </>
            }
          />

        </Routes>
      
      </div>
    </Router>
    
  );
}