     
         var checkid=[];
         var count=0;
         var re="";
         var test="";

         var response;
         var checkBox = document.createElement("input");
         var label = document.createElement("label");
         checkBox.type = "checkbox";
        function change(){
               
             var xhttp=new XMLHttpRequest();
             xhttp.onreadystatechange=function(){
                if(this.readyState==4&&this.status==200){
                   var response=JSON.parse(this.responseText);
                     console.log(response);
                   
                    
               //       for(var i=0;i<response.length;i++)
               //       {
               //         re +="<li>"+ response[i].title + "</td><td></td><td>" + `<input type="checkbox" class="checkbox" value="checked" id=${checkid} ` + "</li>"
               //          checkid=`${response[i].id}`; 
               //       //re +="<li>"+ response[i].title + "</td><td></td><td>" ;
               //       // var checkbox = document.createElement('input');
               //       // checkbox.type = "checkbox";
               //       // checkbox.name = "name" + response[i].title ;
               //       // checkbox.value = "value";
               //       // checkbox.id = "id" + i;
               //       // re += + response[i].title ;
              //    }
  
                 //  document.getElementById("demo").innerHTML=re;
                 var myDiv = document.getElementById("cboxes");
                 for (var i = 0; i < response.length; i++) {
                  var checkBox = document.createElement("input");
                  var label = document.createElement("label");;

                  checkBox.type = "checkbox";
                  
                  checkBox.value ="<li>"+ response[i].title +"</li>";
                  myDiv.appendChild(checkBox) ;
                  myDiv.appendChild(label);
                 label.appendChild( document.createTextNode(response[i].title));
               
                
               }
                 
               
        }
 }
            xhttp.open("get","https://jsonplaceholder.typicode.com/todos",true);
            xhttp.send();
            
}

// function checkboxes(){
//    var inputElems = document.getElementsByTagName("input"),
//    count = 0;
//    for (var i=0; i<inputElems.length; i++) {
//    if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
//        count++;
      
//    }
   
//    if(count==5)
//    {
//       alert("Congrats. 5 Tasks have been Successfully Completed ” ")
//       break;
//    }
// }

// }


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

// promise is triggered to resolve here, when calling the function
getPromise().then((count) => {
   console.log("count"+count);
});


