function addData(){
    var email = document.getElementById("email").value;
    var phn = document.getElementById("phn").value;
    var name = document.getElementById("name").value;
    var getEmail = localStorage.getItem('userEmail')
    if(getEmail == email ){
        document.write("<h1>User already exists</h1>");
    }
    else{
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userphn', phn);
        localStorage.setItem('username', name);
        localStorage.userEmail = email;

        localStorage.userphn = phn;

        localStorage.username = name;

        document.write("<h1>LOgin succesful</h1>");

    }


    
    
        

}