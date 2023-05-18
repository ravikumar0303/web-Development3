import "./ex.css"
import React, { useState } from 'react'

export default function Usercon() {

    let Arr=
    [
    
        { uname: "xxx" ,password :"123"},
        { uname: "rrr" ,password :"13"},
        { uname: "xeex" ,password :"23"},

    ]

    let[value,setans]= useState()
    let str=""
    let pass
    function Header(e)
    {
        str=e.target.value
    }
   
    function Header2(e)
    {
        pass=e.target.value
    }

    function Header2(e)
    {
        pass=e.target.value
    }

    
    function check(e)
     {
  
        for(let i=0;i<Arr.length;i++)
        {
            if(str==Arr[i].uname && pass==Arr[i].password)
                {
                    setans("Login successfully....!!!!")
                    
                    return
                }
            else
                {
                    setans("invalid")
                   
                }
            

        }
    }




  return (
    <div>
              <b>Your Name: <input type="text" placeholder="your name" onBlur={Header} required /> </b>
                  <br></br><br></br>
               <b>Password:<input type="password" placeholder="Password" onBlur={Header2} required/> </b>
               <input type="submit" onClick={check}></input>

                <p>{value}</p>
    </div>
  )
}
