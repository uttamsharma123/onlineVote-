function isValid()
{
    var password=$("input[name=password]").val();
    var confirmPassword=$('input[name="confirm-password]').val();
    var aadhar=$("input[name=aadhar]").val();
    var fname=$("input[name=fname]").val();
    var lname=$('input[name=lname]').val();
    var mobile=$('input[name=mobile]').val();

    
    if (fname=="" )
    {
        alert("enter your first name");
        return false;
    }
    if(fname.length<3)
    {
        alert("first name should be valid");
    }
     if(aadhar=="")
     {
         alert("entre addhar anum");
         return false;
     }
    
     if(lname=="")
     {
         alert("Enter your last name ");
         return false;
     }
     if(mobile=="")
     {
         alert("Enter your mobile number");
         return false;
     }
     if(password=="")
     {
         alert("Enter your password");
         return false;

     }
     if(confirmPassword=="")
     {
         alert('Confirm your password');
         return false;
     }
    
        return true;
    
  
}


