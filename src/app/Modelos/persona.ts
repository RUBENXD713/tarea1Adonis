export class Persona {
    name : String
    lastName: String
    age : Number
    sex : String


    public getName(){
        return this.name
    }
    public getLastName(){
        return this.lastName
    }
    public getAge(){
        return this.age
    }
    public getSex(){
        return this.sex
    }


    public setName(n:String){
        this.name=n;
    }
    public setLastName(l:String){
        this.lastName=l;
    }
    public setAge(a:Number){
       this.age=a;
    }
    public setSex(s:String){
        this.sex=s;
    }
}
