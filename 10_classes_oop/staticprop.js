class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`User: ${this.username}`);
    }
    static createId(){                     // Static method: ye function class se belong karta hai, object se nahi
        return `12345`;
    }
}

const user1 = new User('Alice');

class Teacher extends User{
    constructor(username, subject){
        super(username);
        this.subject = subject;
    }
}

const teacher1 = new Teacher('Bob', 'Math');
console.log(teacher1.createId()); // Error
console.log(Teacher.createId()); // '12345'       //static methods inherit ho jaate hain classes ke beech
