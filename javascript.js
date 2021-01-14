    <script>
      function checkPassword() {
        var password = document.getElementById("passwordbox");
        var passwordText = password.value;
            if(passwordText == "eunbinfool") {
              return true;
            }
            alert("Access denied")
            return false;
      }
    </script>
