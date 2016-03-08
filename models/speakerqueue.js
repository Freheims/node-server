
function SpeakerQueue() {

    // this is just a simple wrapping around an array

    this.list = [];
    this.next = next;
    this.add = add;
    this.remove = remove;
    this.removeAt = removeAt;
    this.get = get;
    this.size = size;
    console.log("in queue");

    function add(who, num) {
        // put speaker into list at index num
        if(typeof(num) === 'number') this.list.splice(num, 0, who);
        this.list.push(who);
        console.log("Queue is now: "+JSON.stringify(this.list));
    }

    function move(from, to) {
        var speaker = get(from);
        removeAt(from);
        add(speaker, to);
    }

    function next() {
        return this.list.shift();
    }

    function remove(who) {
        var index = this.list.indexOf(who);
        this.removeAt(index);
        
    }

    function get(index) {
        return this.list[index];
    }

    function removeAt(index) {
        console.log("removing at index "+index);
        if (index > -1) {
            this.list.splice(index, 1);
        } else {
            console.log("Error: index lower than 0");
        }

    }

    function size() {
        return this.list.length;
    }

}

module.exports = SpeakerQueue;
