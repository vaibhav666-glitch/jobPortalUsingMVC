export class RecuriterModel{
    constructor(id,email,name,password){
        this.id=id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    static add(name,email,password)
    {
        let newUser= new RecuriterModel(users.length+1,name,email,password);
        users.push(newUser);

    }
    static isValidRecruiter(email,password)
    {
       return users.find(u=>u.email==email, u.password==password);
    }

}
var users=[];