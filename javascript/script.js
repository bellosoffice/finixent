function confirmMessage(message) {
    name = (document.getElementById("visitor_name").value);
    message = (document.getElementById("message").value);

    

    if (message.length() == 0) {

        alert("Please enter a message before sending");
    } else if(name.length() == 0){
        alert("Please enter your name before sending");
    }
    else{
        alert("Message has been sent");
    }

}