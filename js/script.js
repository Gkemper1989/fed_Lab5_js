//constructor function for the tables
function Table(MasterName, Spots, Taken) {
    //objects properties
    this.MasterName = MasterName;
    this.spots = spots;
    this.taken = taken;
        this.checkAvailablity = function() {
        return this.rooms - this.booked;
    };
}
//instances of the tables and their arguments
var TableD = new Table ('Durin', 10, 4);
var TableS = new Table ('Serzend', 10, 6);
var TableM = new Table ('Tiamat', 30, 29);

//TableM
var elMasterName = document.getElementById('MasterName');
elMasterName.textContent = TableM.MasterName;
var elSpots = document.getElementById('Spots');
elSpots.textContent = TableD.checkAvailablity();

