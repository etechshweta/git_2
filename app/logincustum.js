  $(document).ready(function(){
    $("#submit").click(function(e){
        e.preventDefault();
        var username = $("#txtUsername").val();
        var password = $("#txtPassword").val();
        if (username != '' && password!=''){
          $.ajax
          ({
            type: "GET",
            url: "logindata.json",
            dataType: "json",
            success: function (result) {
              $.each(result, function(i, data ) {
                  if (username != '' && password!='')
                      {
                      if(username==data.username && password==data.password){
                        window.location.href="./list/nextpg/index.html";
                        $("#msg").html("login sucessful");
                                localStorage.setItem('username', JSON.stringify(username));
                                console.log(username)
                        return false;
                      }
                      else{
                        $("#msg").html("login unsucessful");
                        return true;
                      }
                      }
              });
            }
          });
        }
        else {
          $("#msg").html("Please fill all the fields");
        }
    });
  });