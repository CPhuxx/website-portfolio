import "./App.css";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Products from "./pages/Products"
import { getConfigData } from "./data/configReader";
import Social from "./components/Social";
import Footer from "./components/Footer";
import SiteRoutes from "./routes/SiteRoutes";

function App() {
  const configData = getConfigData();

  return (
    <>

      

      <Navbar />
      <div className="">
      <div className="pt-[5rem] px-2 py-2">
        <div className="mx-auto max-w-xl bg-white rounded-xl shadow-lg">
          <div className="flex flex-col">
            <div className="flex flex-col">

              <SiteRoutes />
              <Projects />
              {/* <Products /> */}
              
              
              

              
              <Social />
              <Footer />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
