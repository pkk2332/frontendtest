import React from 'react'
import { useStore } from './store/store'
import Home from './pages/home'
import Login from './pages/login'
import {Switch,Route,Redirect,BrowserRouter as Router} from 'react-router-dom'




const Routes = ()=> {
    const [state,]= useStore()
    console.log(!!state.user)
    return (
        <Router>
        <Switch>
        
        <Route exact path="/login" 
        render={()=>{
            return (state.user? <Redirect to="/home" /> : <Login></Login>)
        }}
        // render={(props) => (
        //     state.user ? (
        //         <Redirect to="/"/>
    
        //     ) : (
        //     <Login></Login>
        //     )
        //   )}
           />
        <PrivateRoute path='/home'  exact component={Home} />
    
      </Switch>
      </Router>
    )

}

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [state,]= useStore()
    console.log(!!state.user)
    const checkAuth=(props) => (
      state.user
        ? 
        <Component {...props} />
        : 
        <Redirect to='/login' />
    )
    return(
    <Route {...rest} render={checkAuth} />
  )}


  export default Routes