// import React from "react";


// function App() {
//   let ele = React.createElement("div" , {className:"App"} ,
//     React.createElement("h1" ,null, "Header")
//   )
//   return (
//     <div className="App">
//       <h1>Header</h1>
//       <h1 style ={{color:"red"}}>one waste fellow vysh</h1>
//     </div>
  
//   );
// }

// export default App;


// !components 
// !CBC

// import React from "react";
// calss App extends React.Component{

// }


// !compnents composition


// import React from 'react'
// import Navbar from '/components/navbar'
// import Main from '/components/main'
// import Sidebar1 from '/components/sidebar1'
// import Sidebar2 from '/components/sidebar2'
// import Footer from '/components/Footer'
// const App = () => {
//     return (

//         <div className= 'App'>
//             <navbar/>
//             <main/>
//         <div className='Sidebar'>
//         <Sidebar1/>
//         <Sidebar2/>

//         </div>
//         <Footer/>

//         </div>

    
//     )
// }
// export default App
// import React from 'react';
// import Navbar from './components/navbar';  // Use lowercase 'navbar' if the file is named that way
//   // Assuming components are in the 'components' folder
// import Main from './components/Main';
// import Sidebar1 from './components/Sidebar1';
// import Sidebar2 from './components/Sidebar2';
// import Footer from './components/Footer';

// const App = () => {
//     return (
//         <div className='App'>
//             <Navbar />
//             <Main />
//             <div className='Sidebar'>
//                 <Sidebar1 />
//                 <Sidebar2 />
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default App;

// import React, { Component } from 'react'
// // import CBCPropsEx from './src./compnents./propsex./CBCPropsEx';
// import CBCPropsEx from './components/propsex/CBCPropsEx'
// import FBCPropEx from './components/propsex/FBCPropEX'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <CBCPropsEx
//         username="sanju"
//         age={20}
//         hobbies={["playing" , "reading books" , "stock"]}
//         address={{city:"kamareddy" , area:"dmk"}}
//         sendFun={function(){alert("hi i am sanju")}}
//         />

//       </div>
//     )
//   }
// }


// <FBCPropEx
// username="Sanju"
// isMarried={true}
// hobbies={["Reading","Writing","Eating"]}
// />


import React, { Component } from 'react'

export default class 
FBCStateEx extends Component {
  render() {
    return (
      <div>
        FBCStateEx
      </div>
    )
  }
}



