import {BrowserRouter,Route,Routes,} from "react-router-dom";
import Skills from './pages/skills/Skills'
import Projects from './pages/projects/Projects'
import Testimonials from './pages/testimonials/Testimonials'
import Contact from './pages/contact/Contact'
import Info from './pages/my-info/Info'
import Home from './pages/home/Home';
import Navbar from "./components/navbar/Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/my-info' element={<Info/>}/>
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
