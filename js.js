
var userInput = document.getElementById("number");
var buttonPush = document.getElementById("kvm");
var output = document.getElementById("output")

userInput.value = "";

function converter(event) {
    id = event.target.id;
    var input = userInput.value;

    output.innerHTML = "";

    if(isNaN(input) || input == "") {
        output.innerHTML = "It needs a number!";
        userInput.value = "";
    } else if(id == "kvm") {
        kvadratmeter(input);
        output.innerHTML = "Kvadratmeter: " + calculations.kvadratmeter + "<br> Hektar: " + calculations.hektar + "<br> Kvadratkilometer: " + 
        calculations.kvadratkilometer + "<br> Fotbollsplaner: " + calculations.Fotbollsplaner;
    } else if(id == "kvKm") {
        kvadratkilometer(input);
        output.innerHTML = "Kvadratmeter: " + calculations.kvadratmeter + "<br> Hektar: " + calculations.hektar + "<br> Kvadratkilometer: " + 
        calculations.kvadratkilometer + "<br> Fotbollsplaner: " + calculations.Fotbollsplaner;
    } else if(id == "ha") {
        hektar(input);
        output.innerHTML = "Kvadratmeter: " + calculations.kvadratmeter + "<br> Hektar: " + calculations.hektar + "<br> Kvadratkilometer: " + 
        calculations.kvadratkilometer + "<br> Fotbollsplaner: " + calculations.Fotbollsplaner;
    } else if(id == "fbp") {
        Fotbollsplaner(input);
        output.innerHTML = "Kvadratmeter: " + calculations.kvadratmeter + "<br> Hektar: " + calculations.hektar + "<br> Kvadratkilometer: " + 
        calculations.kvadratkilometer + "<br> Fotbollsplaner: " + calculations.Fotbollsplaner;
    }

}

function kvadratmeter (v) {
    kvm = v * 1;
    ha = v / 10000;
    kvKm = v / 1000000;
    fbp = v * 0.0001465;

    calculations = {
        kvadratmeter: kvm,
        hektar: ha,
        kvadratkilometer: kvKm,
        Fotbollsplaner: fbp
    };
};

function kvadratkilometer(v) {
    kvm = v * 1000000;
    ha = v * 100;
    kvKm = v * 1;
    fbp = v * 146.5;

    calculations = {
        kvadratmeter: kvm,
        hektar: ha,
        kvadratkilometer: kvKm,
        Fotbollsplaner: fbp
    };
}

function hektar(v) {
    kvm = v * 10000;
    ha = v * 1;
    kvKm = v / 100;
    fbp = v * 1.465;

    calculations = {
        kvadratmeter: kvm,
        hektar: ha,
        kvadratkilometer: kvKm,
        Fotbollsplaner: fbp
    };
}

function Fotbollsplaner(v) {
    kvm = v * 6825.938566552901;
    ha = v * 0.6825938566552901;
    kvKm = v / 146.5;
    fbp = v * 1;

    calculations = {
        kvadratmeter: kvm,
        hektar: ha,
        kvadratkilometer: kvKm,
        Fotbollsplaner: fbp
    };
}