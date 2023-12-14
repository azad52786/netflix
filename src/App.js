import { Outlet, useNavigate } from 'react-router';
import './App.css';
import Header from './component/Header';
import {  onAuthStateChanged } from '@firebase/auth';
import { auth } from './Firebase auth/Firebse';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removerUser } from './utils/userSlice';


const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid , email , displayName} = user;
        dispatch(addUser({uid : uid , email : email , displayName: displayName}));
        navigate("/home");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removerUser());
        navigate('/login');
      }
    });

    return () => unsubscribe();
  } , []);

  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App;
