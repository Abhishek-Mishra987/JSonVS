const User ={
    _email: 'a@ab.com',
    _password: 'abc',


    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const user1 = Object.create(User);  // Create a new object that inherits from User
console.log(user1.email);  // Access the email property using the getter