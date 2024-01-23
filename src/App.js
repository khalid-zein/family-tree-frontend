import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Aboutus from './pages/Aboutus';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/Admin/Admin';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataUrl } from './data/ApiUrls'
import './App.css';
import UseFetch from './components/UseFetch';
import EditMembers from './pages/Admin/EditMembers';
import PrintCertificate from './pages/Admin/PrintCertificate';
import CreateMembers from './pages/Admin/CreateMembers';

function App() {
  const { data: members, loading, error, setData } = UseFetch(`${dataUrl}/view-list`)
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    // Check if a valid token is present in local storage
    const token = localStorage.getItem("twt-token");

    if (token) {
      setLoggedIn(true);
    } else {
      navigate("/login");
    }
  }, []);

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
          <Route path='/admin-members' element={ 
            <Admin 
              loading={loading} 
              members={members}
              error={error} 
            />} 
          />
          <Route path='/admin-create' element={ 
            <CreateMembers 
              setData={setData}
              members={members}
            />} 
          />
          <Route path='/admin-edit/:id' element={ <EditMembers />} />
          <Route path='/admin-print-certificate' element={ 
            <PrintCertificate 
              members={members} 
              loading={loading} 
              error={error}
              setData={setData} 
            /> } 
          />
         </Routes>
         <Footer />
    </div>
  );
}

export default App;
