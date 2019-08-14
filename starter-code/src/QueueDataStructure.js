function QueueDataStructure () {
    this.queueControl=[];
    this.MAX_SIZE=9;
}

QueueDataStructure.prototype.isEmpty=function () {
    if (this.queueControl.length ===0) {
        return true;  
    }
    else {
        return false;
    }
}

QueueDataStructure.prototype.canEnqueue=function() {
    if(this.MAX_SIZE>this.queueControl.length){
        return true
    }
    else {
        return false 
    }
}
QueueDataStructure.prototype.enqueue = function (n) {
    if (this.canEnqueue()) {
        this.queueControl.push(n);
        this.queueControl.reverse();

        return this.queueControl;
    }
    else {
        return "Queue Overflow"
    }
}

QueueDataStructure.prototype.dequeue = function () {
    if (this.queueControl.length>0) {
        return this.queueControl.pop();
    }
    else {
        return "Queue Underflow";
    }
}