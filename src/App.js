import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Aboutus from './pages/Aboutus';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/Admin/Admin';
import CreateMembers from './pages/Admin/CreateMembers';
import { supabase } from './config/supabaseConfig';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar session={session} />
         <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/aboutus' element={ <Aboutus />} />
          <Route path='/contact' element={ <Contact />}/>
          <Route path='/login' element={ <Login />}/>
          <Route path='/admin' element={ <Admin />} />
          <Route path='/admin/create-members' element={ <CreateMembers /> } />
         </Routes>
         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
