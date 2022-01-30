import React, { useState } from "react";
import { useNavigate } from "react-router";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import "./create.css";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   Email: "",
   Frontend: "",
   Backend: "",
   Batch: "",
 });
 const navigate = useNavigate();
 

 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 

 async function onSubmit(e) {
   e.preventDefault();
 

   const Task = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(Task),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "",
   Email: "",
   Frontend: "",
   Backend: "",
   Batch: "", });
   navigate("/");
 }
 

 return (
     
   <div>
     <h3>Submit Task</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name *</label>
         <input
         placeholder="Name"
         required="true"
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="Email">Email </label>
         <input
        //  required="true"
        placeholder="Email"
           type="Email"
           className="form-control"
           id="Email"
           value={form.Email}
           onChange={(e) => updateForm({ Email: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="Frontend">Github Frontend URL *</label>
         <input
        //  placeholder="Github Frontend URL"
         required="true"
           type="URL"
           className="form-control"
           id="Frontend"
           value={form.Frontend}
           onChange={(e) => updateForm({ Frontend: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="Backend">Github Backend URL</label>
         <input
        //  placeholder="Github Backend URL"
           type="URL"
           className="form-control"
           id="Backend"
           value={form.Backend}
           onChange={(e) => updateForm({ Backend: e.target.value })}
         />
       </div>

       <br></br>

       <div className="form-group">
         <label htmlFor="Batch">Batch</label>
         <input
        //  placeholder="Github Backend URL"
           type="URL"
           className="form-control"
           id="Batch"
           value={form.Batch}
           onChange={(e) => updateForm({ Batch: e.target.value })}
         />
       </div>

       {/* <div className="form-group">
       <select id = "dropdown">
    <option value="N/A">Select the batch</option>
    <option value="1">WeekDays batch 12</option>
    <option value="2">WeekDays batch 13</option>
    <option value="3">WeekEnd Batch 10</option>
    <option value="4">WeekEnd Batch 11</option>
    <input
           type="dropdown"
           className="form-control"
           id="dropdown"
           value={form.Backend}
           onChange={(e) => updateForm({ Backend: e.target.value })}
         />
    
       </select>        */}
       {/* </div> */}

       {/* <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="Intern"
             checked={form.level === "Intern"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">Intern</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionJunior"
             value="Junior"
             checked={form.level === "Junior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionJunior" className="form-check-label">Junior</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionSenior"
             value="Senior"
             checked={form.level === "Senior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionSenior" className="form-check-label">Senior</label>
         </div>
       </div> */}
       <br></br>
       <div className="form-group">
         <input
           type="submit"
           value="Submit Task"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}