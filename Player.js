class Player{
    constructor(){}

    //getCount() to get the playerCount 
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){ playerCount = data.val(); });
    }


    
    //updateCount() to update the playerCount in the database.
    updateCount() {
        database.ref('/').update({playerCount : playerCount}) ;
    }

    // to update the player name in the database.  create new entries in the database using string concatenation.

    update(name){
        var playerIndex = "player"  + playerCount;
        database.ref(playerIndex).set({ name : name});
    }
}