function calculate() {
    var xcoord1 = document.getElementById("xcoord").value;
    var xdistance1 = document.getElementById("xdistance").value;
    var xnarrow1 = document.getElementById("xnarrow").value;
    var xdirection1 = document.getElementById("xdirection").value;

    var zcoord1 = document.getElementById("zcoord").value;
    var zdistance1 = document.getElementById("zdistance").value;
    var znarrow1 = document.getElementById("znarrow").value;
    var zdirection1 = document.getElementById("zdirection").value;

    var xma = -99999;
    var xmi = -99999;
    var zma = -99999;
    var zmi = -99999;

    if (xdirection1 == "East") {
        xma = parseFloat(xcoord1) + parseFloat(xdistance1);
        xmi = parseFloat(xma) - parseFloat(xnarrow1);
    } else if (xdirection1 == "West") {
        xma = parseFloat(xcoord1) - parseFloat(xdistance1);
        xmi = parseFloat(xma) + parseFloat(xnarrow1);
    }

    if (zdirection1 == "South") {
        zma = parseFloat(zcoord1) + parseFloat(zdistance1);
        zmi = parseFloat(zma) - parseFloat(znarrow1);
    } else if (zdirection1 == "North") {
        zma = parseFloat(zcoord1) - parseFloat(zdistance1);
        zmi = parseFloat(zma) + parseFloat(znarrow1);
    }
    var xMiddle;
    var zMiddle;
    var xNether
    var zNether
    xMiddle = parseFloat(xma) - (parseFloat(xma) - parseFloat(xmi)) / 2;
    zMiddle = parseFloat(zma) - (parseFloat(zma) - parseFloat(zmi)) / 2;
    xNether = parseFloat(xMiddle) / 8;
    zNether = parseFloat(zMiddle) / 8;

    var xout = Math.trunc(xMiddle);
    var zout = Math.trunc(zMiddle);
    var xoutnether = Math.trunc(xNether);
    var zoutnether = Math.trunc(zNether);

    document.getElementById("answer").innerHTML = "Overworld(" + xout + " , " + zout + ") Nether(" + xoutnether + " , " + zoutnether + ")";
}