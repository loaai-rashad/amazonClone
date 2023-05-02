import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
   const[{ user }, dispatch] = useStateValue();
 

  //pice of code which runs based in a given condition (useEffect)


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        //the user is logged in

        dispatch({
          type: "Set_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "Set_USER",
          user: null,
        });
       }
    });

    return () => {
      // clean up operation
      unsubscribe();
    };
  }, []);

  console.log(user);

   return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
        <Header />
        <Checkout />
        </Route>
         <Route  path="/login">
          <Login />
         </Route>   
        {/*this is the default route */}
        <Route path="/">
        <Header />
        <Home />

        </Route>
      </Switch>
     </div>
   </Router>
  );
}

export default App; 
