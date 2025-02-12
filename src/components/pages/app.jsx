import React from 'react'
// import Navbar from "./navbar";
// import Navbar from "./Navbar";
// import Navbar from './components/pages/Navbar';
// import Navbar from "./Navbar.jsx";
import Navbar from './Navbar.jsx';




import {BrowserRouter  , Routes , Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import Classroom from "./Classroom";

// import Classroom from "./Classroom";
// import Assessments from "./Assessments";
import Assessments from "./Assessment";

import Store from "./Store";
import Calender from "./Calender";

import News from "./News";
import Blog from "../pages/Blog";
import PageNotFound from "../pages/PageNotFound";

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
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App