var catchme = "beef jerki";
module.exports.catchme = catchme;

function anime() {
    console.log("Anime ist cool");

}
module.exports.anime = anime;

function isInt(n) {
    return n % 1 === 0;
}

function goku(vegeta, picolo) {
    if ((typeof vegeta !== "number" || typeof picolo !== "number")) {

        console.log("Error: You have used a ".concat(
            (typeof vegeta),
            " & ",
            (typeof picolo),
            " var types. But only numbers are accepted!"));
        return;
    }
    if ((!isInt(vegeta)) || (!isInt(picolo))) {
        console.log("Error: You have a not integer number but only integer numbers accepted!");
        return;
    }
    if ((vegeta < picolo) || (vegeta < 0) || (picolo < 0)) {
        console.log(" Error: You have a value numbers but only positive numbers accepted!")
        return;
    }

    return (vegeta - picolo);
}
const strength = [];
strength.push("pan");
strength.push("Kuirin");
strength.push("nappa");
strength.push("chichi");
strength.push("bardock");
strength.push("buo")


module.exports.strength = strength;
module.exports.goku = goku;