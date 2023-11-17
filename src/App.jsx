import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Aboutus from './pages/Aboutus';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/Admin/Admin';
import CreateMembers from './pages/Admin/CreateMembers';
import { useState, useEffect } from 'react';
import { dataUrl } from './data/ApiUrls'
import './App.css';
import UseFetch from './components/UseFetch';

function App() {
  const { data: list, loading, error, setData } = UseFetch(`${dataUrl}/view-list`)

  const [loggedIn, setLoggedIn] = useState(!!JSON.parse(localStorage.getItem('loggedIn')))
  console.log("Logged in: ", loggedIn)

  const members = list.members
  console.log(members)
  // console.log(members)


  
  
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
         <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/aboutus' element={ <Aboutus />} />
          <Route path='/contact' element={ <Contact />}/>
          <Route path='/login' element={ <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
          <Route path='/admin' element={ <Admin members={members} loading={loading} error={error} setData={setData} />} />
          <Route path='/admin/create-members' element={ <CreateMembers /> } />
         </Routes>
         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
