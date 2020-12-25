import React from 'react';
import logo from './logo.svg';
import './index.css'
import './App.css'
import {BrowserRouter,Route,Redirect} from  'react-router-dom'
import {Provider} from 'react-redux'
import {Store} from './reducers/index'
import Login from './components/login/login'
import Register from './components/register/register'
import PublicRoutes from './routes/public.routes'


function App() {
  return (
    <Provider store={Store}>
<div className="App">
     
     {/* <Content/> */}
     <BrowserRouter >
     <Route exact path="/">
   <Redirect to="/home" />
</Route>
     <Route path='/signup' exact component={Register}/>
     <Route path='/login' exact component={Login}/>
     <Route path="/home" component={PublicRoutes}/>
    
     </BrowserRouter>
   </div>
    </Provider>
    
  );
}

export default App;
