// Setup
var collection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};
  
// Only change code below this line
function updateRecords(object, id, prop, value) {
    if (value === '') {
        delete object[id][prop];
    } else if (prop === "tracks") {

        if ((object[id].hasOwnProperty(prop)) === false) {
            object[id][prop] = [];
        }
        
        object[id][prop].push(value);

    } else {
        object[id][prop] = value;
    }
    
    console.log(object)
    return object;
}
  
window.onload = () => console.log(collection)

function main() {
    let id = parseInt(document.getElementById("id").value);
    let prop = document.getElementById("property").value;
    let value = document.getElementById("value").value;
    updateRecords(collection, id, prop, value);
}