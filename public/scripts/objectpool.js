function Node(object) {
    this.object = object;
    this.next = null;
}

function LLQueue() {
    this.head = null;
    this.tail = this.head;
    this.last;
}

LLQueue.prototype.isEmpty = function() {
    if(this.head == null) return true;
    else return false;
}

LLQueue.prototype.push = function(object) {
    if(this.isEmpty()) {
        this.head = new Node(object);
        this.tail = this.head;
    }
    else {
        this.tail.next = new Node(object);
        this.tail = this.tail.next;
    }
}

LLQueue.prototype.pop = function() {
    if(this.isEmpty()) return null;
    else {
        this.last = this.head.object;
        this.head = this.head.next;
        return this.last;
    }
}

function createProjectile(parent,x,y,w,h, vx,vy, life, color) {
    //console.log(plist.isEmpty());
    if(scene.plist.isEmpty()) {
        scene.entities.push(new Projectile(parent,x,y,w,h, vx,vy, life, color));
        //console.log("creating projectile");
    }
    else {
        scene.plist.pop().init(parent,x,y,w,h, vx,vy, life, color);
    }
}