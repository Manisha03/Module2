   // <script type="text/javascript">
    function validation()
    {
        var correct_way =/^[A-Za-z]+$/;

        //FirstName
        var fname =document.getElementById('fname').value;
        if (fname == "")
         {
            document.getElementById('fname_error').innerHTML="Please fill name";
            return false;
         }
                if (fname.length<3)
         {
            document.getElementById('fname_error').innerHTML="Username must be 3 character";
            return false;
         }
                if (fname.length>20)
         {
            document.getElementById('fname_error').innerHTML="Username should be less then 20 character";
            return false;
         }
         if(fname.match(correct_way))
            true;
         else
         {
            document.getElementById('fname_error').innerHTML="Only alphabets are allow";
            return false;
         }

                //FirstName
        var lname =document.getElementById('lname').value;
        if (lname == "")
         {
            document.getElementById('lname_error').innerHTML="Please fill name";
            return false;
         }
                if (lname.length<3)
         {
            document.getElementById('lname_error').innerHTML="Lastname must be 3 character";
            return false;
         }
                if (lname.length>20)
         {
            document.getElementById('lname_error').innerHTML="Lastname should be less then 20 character";
            return false;
         }
         if(fname.match(correct_way))
            true;
         else
         {
            document.getElementById('lname_error').innerHTML="Only alphabets are allow";
            return false;
         }
    }
//</script>