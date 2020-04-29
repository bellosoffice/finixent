function confirmMessage(message) {
    // name variable is used to store user's name
    
    name = (document.getElementById("visitor_name").value);

    // message variable is used to store user's message
    message = (document.getElementById("message").value);

    
    //checking if message field is empty and display error message
    if (message.length() == 0) {

        alert("Please enter a message before sending");
    } 

        //checking if name field is empty and display error message
    else if(name.length() == 0){
        alert("Please enter your name before sending");
    }
    else{
        alert("Message has been sent");
    }

}