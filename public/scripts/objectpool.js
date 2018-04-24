function Node(object) {
    this.object = object;
    this.next = null;
}

function LLQueue() {
    this.head = [];
    this.tail = [];
    this.last;
    this.name;
}

LLQueue.prototype.isEmpty = function(name) {
    if(this.head[name] == undefined || this.head[name] == null) return true;
    else return false;
}

LLQueue.prototype.push = function(object) {
    this.name = object.constructor.name;
    if(this.isEmpty(this.name)) {
        this.head[this.name] = object;
        object.next = null;
        object.prev = null;
        this.tail[this.name] = this.head[this.name];
    }
    else {
        this.tail[this.name].next = object;
        object.next = null;
        object.prev = this.tail[this.name];
        this.tail[this.name] = this.tail[this.name].next;
    }
}

LLQueue.prototype.pop = function(name) {
    if(this.isEmpty(name)) return null;
    else {
        this.last = this.head[name];
        this.head[name] = this.head[name].next;
        return this.last;
    }
}

function createObject(className, args) {
    //console.log(scene.freelist.isEmpty(className));
    let name = className.name;
    let c = className;

    for(let i = 0; i <  arguments.length-1; i++) {
        arguments[i] = arguments[i+1];
    }
    arguments.length--;

    if(scene.freelist.isEmpty(name)) {
        scene.entities.push(new c(...arguments));
        //console.log("creating projectile");
    }
    else {
        scene.freelist.pop(name).init(...arguments);
    }
    //console.log(scene.entities.length);

}