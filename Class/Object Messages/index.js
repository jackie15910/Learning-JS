var facebookProfile = {
    name: "Jackie",
    friends: 25,
    messages: ["oogabooga"],
    postMessage: function(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage: function(index){
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function(){
        facebookProfile.friends+=1;
    },
    removeFriend: function(){
        if(facebookProfile.friends>0)
        facebookProfile.friends-=1
    }
}