import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Aboutus from './pages/Aboutus';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/Admin/Admin';
import CreateMembers from './pages/Admin/CreateMembers';
import { useState } from 'react';
import './App.css';
import UseFetch from './components/UseFetch';

function App() {
  const { data: membersList, loading, error, setData } = UseFetch('https://family-tree-web.onrender.com/trees/api/view-list')

  const [loggedIn, setLoggedIn] = useState(!!JSON.parse(localStorage.getItem('loggedIn')))
  console.log("Logged in: ", loggedIn)


  
  
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
         <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/aboutus' element={ <Aboutus />} />
          <Route path='/contact' element={ <Contact />}/>
          <Route path='/login' element={ <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
          <Route path='/admin' element={ <Admin membersList={membersList} loading={loading} error={error} setData={setData} />} />
          <Route path='/admin/create-members' element={ <CreateMembers /> } />
         </Routes>
         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
