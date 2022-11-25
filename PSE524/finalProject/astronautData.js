// creates a user

class infoUser {
   //functions to create, aquire, modify user information
   //initialize class
    constructor(username, password, email, scores) {
        this.username = username; 
        this.password = password; 
        this.email = email; 
        this.scores = scores; 
    }

    //store information on local machine
    storeInfo() {
        localStorage.setItem("username",this.username);
        localStorage.setItem("password",this.password);
        localStorage.setItem("email",this.email);
        localStorage.setItem("scores", this.scores);
}
}

//returns true if credentials match, otherwise returns false
function checkCredentials(inpUsername,inpPassword) {
    if (inpUsername == localStorage.getItem("username")) {
        if (inpPassword == localStorage.getItem("password")) {
            return true;
        }
    }
    else {
        return false;
    }
}

function createNewUser(name, password, email) {
    const user = new infoUser(name,password,email,[0,0,0]);
    document.writeln("say hello");
    user.storeInfo();
}