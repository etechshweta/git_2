  $(document).ready(function(){
    $("#submit").click(function(e){
        e.preventDefault();
        var username = $("#txtUsername").val();
        var password = $("#txtPassword").val();
        if (username != '' && password!=''){
          $.ajax
          ({
            type: "GET",
            url: "data.json",
            dataType: "json",
            success: function (result) {
              $.each(result, function(i, data ) {
                  if (username != '' && password!='')
                      {
                      if(username==data.username && password==data.password){
                        $("#msg").html("login sucessful");
                        return false;
                      }
                      else{
                        $("#msg").html("login unsucessful");
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