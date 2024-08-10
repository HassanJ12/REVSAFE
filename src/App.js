import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";

import Dashboard from "./Pages/Dashboard";

import Error404Page from "./Pages/Errors/404";
import Profile from "./Pages/Profile";
import Collections from "./Pages/Collections";
import Collection from "./Pages/Collection";
import Price from "./Pages/Price";
import AboutPage from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/price" element={<Price/>} />
        <Route path="/about" element={<AboutPage/>} />



        <Route path="/accounts/sign-in" element={<SignInPage />} />
        <Route path="/accounts/sign-up" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Collections />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collection/:id" element={<Collection />} />


        
        <Route path="/profile" element={<Profile />} />


        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
