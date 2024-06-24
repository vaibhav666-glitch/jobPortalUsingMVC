export class RecuriterModel{
    constructor(id,name,email,password){
        this.id=id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static add(name,email,password)
    {
        let newUser= new RecuriterModel(users.length+1,name,email,password);
        users.push(newUser);

    }
    static isValidRecruiter(email,password)
    {
       // console.log(users);
        return users.find(u => u.email == email && u.password==password);
        
    }

}
var users=[];