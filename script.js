// Tab key disabled
document.onkeydown = function (t) {
    if (t.which == 9) {
        return false;
    }
}

// pagination

var show = 0;
var click = 0;

const pages = document.querySelector(".pages");

function prev() {
    console.log("clicked on previous btn");
    click--;

    if (click < 0) {
        click = 0;
    }
    console.log("click = " + click);
    pages.style.marginLeft = (click * -100) + "%";
}
function next() {
    console.log("clicked on next btn");
    click++;

    if (click > 3) {
        click = 3;
    }
    console.log("click = " + click);
    pages.style.marginLeft = (click * -100) + "%";
}

// set attribute onclick on btns
const nextBtn = document.querySelectorAll(".nextBtn");
nextBtn.forEach(function (element1) {
    element1.setAttribute("onclick", "next()");
});

const previousBtn = document.querySelectorAll(".previousBtn");
previousBtn.forEach(function (element2) {
    element2.setAttribute("onclick", "prev()");
});

// Page Validation
// page1
var page1count = 0;
function page1Validation() {
    if (page1count == 2) {
        document.querySelector(".indicator-box1 p").style.color = "#d43f8d";
        document.querySelector(".indicator-box1 .step span:first-child").style.visibility = "hidden";
        document.querySelector(".indicator-box1 .step span:last-child").style.visibility = "visible";
        console.log("page1count run");
    }
}

// page2
var page2count = 0;
function page2Validation() {
    if (page2count == 2) {
        document.querySelector(".indicator-box2 p").style.color = "#d43f8d";
        document.querySelector(".indicator-box2 .step span:first-child").style.visibility = "hidden";
        document.querySelector(".indicator-box2 .step span:last-child").style.visibility = "visible";
        console.log("page2count run");
    }
}

// page3
var page3count = 0;
function page3Validation() {
    if (page3count == 2) {
        document.querySelector(".indicator-box3 p").style.color = "#d43f8d";
        document.querySelector(".indicator-box3 .step span:first-child").style.visibility = "hidden";
        document.querySelector(".indicator-box3 .step span:last-child").style.visibility = "visible";
        console.log("page3count run");
    }
}

// page4
var page4count = 0;
function page4Validation() {
    if (page4count == 2) {
        document.querySelector(".indicator-box4 p").style.color = "#d43f8d";
        document.querySelector(".indicator-box4 .step span:first-child").style.visibility = "hidden";
        document.querySelector(".indicator-box4 .step span:last-child").style.visibility = "visible";
        console.log("page4count run");
    }
}


// Validations

function setSuccess(element) {
    var field = element.parentElement;
    field.classList = "field success";
}
function setError(element, errorMsg) {
    var field = element.parentElement;

    field.querySelector(".error-msg").innerHTML = errorMsg;
    field.classList = "field error";
}
// 1. first name
// a) not more than 20 words
// b) numbers and special characters not allowed
// c) only one space allowed
// Logic => /^[a-zA-Z ]{3,20}$/

function fnameValidation(element) {
    var fname = element.value.trim();
    var fnameCorrectWay = /^[^ \.][a-zA-Z \.]{0,20}$/;
    var isCorrect = fnameCorrectWay.test(fname);


    if (fname.length == 0) {
        setError(element, "*first name cannot be empty");
    } else if (fname.length < 4) {
        setError(element, "*enter a valid first name");
    } else if (isCorrect) {
        page1Validation();
        setSuccess(element);
        page1count++;
    }
    else {
        setError(element, "*use only alphabets");
    }
}

// 2. last name
// a) not more than 15 words
// b) numbers and special characters not allowed
// c) no space allowed

function lnameValidation(element) {
    var lname = element.value.trim();
    var lnameCorrectWay = /^[a-zA-Z]{0,15}$/;
    var isCorrect = lnameCorrectWay.test(lname);

    if (lname.length == 0) {
        setError(element, "*last name cannot be empty");
    } else if (lname.length < 3) {
        setError(element, "*enter a valid last name");
    } else if (isCorrect) {
        setSuccess(element);
        page1count++;
        page1Validation();
    }
    else {
        setError(element, "*use only alphabets");
    }
}

// 3. email
// a) 

