function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {         // Object.defineProperty(object, propertyName, descriptor);
                                                   //descriptor (rules)  :- An object that defines how the property behaves
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }

    })
    Object.defineProperty(this, 'password', {         // Object.defineProperty(object, propertyName, descriptor);
                                                   //descriptor (rules)  :- An object that defines how the property behaves
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }

    })
}


const user1 = new User('riyaMisha@gmail.com', '12345abc6');
console.log(user1.email);
console.log(user1.password);


// What is Object.defineProperty() in JavaScript?
// 👉 It’s a way to create or control a property of an object very precisely.
// Think of it as saying:
// “I’m adding a property, and here are the rules for how it behaves.”