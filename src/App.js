import Accordion from './Accordion';
import './App.css';
import Cards from './Cards';
import Contact from './Contact';
import Download from './Download';
import Features from './Features';
import Firstpage from './Firstpage';
import Footer from './Footer';
import Frequently from './Frequently';
import NavBar from './NavBar'
import Oneclick from './Oneclick';
import Secondpage from './Secondpage';
import SimpleBookmark from './SimpleBookmark';

function App() {
  return (
    <div className="App">

     <NavBar/> 
     <Firstpage />
     <SimpleBookmark/>
     <Features/>
     <Secondpage/>
     <Oneclick/>
     <Download/>
     <Cards/>
     <Frequently/>
     <Accordion/>
     <Contact/>
     <Footer/>
     



    </div>
  );
}

export default App;
