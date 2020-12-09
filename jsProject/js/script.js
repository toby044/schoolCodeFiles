//id function
let $ = function (foo) {
    return document.getElementById(foo);
};

//class function
let $2 = function (bar) {
    return document.getElementsByClassName(bar);
};

let bookingInfo = [];
let bookingDate = [];

//boolean local storage enabled and catches exceptions
const isLocalStorageEnabled = function () {
    let foo = "bar";
    try {
        localStorage.setItem(foo, foo);
        localStorage.removeItem(foo);
        return true;
    } catch (e) {
        return false;
    }
};

//Here i create a function which will test all the inputs of my form to see if they are filled out, using combinations of the value and length mothods. I then push the information for the consumer to an array which displays in red, so that they know what is required for the form to be completed.
let errorMessage;
const required = function () {
    errorMessage = [];
    if ($("fname").value.length <= 1){
        errorMessage.push("Enter your name please.");
        return false;
    } else if ($("fdate").value.length !== 10){
        errorMessage.push("Choose a date for your reservation please.");
        return false;
    } else if (($("ftime").value)){
    } else {
        errorMessage.push("Please choose a time for your booking.");
        return false;
    } return true;
};
//Instead of making an if-else statement for the different requirements the form needs to have, i tried setting my writeDate function to have another requirement for running, making the condition for the if statement to look like this: (isLocalStorageEnabled && bookingDate.values != "";) which i hoped would make the different forms invalid until filled out, but that didnt work so i made this.

//In writeDate function, i use the required() function i made above to check if the requirements for the form is true (if the required()function ran properly and returned true) or false. If the form is filled out correctly, the data in the form will be saved by pushing it into an array, which we use for localStorage.
let writeDate = function ()  {
    if (isLocalStorageEnabled) {
        $("confirmBtn").addEventListener("click", () => {
            if (required() == true) {
                let getItem = localStorage.getItem('bookingDate');
                let bookingDate = getItem ? JSON.parse(getItem) : [];
                let bk = Object.assign({}, bookingInfo);
                bk.name = $("fname").value;
                bk.amount = $("famount").value;
                bk.date = $("fdate").value;
                bk.time = $("ftime").value;
                bookingDate.push(bk);

                let date = JSON.stringify(bookingDate);
                localStorage.setItem("bookingDate", date);
                // Hvis jeg ikke havde lavet $ om til en variabel funktion, kunne der printes dato/tid/navn og lave en visuel bekræftelse
                $("bookedText").innerHTML = 'Thank you for your reservation on ${fdate}, at ${ftime}, ${fname}.';
            };

            if (required() == false) {
                $("errorText").innerHTML = errorMessage;
            };
        });
    };
};

// Laver window.onload til en funktion frem for at bruge flere linjer på at lave en variabel med funktionerne OG funktion til at køre variablen
window.onload = function () {
    writeDate();
};


