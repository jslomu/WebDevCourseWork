var myMusic = [
{
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
    "CD",
    "8T",
    "LP"
    ],
    "gold": true
}
// Add a record here
];

console.log(myMusic)

function main() {
    let artist = document.getElementById("artist").value;
    let title = document.getElementById("title").value;
    let year = parseInt(document.getElementById("year").value);
    let formats = document.getElementById("formats").value;
    formats_arr = formats.split(",")
    let gold = (document.getElementById("gold").value === 'true');
    myMusic.push({
        "artist": artist,
        "title": title,
        "release_year": year,
        "formats": formats_arr,
        "gold": gold
    })
    console.log(myMusic);
}