import { useState } from "react"
const ForgetPassword=()=>{
const [sendMail,setSendMail]=useState('')
const [emailValue,setEmailValue]=useState('')
return (
  <div className="ForgetPass">
       <h1>Enter your email id</h1>
       <input className="InputLabel" type="email" placeholder="enter valid Id" value={emailValue} onChange={(e)=>{
        setEmailValue(e.target.value)
       }}></input>
       <button className="LoginButton" onClick={()=>{
        emailValue.length> 0 ? (
        setSendMail("If your mail is registered with us, we have send the credential")):(setSendMail(''))
       }}>send</button>
       {emailValue.length>0 ?(<p>{sendMail}</p>):(<p>Fill your mail id</p>)}
  </div>
)
}
export default ForgetPassword