import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Aboutus from './pages/Aboutus';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Login from './pages/Login';
import './App.css';
import CreateMembers from './components/CreateMembers';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar />
         <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/aboutus' element={ <Aboutus />} />
          <Route path='/contact' element={ <Contact />}/>
          <Route path='/login' element={ <Login />}/>
          <Route path='/create-members' element={ <CreateMembers /> } />
         </Routes>
         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
