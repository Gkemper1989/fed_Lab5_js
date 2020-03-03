//constructor function for the tables
function Table(masterName, spots, taken, level) {
    //objects properties
    this.masterName = masterName;
    this.spots = spots;
    this.taken = taken;
    this.level = level;
    this.checkAvailablity = function() {
        return this.spots - this.taken;
    };
}
//instances of the tables and their arguments
var rTable = new Table ('Glaurung', 10, 4, 'hardcore players "The mighty Tarrasque it might be awakened!!!"');
var wTable = new Table ('Serzend', 10, 6, 'advanced players "your hero abilities will be tested!"');
var gTable = new Table ('Eric the red', 10, 9, 'intermediate players "The way is going to be tough!"');
var bTable = new Table ('Arwe', 10, 6, 'intermediate players "The way is going to be tough!"');
var blTable = new Table ('Dreadnought', 20, 12, ' beginner players "Let\'s go have a walk in the park"');

//wTable
var wName = document.getElementById('wName');
wName.textContent = 'Dungeon Master Name: ' + wTable.masterName;
var wSpots = document.getElementById('wSpots');
wSpots.textContent = 'Spots availiable: ' + wTable.checkAvailablity();
var wLevel = document.getElementById('wLevel');
wLevel.textContent = 'Level of the table: ' + wTable.level;

//rTable
var rName = document.getElementById('rName');
rName.textContent = 'Dungeon Master Name: ' + rTable.masterName;
var rSpots = document.getElementById('rSpots');
rSpots.textContent = 'Spots availiable: ' + rTable.checkAvailablity();
var rLevel = document.getElementById('rLevel');
rLevel.textContent = 'Level of the table: ' + rTable.level;

//gTable
var gName = document.getElementById('gName');
gName.textContent = 'Dungeon Master Name: ' +  gTable.masterName;
var gSpots = document.getElementById('gSpots');
gSpots.textContent = 'Spots availiable: ' + gTable.checkAvailablity();
var gLevel = document.getElementById('gLevel');
gLevel.textContent = 'Level of the table: ' + gTable.level;

//bTable
var bName = document.getElementById('bName');
bName.textContent = 'Dungeon Master Name: ' + bTable.masterName;
var bSpots = document.getElementById('bSpots');
bSpots.textContent = 'Spots availiable: ' + bTable.checkAvailablity();
var bLevel = document.getElementById('bLevel');
bLevel.textContent = 'Level of the table: ' + bTable.level;

//blTable
var blMasterName = document.getElementById('blName');
blName.textContent = 'Dungeon Master Name: ' + blTable.masterName;
var blSpots = document.getElementById('blSpots');
blSpots.textContent = 'Spots availiable: ' + blTable.checkAvailablity();
var blLevel = document.getElementById('blLevel');
blLevel.textContent = 'Level of the table: ' + blTable.level;

