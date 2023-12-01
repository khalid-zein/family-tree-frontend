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
import { dataUrl } from './data/ApiUrls'
import './App.css';
import UseFetch from './components/UseFetch';
import EditMembers from './pages/Admin/EditMembers';
import Certificate from './pages/Admin/Certificate';

function App() {
  const { data: members, loading, error, setData } = UseFetch(`${dataUrl}/view-list`)
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
          <Route path='/login' element={ 
            <Login 
              loggedIn={loggedIn} 
              setLoggedIn={setLoggedIn} 
            />
          }/>
          <Route path='/admin' element={ 
            <Admin 
              members={members} 
              loading={loading} 
              error={error} 
              setData={setData} 
            />} 
          />
          <Route path='/admin/edit-member/:id' element={ <EditMembers />} />
          <Route path='/admin/create-members' element={ <CreateMembers /> } />
            <Route path='/admin/certificate' element={ <Certificate members={members} loading={loading} error={error}/> } />
         </Routes>
         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
