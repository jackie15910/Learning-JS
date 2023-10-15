let userName = "Bro";
let userInbox = 0;



function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){ //You must login in order to access the nested function, otherwise you cannot invoke them
        console.log(`Welcome ${userName}`);
    }
    
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}

/* displayUsername(); //These will not work outside the nested function as it cannot detect it
displayUserInbox(); */

login();