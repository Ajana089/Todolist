     
        
         var count=0;
         var response;
         var checkBox = document.createElement("input");
         var label = document.createElement("label");
          checkBox.type = "checkbox";
           function change(){
               
             var xhttp=new XMLHttpRequest();
             xhttp.onreadystatechange=function(){
                if(this.readyState==4&&this.status==200){
                   var response=JSON.parse(this.responseText);
                    
                   var myDiv = document.getElementById("cboxes");
                 for (var i = 0; i < response.length; i++) {
                  var checkBox = document.createElement("input");
                  var label = document.createElement("label");;

                  checkBox.type = "checkbox";
                  
                  checkBox.value = response[i].title + "\n";
                  myDiv.appendChild(checkBox) ;
                  myDiv.appendChild(label);
                 label.appendChild( document.createTextNode(response[i].title))+" <br/> " ;
                 
                
               }
                 
               
        }
 }
            xhttp.open("get","https://jsonplaceholder.typicode.com/todos",true);
            xhttp.send();
            
}



const getPromise = function() {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
         var inputElems = document.getElementsByTagName("input"),
   count = 0;
   for (var i=0; i<inputElems.length; i++) {
   if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
       count++;
      
   }
   
   if(count==5)
   {
      alert("Congrats. 5 Tasks have been Successfully Completed ” ")
      break;
   }
}

           resolve(count);
       }, 1000);
   });
};


getPromise().then((count) => {
   //console.log("count"+count);
});


