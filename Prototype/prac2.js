let user={
    name:"name",
    surname:"surname",
    get fullName(){
        console.log("IN GET");
        return `${this.name} ${this.surname}`;
    },
    set fullName(value){
        console.log("IN SET");
        [this.name,this.surname]=value.split(" ");
    }
}

let admin={
    isAdmin:false,
    __proto__:user,
}

admin.fullName="A B";
console.log(admin.fullName);