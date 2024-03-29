// Make basic information variables global
var name, testVersion, grade, bday, point;
function begin() {
    // Removes button
    document.getElementById('buttonStart').remove();
    // Replaces empty test box with information
    document.getElementById('test').innerHTML = `<h4>Basic Information:</h4><br>
    Full Name: <input id="name" placeholder="Full Name"><br><br>
    Birthday: <input id="bday" type="date"><br><br>
    Grade: <input id="number" type="number" value="8" min="8" max='11'><br><br>
<button id="continueButton" onClick="test()" type="button">Click to Continue</button>`
}
function test() {
    // Retrieve information based on input
    name = document.getElementById('name').value;
    grade = document.getElementById("number").value;
    bday = document.getElementById('bday').value; 

    // Name checker; checks if name is entered
    for (nameChecker = name.length; nameChecker == 0; nameChecker = name.length) {
        name = prompt('Please enter a valid name');
    }
    // Grade checker, checks if a grade is entered that isn't applicable.
    while (grade < 8 || grade > 11) {
        grade = +prompt('The grade you manually entered is not eligible! Please type a grade between 8 and 11');
    }

    // Randomly chooses 1/3 tests using two math functions
    testVersion = Math.random()*3+1;
    testVersion = Math.floor(testVersion);
    // Tells user which test they're doing
    alert(`There are three versions of this Sample Eligbility test. Your version is ${testVersion}`);
    // Resets points to zero
    point = 0;
// Checks test version. Then outputs test if condition is met
    if (testVersion == 1) {
        document.getElementById('test').innerHTML = `<h4>Test 1</h4>
        ${name}, you have as much time as you need on this test. Try and do these questions independently or you will fail the Entrance exam. <br><br>
        <label id="Question1">1) What is the correct equation for Slope & Point form?</label>
        <br>
         <input type="Radio" id="correct1" name="q1">y = mx + b</input>
         <br>
         <input type="Radio" id="wrong" name="q1">ax + by + c = 0
         <br>
         <input type="Radio" id="wrong" name="q1" >ax^2 + bx + cy = 0
         <br>
         <input type="Radio" id="wrong" name="q1">(a + b)(a - b)
         <br><br>
        <label id="Question2">2) What is the strongest type of Intermolecular forces?</label>
        <br>
         <input type="Radio" id="wrong" name="q2">Alpha Particle
         <br>
         <input type="Radio" id="wrong" name="q2">Dipole-Dipole
         <br>
         <input type="Radio" id="wrong" name="q2" >London Dispersion Forces
         <br>
         <input type="Radio" id="correct2" name="q2">Hydrogen Bonding</input>
         <br><br>
         <label id="Question3">3) A ball is dropped from a cliff that is 135 m high.
         The relationship between the height of the ball,
         h, in metres, and time, t, in seconds, can be
         represented by the equation h = –4.9t
         2 + 135. <br>
         Which is closest to the height of the ball after
         2.1 seconds? </label>
         <br>
          <input type="Radio" id="wrong" name="q3">22m
          <br>
          <input type="Radio" id="wrong" name="q3">29m
          <br>
          <input type="Radio" id="correct3" name="q3" >125m</input>
          <br>
          <input type="Radio" id="wrong" name="q3">113m

        <br><br><button id="endButton" onClick="endTest()">Click to Finish</button>`
    }
    else if (testVersion == 2) {
        document.getElementById('test').innerHTML = `<h4>Test 2</h4>
        ${name}, you have as much time as you need on this test. Try and do these questions independently or you will fail the Entrance exam. <br><br>
        <label id="Question1">1) What is the correct equation for Standard form in a Quadratic Relation?</label>
        <br>
         <input type="Radio" id="wrong" name="q1">y = mx + b
         <br>
         <input type="Radio" id="wrong" name="q1">ax + by + c = 0
         <br>
         <input type="Radio" id="correct1" name="q1" >ax^2 + bx + c = 0</input>
         <br>
         <input type="Radio" id="wrong" name="q1">(a + b)(a - b)
         <br><br>
        <label id="Question2">2) What is the correct equation for vertex form in a Quadratic relation?</label>
        <br>
         <input type="Radio" id="wrong" name="q2">y = mx + b
         <br>
         <input type="Radio" id="correct2" name="q2">y = a(x-h)^2 + k</input>
         <br>
         <input type="Radio" id="wrong" name="q2" >ax^2 + bx + c = 0
         <br>
         <input type="Radio" id="wrong" name="q2">(a + b)(a - b)
         <br><br>
         <label id="Question3">3) Select the proper product of a Sodium and Chloride reaction.</label>
         <br>
          <input type="Radio" id="correct3" name="q3">NaCl</input>
          <br>
          <input type="Radio" id="wrong" name="q3">NaBr2
          <br>
          <input type="Radio" id="wrong" name="q3" >ClNa
          <br>
          <input type="Radio" id="wrong" name="q3">NaOH

        <br><br><button id="endButton" onClick="endTest()">Click to Finish</button>`
    }
    else if (testVersion == 3){
        document.getElementById('test').innerHTML = `<h4>Test 3</h4>
        ${name}, you have as much time as you need on this test. Try and do these questions independently or you will fail the Entrance exam. <br><br>
        <label id="Question1">1) What is the correct equation for speed?</label>
        <br>
         <input type="Radio" id="correct1" name="q1">Speed = Distance/Time</input>
         <br>
         <input type="Radio" id="wrong" name="q1">Speed = Time/Distance
         <br>
         <input type="Radio" id="wrong" name="q1" >Speed = Time x Distance
         <br>
         <input type="Radio" id="wrong" name="q1">Speed = (Distance x Time)/2
         <br><br>
        <label id="Question2">2) H2O can also be written as..</label>
        <br>
         <input type="Radio" id="wrong" name="q2">H2O2
         <br>
         <input type="Radio" id="wrong" name="q2">HO2
         <br>
         <input type="Radio" id="correct2" name="q2" >H(OH)</input>
         <br>
         <input type="Radio" id="wrong" name="q2">O2H
         <br><br>
         <label id="Question3">3) What is the equation for ideal gas law?</label>
         <br>
          <input type="Radio" id="correct3" name="q3">PV = nRT</input>
          <br>
          <input type="Radio" id="wrong" name="q3">nV = RT/P
          <br>
          <input type="Radio" id="wrong" name="q3" >P = VnRT
          <br>
          <input type="Radio" id="wrong" name="q3">P = V/T

        <br><br><button id="endButton" onClick="endTest()">Click to Finish</button>`
    }
    // Mostly for debugging, if test version failed
    else {
         alert(`Something went wrong... refreshing the page.`);
        location.reload(); // Refreshes page
    }
}
function endTest() {
    // Starts making output info
    suggestion = '';
    // Every suggestion starts with this
    question = 'Since you got '
    // Checks if each question is right. If it is, a point is added. Otherwise, whatever question is wrong is indicated.
    if (document.getElementById('correct1').checked) {
        point+= 1;
    }
    else {
        question += 'Question 1 wrong, '
    }
    if (document.getElementById('correct2').checked) {
        point+= 1;
    }
    else {
        question += 'Question 2 wrong, '
    }
    if (document.getElementById('correct3').checked) {
        point+= 1;
    }
    else {
        question += 'Question 3 wrong, '
        }
    if (point == 3) {
        question += 'all questions correct,'
    }
    var testTime = new Date(); // Gets current time

    // Switch case is used to determine what you should do based on your points result. It can be either 0, 1, 2, or 3. The suggestion is added to the rest of your sentence.
    switch (point) {
        case 0:
        case 1:
            suggestion = 'it is recommended that you keep studying and apply at a later time';
            question += suggestion;
        break;
        case 2:
            suggestion = 'it is recommended that you consider enrolling';
            question += suggestion;
        break;
        case 3:
            suggestion = 'it is recommended that you apply for our school as soon as possible!';
            question += suggestion;
    }
    // Information is then opened in a new tab and their results are given
    var results = window.open();
    results.document.write(`
    <link rel="stylesheet" href="/style.css">
    <link rel="icon" 
    type="image/png" 
    href="/external/img/logo.png" />
    <style>* { text-align: center; margin: 20px;} </style>
    <title>Test Results</title>
    <h4>Test Results</h4>
    <b>Test Completed: ${testTime}</b><br><br><br>
    Completed by: ${name}<br>
    Birthday: ${bday}<br>
    Grade: ${grade}<br><br>
    <b>FINAL POINTS: ${point}</b><br><br>
    Our Suggestion? <i>${question}</i><br><br>`);
    location.reload(); // Refreshes questions so they can not look back.
}
