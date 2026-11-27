
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// Main Components
import NavBar from "./Components/NavBar/NavBar";
import Timer from "./Components/Timer/Timer";
import Footer from "./Components/Footer/Footer";

// Home Components
import Hero1 from "./Components/Hero1/Hero1";
import Approach from "./Components/Approach/Approach";
import Programs from "./Components/Programs/Programs";
import Resources from "./Components/Resources/Resources";
import Stories from "./Components/Stories/Stories";
import Parteners from "./Components/Parteners/Parteners";
import Page from "./Components/Page/Page";

// Pages
import About from "./Components/About/About";
import Programz from "./Components/Programz/Programz";
import Blog from "./Components/Blog/Blog";
import BlogDetail from "./Components/BlogDetail/BlogDetail";
import Element from "./Components/Element/Element";
import Contact from "./Components/Contact/Contact";

// MACHINERY IMPORT
import Machinery from "./Components/Machinery/Machinery";

// Product Pages
import Window from "./Components/Window/Window";
import Door from "./Components/Door/Door";
import Cladding from "./Components/Cladding/Cladding";
import Glass from "./Components/Glass/Glass";
import Tents from "./Components/Tents/Tents";
import Curtain from "./Components/Curtain/Curtain";
import Paints from "./Components/Paints/Paints";
import Partition from "./Components/Partition/Partition";
import Parking from "./Components/Parking/Parking";
import Iron from "./Components/Iron/Iron";

const App = () => {
  return (
    <Router>
      <div className="app">

        <Timer />
        <NavBar />

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Hero1 />
                <Approach />
                <Programs />
                <Resources />
                <Stories />
                <Parteners />
                <Page />
                <Footer />
              </>
            }
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={
              <>
                <About />
                <Footer />
              </>
            }
          />

          {/* PROGRAMS */}
          <Route
            path="/programz"
            element={
              <>
                <Programz />
                <Footer />
              </>
            }
          />

          {/* BLOG */}
          <Route
            path="/blog"
            element={
              <>
                <Blog />
                <Footer />
              </>
            }
          />

          {/* WINDOWS */}
          <Route
            path="/Window"
            element={
              <>
                <Window />
                <Stories />
                <Footer />
              </>
            }
          />

          {/* DOORS */}
          <Route
            path="/Door"
            element={
              <>
                <Door />
                <Stories />
                <Footer />
              </>
            }
          />

          {/* IRON */}
          <Route
            path="/Iron"
            element={
              <>
                <Iron />
                <Stories />
                <Footer />
              </>
            }
          />

          {/* MACHINERY & EQUIPMENT */}
          <Route
            path="/Machinery"
            element={
              <>
                <Machinery />
                <Stories />
                <Footer />
              </>
            }
          />

          {/* GLASS */}
          <Route
            path="/Glass"
            element={
              <>
                <Glass />
                <Stories />
                <Footer />
              </>
            }
          />

          {/* PARTITION */}
          <Route
            path="/Partition"
            element={
              <>
                <Partition />
                <Stories />
                <Footer />
              </>
            }
          />

          {/* PARKING */}
          <Route
            path="/Parking"
            element={
              <>
                <Parking />
                <Stories />
                <Footer />
              </>
            }
          />

          {/* TENTS */}
          <Route
            path="/Tents"
            element={
              <>
                <Tents />
                <Stories />
                <Footer />
              </>
            }
          />

          {/* CLADDING */}
          <Route
            path="/Cladding"
            element={
              <>
                <Cladding />
                <Stories />
                <Footer />
              </>
            }
          />

          {/* ALUMINIUM CURTAIN */}
          <Route
            path="/Curtain"
            element={
              <>
                <Curtain />
                <Stories />
                <Footer />
              </>
            }
          />

          {/* PAINTS */}
          <Route
            path="/Paints"
            element={
              <>
                <Paints />
                <Stories />
                <Footer />
              </>
            }
          />

          {/* BLOG DETAIL */}
          <Route
            path="/blog-detail"
            element={
              <>
                <BlogDetail />
                <Footer />
              </>
            }
          />

          {/* ELEMENT */}
          <Route
            path="/element"
            element={
              <>
                <Element />
                <Footer />
              </>
            }
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <Footer />
              </>
            }
          />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
