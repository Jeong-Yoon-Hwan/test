import { useState } from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";



const AppRouter = () =>{

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return(
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route exact path="/">
            <Home/>
          </Route>
        ):(
          <Route exact path="/">
            <Auth/>
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;