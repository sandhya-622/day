import React from 'react'
// import Navbar from './Navbar.jsx';
import Navbar from './Navbar';

import {BrowserRouter  , Routes , Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import Classroom from "./Classroom";
import Assessments from "./Assessment";
import Store from "./Store";
import Calender from "./Calender";
import News from "./News";
import Blog from "../pages/Blog";
import PageNotFound from "../pages/PageNotFound";
import MyAccount from "./MyAccount";
// import MySettings from "../profile/MySettings";

import MySettings from './profile/MySettings';



const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/classroom' element={<Classroom/>}/>
            <Route path='/assessment' element={<Assessments/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/calender' element={<Calender/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/profile' element={<profile/>}/>
            <Route path='/profile/MyAccount' element={<MyAccount/>}/>
            <Route path='/profile/MySettings' element={<MySettings/>}/>
       
        </Routes>
        <Route path='*' element={<PageNotFound/>}/>
    </BrowserRouter>
  )
}

export default App