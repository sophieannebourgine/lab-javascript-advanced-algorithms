function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 9;
}

StackDataStructure.prototype.isEmpty = function () {
    if (this.stackControl.length === 0) {
        return true
    }
    else {
        return false
    }
}


StackDataStructure.prototype.canPush = function () {
    if (this.MAX_SIZE > this.stackControl.length) {
        return true
    }
    else {
        return false
    }
}

StackDataStructure.prototype.push = function (n) {
    if (this.canPush()) {
        this.stackControl.push(n);
        return this.stackControl;
    }
    else {
        return "Stack Overflow"
    }
}


StackDataStructure.prototype.pop = function (n) {
    if (this.stackControl.length>0) {
        
        return this.stackControl.pop();
    }
    else {
        return "Stack Underflow";
    }
}
