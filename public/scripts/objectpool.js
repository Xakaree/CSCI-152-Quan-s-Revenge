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
        this.head[this.name] = new Node(object);
        this.tail[this.name] = this.head[this.name];
    }
    else {
        this.tail[this.name].next = new Node(object);
        this.tail[this.name] = this.tail[this.name].next;
    }
}

LLQueue.prototype.pop = function(name) {
    if(this.isEmpty(name)) return null;
    else {
        this.last = this.head[name].object;
        this.head[name] = this.head[name].next;
        return this.last;
    }
}

function createObject(className, args) {
    //console.log(scene.plist.isEmpty(className));
    let name = className.name;
    if(scene.plist.isEmpty(name)) {
        scene.entities.push(new className(...[].slice.call(arguments, 1)));
        //console.log("creating projectile");
    }
    else {
        scene.plist.pop(name).init(...[].slice.call(arguments, 1));
    }

    //console.log(scene.entities.length);

}