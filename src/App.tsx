import HomePage from './pages/HomePage.js'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/header/Navbar.js'
import Products from './pages/Products.js'
import Signin from './components/credential/Signin.js'
import { useState } from 'react'
// import Admin from './components/dashboard/AppLayout.js'
import Sidebar from './components/dashboard/Sidebar.js'
import Orders from './components/dashboard/Orders.js'
import Numbers from './components/dashboard/Numbers.js'
import Numbersanalyzer from './components/dashboard/Numbersanalyzer.js'
import CustomerIdentities from './components/dashboard/CustomerIdentities.js'
import API from './components/dashboard/API.js'
import AppLayout from './ui/AppLayout.js'
import Neworder from './components/dashboard/Neworder.js'
import Footer from './components/Footer.js'
import Copyright from './components/Copyright'
function App() {

  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <>
     <BrowserRouter>
     {!isAdmin && <Navbar isAdmin={isAdmin}/>}
      {/* {isAdmin && <Sidebar/>} */}
       <Routes>
      <Route element={<AppLayout setIsAdmin={setIsAdmin}/>}>
      {/* <Route index element={<Orders replace to= '/orders'/>}/> */}
        <Route  path='/orders'element={<Orders/>}/>
          <Route path='/numbers'element={<Numbers  />}/>
          <Route path='/numbers-analyzer'element={<Numbersanalyzer   />}/>
          <Route path='/customer-identities'element={<CustomerIdentities  />}/>
          <Route path='/api'element={<API    />}/>
          <Route path='/orders/new'element={<Neworder/>}/>
          
        </Route>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/products' element={<Products/>}/>
          <Route path='/signin'element={<Signin  setIsAdmin={setIsAdmin} />}/>
          <Route path='/orders'element={<AppLayout  setIsAdmin={setIsAdmin}  />}/>      
       </Routes>
        {!isAdmin && <Footer isAdmin={isAdmin}/>}
        {!isAdmin && <Copyright/>} 
     </BrowserRouter>
    </>
  )
}

export default App
