$(document).ready(function(){

  var email="";

  $("#submitBtn").click( function(){
       console.log("CLICK WORKS");
  
 

     email = $("#email").val();


     validate("email",email );
   

  });

  function validate(dataType, data){

     console.log( dataType );
     console.log( data );

     if( data != ""){

       console.log("continue validation...")
    }else
       console.log("No data provided! Validation exits...")
 
   }

}

});