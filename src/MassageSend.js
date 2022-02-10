import React,{useState,useEffect} from 'react';
import { Link,Navigate} from "react-router-dom";

function MassageSend() {
    const [email,setEmail] = useState()
    const [message,setMessage] = useState()
    const [emailsend,setEmailsend] = useState(undefined)
    const sendEmail = () => {
        fetch("https://formsubmit.co/ajax/rachel7465022@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: "FormSubmit",
                email: email,
                message: message
            })
        })
        .then(response => response.json())
        .then(data => {
            setEmailsend(data.success)
        })
        .catch(error => console.log(error));
    }

    useEffect(()=>{
        console.log(email,message)
    },[email,message])

  return (
      <>
        <Link to="/Thanks">
            <div>123456</div>
        </Link>
        <input type="email" name="email" required placeholder="email address" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" name="message" placeholder="write your message" onChange={(e)=>setMessage(e.target.value)}/>
        <button onClick={sendEmail}>Send</button>
        {
            emailsend ? <div>email send</div> : null
        }
      </>
   
  );
}

export default MassageSend;
