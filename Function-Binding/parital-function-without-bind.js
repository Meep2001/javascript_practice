function partial(func,...argBound) {
    return function(...args){
        func.call(this,...argBound,...args)
    }
}

let user={
    name:"John",
    say(time,phrase){
        console.log(`Time:${time} - ${phrase} ${this.name}`);
    }
}

user.sayNow=partial(user.say,`${new Date().getTime()}`);

user.sayNow('HELLO');