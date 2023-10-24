import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar.js'
import Textbox from './Components/Textbox';

function App() {
  return (
    <>
    <Navbar title = "Text Utils App"/>
    <div className='container m-3'>
    <Textbox title = "Enter Text Here"/>
    {/* <About/> */}
    </div>
    </>

  );
}

export default App;

// Add one by opne all the components in this react file 
// and do the imports for the same
// Can pass props as shown above "title"