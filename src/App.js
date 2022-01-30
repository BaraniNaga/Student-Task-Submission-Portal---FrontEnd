import React from "react";
 

import { Route, Routes } from "react-router-dom";
 

import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Login from "./components/login";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import App1 from "./components/App/App1";

// function Appp() {
//   const [token, setToken] = useState();
//   return (
//     <div>
//      <Navbar />
//      <Routes>
//     <Route path="/dashboard" element={< Dashboard />} />
//     <Route path="/preferences" element={<Preferences />} />
//     </Routes>
//    </div>
//    );
//   };
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<Create />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/Login" element={<App1 />} />
       <Route path="/Admin" element={<Admin />} />
       <Route path="/RecordList" element={<RecordList />} />
       <Route path="/dashboard" element={< Dashboard />} />
       <Route path="/preferences" element={<Preferences />} />

       
  
     </Routes>
   </div>

   
 );
};
 
export default App;