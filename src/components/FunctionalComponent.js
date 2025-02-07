// import React from 'react'
//  import'./style.css'

//  function FunctionalComponent(props) {
//      console.log(props)
//      let applyStyle = props.apply ? 'heading':' '
//    return (
//      <div>
//          <h1 class={applyStyle}>Welcome to my React class {props.Name}, {props.city}</h1>
//          {props.child}
//      </div>
//    )
//  }

//  export default FunctionalComponent


 import React from 'react';

 function FunctionalComponent(props) {
   return (
     <div>
       <h1>Welcome to my React class {props.clgName}, {props.city}</h1>
      
       <h2>{props.child}</h2>
     </div>
   );
 }

export default FunctionalComponent;



// import React from 'react'
// import './Styles.css'
// function FunctionalComponent(props){
//     console.log(props)
//     let applyStyle=props.apply ? 'heading':' '
//     let inlineStyle={
//         color:'green',
//         backgroundColor:'red',
//         fontSize:'50px'
//     }
//     return (
//       <div>
//         <h1 class={`${applyStyle} font-style`}>welcome to class{props.clgName}</h1>
//         {props.children}
//         <h2 style={inlineStyle}>Good aftn</h2>
//       </div>
//     )
//   }
//   export default FunctionalComponent