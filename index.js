const form=document.getElementsByTagName("form")[0];
 let email=document.getElementById("email");
 let pwd=document.getElementById("pwd");
 let error=document.getElementById("error");
 let passerror=document.getElementById("passerror");
function validate(callback)
{
   
    let email=document.getElementById("email");
    let pwd=document.getElementById("pwd");
    let error=document.getElementById("error");
    let passerror=document.getElementById("passerror");
    

      if(email.value.trim()==="")
    {
      email.style.border="2px solid red";
      error.innerText="Enter Email id";
      error.style.color="red";
      error.style.left="10px";

    //  mess.push="enter valid email";
    //  mess.style.color="red";
      return false;
    
    }

     else if(email.value!="admin")
      {
        email.style.border="2px solid red";
        error.innerText="enter valid email id";
        error.style.color="red";
        error.style.left="10px";

      
        return false;
      }
      
      if(pwd.value.trim()==="")
    {
      pwd.style.border="2px solid red";
      passerror.innerText="Enter password";
      passerror.style.color="red";
      passerror.style.left="10px";
      //passerror.innerText="";
      return false;
    
    }

      
        else if(pwd.value!="12345")
        
        {
          pwd.style.border="2px solid red";
          passerror.innerText="Enter the password properly";
          passerror.style.color="red";
          passerror.style.left="10px";
         // passerror.innerText="";
          return false;
        }
        else{
             
        //     alert("login successfully");  
        //   //  alert.style="green";
        //    return true;
             callback();
          }

}


// form.addEventListener('submit',function(event){
//         if(!validate())
//         {
//             event.preventDefault();
//          }
//        });



       email.addEventListener('click',function(){
        if(email.value==="admin");
        {
        email.style.border="2px solid green";
        
        }
       })
       pwd.addEventListener('click',function(){
        if(pwd.value==="12345");
          {
        pwd.style.border="2px solid green";
       
         }

       })



form.addEventListener('submit',function(event){
    if(!validate(okay))
    {
        event.preventDefault();
    }
  });


  function okay(url) {
    alert("login successfully");  
    location.replace(list.html);
    return true;
  }