function emailValidation(element) {
    var email = element.value.trim();
    var emailCorrectWay = /^[a-zA-Z][\w\.\_\-]{2,30}[^\.\_\-][@][a-z]{2,10}[\.][a-z]{2,3}$/;
    var isCorrect = emailCorrectWay.test(email);

    if (email.length == 0) {
        setError(element, "*email cannot be empty");
    } else if (email.length < 3) {
        setError(element, "*enter a valid email");
    } else if (isCorrect) {
        setSuccess(element);
        page2count++;
        page2Validation();
    }
    else {
        setError(element, "*enter a valid email");
    }
}

// 4. phone
// a) 

function phoneValidation(element) {
    var phone = element.value.trim();
    var phoneCorrectWay = /^[7,8,9][0-9]{9}$/;
    var isCorrect = phoneCorrectWay.test(phone);

    if (phone.length == 0) {
        setError(element, "*phone cannot be empty");
    } else if (email.length < 3) {
        setError(element, "*enter a valid phone number");
    } else if (isCorrect) {
        setSuccess(element);
        page2count++;
        page2Validation();
    }
    else {
        setError(element, "*enter a valid phone number");
    }
}

document.querySelectorAll("input[name='phone']").forEach(input => {
    input.oninput = () => {
        if (input.value.length > 10) {
            input.value = input.value.slice(0, 10);
        }
    }
});

// 5. DOB
// 

function dobValidation(element) {
    var dob = element.value.trim();
    // var phoneCorrectWay = /^[7,8,9][0-9]{9}$/;
    // var isCorrect = phoneCorrectWay.test(phone);

    // console.log(element.value);

    if (dob == 0) {
        setError(element, "*select date of birth");
    }
    else {
        setSuccess(element);
        page3count++;
        page3count++;
        page3Validation();
    }
}

// Pin Error function
function setPinError(element, errorMsg){
    var pinParentElement = element.parentElement;
    var pinParentElement = pinParentElement.parentElement;

    pinParentElement.querySelector(".error-msg").innerHTML = errorMsg;
    var field = pinParentElement.querySelectorAll(".field");

    field.forEach(function(x) {
        x.classList = "field error";
    });
}

// Pin Success function
function setPinSuccess(element){
    var pinParentElement = element.parentElement;
    var pinParentElement = pinParentElement.parentElement;

    var field = pinParentElement.querySelectorAll(".field");

    field.forEach(function(x) {
        x.classList = "field success";
    });
}

// 6. pin
// a) must be a number
// b) pin == cpin

var pin;
function pinValidation(element) {
    pin = element.value;


    if (pin.length == 0) {
        setPinError(element, "*enter 4 digit pin");
    } else if (pin.length < 4) {
        setPinError(element, "*enter 4 digit pin");
    } else if(pin == cpin){
        setPinSuccess(element);
        page4Validation();
    } else{
        setPinError(element,"*pin didn't match");
        page4count++;
    }
}
document.querySelectorAll("input[name='pin']").forEach(input => {
    input.oninput = () => {
        if (input.value.length > 4) {
            input.value = input.value.slice(0, 4);
        }
    }
});

// 7. cpin
// a) must be a number
// b) pin == cpin

var cpin;
function cpinValidation(element) {
    cpin = element.value;


    if (cpin.length == 0) {
        setPinError(element, "*enter 4 digit pin");
    } else if (cpin.length < 4) {
        setPinError(element, "*enter 4 digit pin");
    } else if(pin == cpin){
        setPinSuccess(element);
        page4count++;
        page4Validation();
    } else{
        setPinError(element,"*pin didn't match");
    }
}
document.querySelectorAll("input[name='cpin']").forEach(input => {
    input.oninput = () => {
        if (input.value.length > 4) {
            input.value = input.value.slice(0, 4);
        }
    }
});



// Submit
function submit(){
    if(page1count == page2count && page1count == page3count && page1count == page4count){
        alert("Your Sign Up Completed");
        location.href = "index.html";
    }
    console.log(page1count);
    console.log(page2count);
    console.log(page3count);
    console.log(page4count);
    // if(1 == 1){
    //     location.href = "index.html";
    // }
}