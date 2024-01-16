import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Aboutus from './pages/Aboutus';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/Admin/Admin';
import CreateMembers from './pages/Admin/CreateMembers';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataUrl } from './data/ApiUrls'
import './App.css';
import UseFetch from './components/UseFetch';
import EditMembers from './pages/Admin/EditMembers';
import PrintCertificate from './pages/Admin/PrintCertificate';

function App() {
  const { data: allMembers, loading, error, setData } = UseFetch(`${dataUrl}/view-list`)
  // const [loggedIn, setLoggedIn] = useState(!!JSON.parse(localStorage.getItem('loggedIn')))
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate()
  const members = allMembers.members
  console.log(members)

  useEffect(() => {
    // Check if a valid token is present in local storage
    const token = localStorage.getItem("twt-token");

    if (token) {
      setLoggedIn(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  console.log("Logged in: ", loggedIn)

  return (
    <div className="App">
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

          {/* set user loggedin */}
          <Route path='/admin/members' element={ 
            <Admin 
              members={members} 
              loading={loading} 
              error={error} 
              setData={setData} 
            />} 
          />
          <Route path='/admin/edit-member/:id' element={ <EditMembers />} />
          <Route path='/admin/create-members' element={ <CreateMembers /> } />
          <Route path='/admin-print-certificate' element={ 
            <PrintCertificate 
              members={members} 
              loading={loading} 
              error={error} 
            /> } 
          />
         </Routes>
         <Footer />
    </div>
  );
}

export default App;
