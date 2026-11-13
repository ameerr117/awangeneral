
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import Timer from "./Components/Timer/Timer";
import Hero1 from "./Components/Hero1/Hero1";
import About from "./Components/About/About";
import Programz from "./Components/Programz/Programz";
import Blog from "./Components/Blog/Blog";
import BlogDetail from "./Components/BlogDetail/BlogDetail";
import Programs from "./Components/Programs/Programs";
import Element from "./Components/Element/Element";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Approach from "./Components/Approach/Approach";
import Resources from "./Components/Resources/Resources";
import Stories from "./Components/Stories/Stories";
import Parteners from "./Components/Parteners/Parteners";
import Page from "./Components/Page/Page";
import Window from './Components/Window/Window';
import Door from './Components/Door/Door';
import Cladding from './Components/Cladding/Cladding';
import Glass from './Components/Glass/Glass';
import Tents from './Components/Tents/Tents';

const App = () => {
  return (
    <Router>
      <div>
        <Timer />
        <NavBar />
        <Routes>
          <Route path="/" element={<><Hero1 /><Approach /><Programs /><Resources /><Stories /><Parteners /><Page /><Footer /></>} />
          <Route path="/about" element={<><About /><Footer /></>} />
          <Route path="/programz" element={<><Programz /><Footer /></>} />
          <Route path="/blog" element={<><Blog /><Footer /></>} />
          <Route path="/Window" element={<><Window /><Stories/><Footer /></>} />
          <Route path="/Door" element={<><Door /><Stories/><Footer /></>} />
          <Route path="/Glass" element={<><Glass /><Stories/><Footer /></>} />
                    <Route path="/Tents" element={<><Tents /><Stories/><Footer /></>} />

          <Route path="/Cladding" element={<><Cladding /><Stories/><Footer /></>} />

          <Route path="/blog-detail" element={<><BlogDetail /><Footer /></>} />
          <Route path="/element" element={<><Element /><Footer /></>} />
          <Route path="/contact" element={<><Contact /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
