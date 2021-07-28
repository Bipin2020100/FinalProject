
import {BrowserRouter} from 'react-router-dom'
import RouterContainer from './RouterContainer'


function App() {
  

  return (
    <div style={{ backgroundColor: "cadetBlue", textAlign: "center" }}>
    
      <BrowserRouter>
        <RouterContainer/>
      </BrowserRouter>
     
    </div>
  )
//     return (
//         <div style={{ backgroundColor: "cadetBlue", textAlign: "center" }}>
//             <h2 style={{ color: "white" }}>Login and Signup app</h2>
//             <BrowserRouter>
//                 <nav>
//                     <ul style={{textAlign: "left"}}>
                        
//                         <li>
//                            Are you already a user?? If yes please: <Link to='/auth/login'>Login</Link>
//                         </li>
//                         <li>
//                            If not please: <Link to='/auth/signup'>Signup</Link>
//                         </li>
//                     </ul>
//                 </nav>

//                 <Switch>
//                     {/* <Route path='/'>
//                         <Home />
//                     </Route> */}
//                     <Route path='/auth/login'>
//                         <Login />
//                     </Route>
//                     <Route path='/auth/signup'>
//                         <Signup />
//                     </Route>
//                 </Switch>
//             </BrowserRouter>
//             {/* <Login /> */}
//             {/* <Signup /> */}
//         </div>
//     );
}

export default App;
