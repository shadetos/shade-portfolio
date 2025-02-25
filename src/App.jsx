import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Portfolio } from "./components/sections/Portfolio";
import "./index.css"
import { Contact } from "./components/sections/Contact";
import { Resume } from "./components/sections/Resume";

function App() {
  const [isLoaded, setIsLoaded] = useState(false) 
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {" "} 
        <header>

        </header>
        <div 
        className ={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100}`} >
          <Navbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> {/* Passing props from line 9*/}
          <MobileMenu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
          <Home /> 
          <About />
          <Portfolio />
          <Resume />
          <Contact />
        </div>
        <footer>
          <div className="flex justify-center py-8 text-sm text-gray-400">
            <p>&copy; 2024 shade.dev All rights reserved. </p>
            <p>&copy; Please see <a href="https://github.com/shadetos" className="text-gray-300 hover:text-white transition-colors"> GitHub </a> 
            </p>
          </div>

        </footer>
    </>
  );
}

export default App;
