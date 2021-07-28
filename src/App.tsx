import React from 'react';
import './index.css'
import './App.css'
import {BrowserRouter,Route,Redirect} from  'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import {Provider} from 'react-redux'
import {Store} from './reducers/index'
import Login from './components/login/login'
import Register from './components/register/register'
import PublicRoutes from './routes/public.routes'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const id = localStorage.getItem('user')
  console.log(id,"iddd")
  //  if(!localStorage.getItem('user')) && <Redirect to="/login" />}
  return (
    <Provider store={Store}>
<div className="App">
   
     {/* <Content/> */}
     <BrowserRouter >
  
     <Route exact path="/">
   <Redirect to="/home" />
</Route>
<ToastContainer
 containerId="an id"
 draggable={false}
/>
<Route path='/signup' exact component={Register}/>
     <Route path='/login' exact component={Login}/>
     <Route path="/home" component={PublicRoutes}/>

     
     
     </BrowserRouter>
   </div>
    </Provider>
    
  );
}

export default App;
