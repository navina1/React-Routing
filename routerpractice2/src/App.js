
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import OrderSummary from './Components/OrderSummary';
import NoMathch from './Components/NoMathch';
import Product from './Components/Product';
import Featured from './Components/Featured';
import New from './Components/New';
import Users from './Components/Users';
import UserDetails from './Components/UserDetails';
import Admin from './Components/Admin';
import React from 'react';
import { lazy } from 'react';
import { Suspense } from 'react';
const LazyAbout=lazy(()=>import('./Components/About'))

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<Suspense fallback='Loading.....'>
            <LazyAbout/>
          </Suspense>}/>
          <Route path='/OrderSummary' element={<OrderSummary/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path="featured" element={<Featured/>}/>
            <Route path="new" element={<New/>}/>
          </Route>
          <Route path="users" element={<Users/>}>
            <Route path=":userId" element={<UserDetails/>}/>
            <Route path="admin" element={<Admin/>}/>

          </Route>
           
          <Route path='*' element={<NoMathch/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
