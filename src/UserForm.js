import React from "react"
import {useFormik} from "formik"
import { signUpSchema } from "./SignUpSchemas"
import PhoneNumber from "./PhoneData"
const initialValues={
   UserName:"",
   Email:"",
   PhoneNo:"",
   Address1:"",
   Address2:"",
   City:"",
   State:"",
   Pincode:"",
}

const UserForm = ()=>{
const  { values, errors, touched, handleBlur, handleChange, handleSubmit }=useFormik({
   initialValues,
   validationSchema:signUpSchema,
   onSubmit:(values,action)=>{
      console.log(values)
   action.resetForm();     
   }
    
});
console.log(errors.UserName)


 return(
 <div className="parent-container">
 <div className="Login_details">
    <form onSubmit={handleSubmit}>
    <div className="BasicDetails">
    
       <h2>Basic Details</h2>
       <label htmlFor="UserName" >User Name:</label>
       <input className='InputLabel' type="text" name="UserName" value={values.UserName} onChange={handleChange} onBlur={handleBlur} ></input>
        {/* {errors.UserName && touched.UserName ? (<p className="form_Error">{errors.UserName}</p>):null} */}
        <p className="form_Error">{errors.UserName}</p>
       <br/>
       <label htmlFor="Email">Email:</label>
       <input className='InputLabel' type="email" name="Email" value={values.Email} onChange={handleChange}></input>
       <p className="form_Error">{errors.Email}</p>
       <br/>
      <div className="Phone"><PhoneNumber  /></div>
        
       {/* <input type="text" name="PhoneNo" value={values.PhoneNo} onChange={handleChange}  ></input>
       <p className="form_Error">{errors.PhoneNo}</p>  */}
    </div>
    <div>
        <h2>Address:</h2>
        <label htmlFor="Address1">Enter your HouseNo/Flat</label>
        <input className='InputLabel' type="text" name="Address1" value={values.Address1} onChange={handleChange}></input>
        <p className="form_Error">{errors.Address1}</p>
       <br/>
       <label htmlFor="Address2">Enter your Street</label>
       <input className='InputLabel' type="text" name="Address2" value={values.Address2} onChange={handleChange}></input>
       <p className="form_Error">{errors.Address2}</p>
        <br/>
       <label htmlFor="City">City:</label>
       <input className='InputLabel' type="text" name="City" value={values.City} onChange={handleChange} ></input>
       <p className="form_Error">{errors.City}</p>
       <label htmlFor="State">State:</label>
       <input className='InputLabel' type="text" name="State" value={values.State} onChange={handleChange}></input>
       <p className="form_Error">{errors.State}</p>
       <label htmlFor="Pincode" value={values.Pincode} onChange={handleChange}>Pincode:</label>
       <input className='InputLabel' type="text" name="Pincode" value={values.Pincode} onChange={handleChange}></input>
       <p className="form_Error">{errors.Pincode}</p>
    </div>
    <div className="FileUpload">
         <h2>File upload</h2>
         <label htmlFor="uploadf">
            Upload Resume:
         </label>
         <input className='InputLabel2' type="file" accept=".pdf,.png" name="uploadf" ></input>
    </div>
    <div className="MultiFileUpoad">
         <h2>Upload</h2>
         <label htmlFor="uploadMf">
            MultipleFileUpload:
         </label>
         <input className='InputLabel2' type="file" accept=".pdf,.png" name="uploadf" multiple></input>
    </div>
    <button className="LoginButton" type="submit">Register</button>
    </form>
 </div>
 </div>
  
 );

}

export default UserForm; 