class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const abhi = new User("abhi","abhi@gmail.com", "123")
console.log(abhi.encryptPassword());
console.log(abhi.changeUsername());


//======================================

//NOW:
// Prototype wala code = purana JS style
//behind the scenes, the above code is similar to this:

function UserN(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
UserN.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
UserN.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const abhi2 = new UserN("abhi","abhi@gmail.com", "123")
console.log(abhi2.encryptPassword());
console.log(abhi2.changeUsername());

//======================================
// 👉 JavaScript engine ke andar, class bhi prototype hi use karta hai
// JavaScript mein classes hoti hi nahi, sirf prototypes hote hain.
// Class bas prototype ka sugar-coating hai.