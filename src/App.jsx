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
import { useContext } from 'react';
import { EditContext } from './context/AppContext';

function App() {
  const { data: members, loading, error, setData } = UseFetch(`${dataUrl}/view-list`)

  const [loggedIn, setLoggedIn] = useState(!!JSON.parse(localStorage.getItem('loggedIn')))
  console.log("Logged in: ", loggedIn)

  

  const { editFirstName, editParentId, setEditFirstName, setEditParentId } = useContext(EditContext)
  
  
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
          <Route path='/admin/edit-member/:id' element={ 
            <EditMembers
              members={members}
              editFirstName={editFirstName} 
              editParentId={editParentId}
              setEditFirstName={setEditFirstName}
              setEditParentId={setEditParentId} 
            />} 
          />
          <Route path='/admin/create-members' element={ <CreateMembers /> } />
         </Routes>
         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
