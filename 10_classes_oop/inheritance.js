class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCOurse(){
        console.log(`Course added by ${this.username}`);
    }
}
const teacher1 = new Teacher("chaitanya", "chaitanya@gmail.com", "123")
console.log(teacher1);
teacher1.logMe();
teacher1.addCOurse();

const user1 = new User("abhi")
// user1.addCOurse() 
//error: user1 ke paas addCourse method nahi hai
//user1 sirf User class ka object hai, Teacher class ka nahi.
user1.logMe()
console.log(teacher1 instanceof User);    //true
