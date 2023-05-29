

// Creazione Array
const team = [];

// Creazione primo oggetto letterale
const userOne = {
    name : 'Wayne Barnett',
    role : 'Founder & CEO',
    profileImg : 'wayne-barnett-founder-ceo.jpg'
}

//Inserimento immagine nel dom tramite js 
let imgOne = document.createElement("img"); 
imgOne.src = "img/wayne-barnett-founder-ceo.jpg"; 
let srcOne = document.getElementById("userImgOne"); 
srcOne.appendChild(imgOne); 

// Scrittura del contenuto dell'oggetto letterale nel DOM
document.getElementById('userNameOne').innerHTML =  userOne.name;
document.getElementById('userMansionOne').innerHTML = userOne.role;
console.log('name:  ' + userOne.name, 'role: ' + userOne.role, 'img: ' + userOne.profileImg);


// Creazione secondo oggetto letterale
const userTwo = {
    name : 'Angela Caroll',
    role : 'Chief Editor',
    profileImg : 'angela-caroll-chief-editor.jpg'
}

//Inserimento immagine nel dom tramite js 
let imgTwo = document.createElement("img"); 
imgTwo.src = 'img/angela-caroll-chief-editor.jpg'
let srcTwo = document.getElementById("userImgTwo"); 
srcTwo.appendChild(imgTwo); 

// Scrittura del contenuto dell'oggetto letterale nel DOM
document.getElementById('userNameTwo').innerHTML =  userTwo.name;
document.getElementById('userMansionTwo').innerHTML = userTwo.role;

// Scrittura in console del contenuto dell'oggetto letterale
console.log('name:  ' + userTwo.name, 'role: ' + userTwo.role, 'img: ' + userTwo.profileImg);


// Creazione terzo oggetto letterale
const userThree = {
    name : 'Walter Gordon',
    role : 'Office Manager',
    profileImg : 'walter-gordon-office-manager.jpg'
}

//Inserimento immagine nel dom tramite js 
let imgThree = document.createElement("img"); 
imgThree.src = "img/walter-gordon-office-manager.jpg"; 
let srcThree = document.getElementById("userImgThree"); 
srcThree.appendChild(imgThree); 

// Scrittura del contenuto dell'oggetto letterale nel DOM
document.getElementById('userNameThree').innerHTML =  userThree.name;
document.getElementById('userMansionThree').innerHTML = userThree.role;
console.log('name:  ' + userThree.name, 'role: ' + userThree.role,  'img: ' + userThree.profileImg);

// Creazione quarto oggetto letterale
const userFour = {
    name : 'Angela Lopez ',
    role : 'Social Media Manager ',
    profileImg : 'angela-lopez-social-media-manager.jpg'
}

//Inserimento immagine nel dom tramite js 
let imgFour = document.createElement("img"); 
imgFour.src = "img/angela-lopez-social-media-manager.jpg"; 
let srcFour = document.getElementById("userImgFour"); 
srcFour.appendChild(imgFour); 

// Scrittura del contenuto dell'oggetto letterale nel DOM
document.getElementById('userNameFour').innerHTML =  userFour.name;
document.getElementById('userMansionFour').innerHTML = userFour.role;
console.log('name:  ' + userFour.name, 'role: ' + userFour.role,  'img: ' + userFour.profileImg);

// Creazione quinto oggetto letterale
const userFive = {
    name : 'Scott Estrada',
    role : 'Developer',
    profileImg : 'scott-estrada-developer.jpg'
}

//Inserimento immagine nel dom tramite js 
let imgFive = document.createElement("img"); 
imgFive.src = "img/scott-estrada-developer.jpg"; 
let srcFive = document.getElementById("userImgFive"); 
srcFive.appendChild(imgFive); 

// Scrittura del contenuto dell'oggetto letterale nel DOM
document.getElementById('userNameFive').innerHTML =  userFive.name;
document.getElementById('userMansionFive').innerHTML = userFive.role;
console.log('name:  ' + userFive.name, 'role: ' + userFive.role,  'img: ' + userFive.profileImg);

// Creazione sesto oggetto letterale
const userSix = {
    name : 'Barbara Ramos',
    role : 'Graphic Designer',
    profileImg : 'barbara-ramos-graphic-designer.jpg'
}
//Inserimento immagine nel dom tramite js 
let imgSix = document.createElement("img"); 
imgSix.src = "img/barbara-ramos-graphic-designer.jpg"; 
let srcSix = document.getElementById("userImgSix"); 
srcSix.appendChild(imgSix); 

// Scrittura del contenuto dell'oggetto letterale nel DOM
document.getElementById('userNameSix').innerHTML =  userSix.name;
document.getElementById('userMansionSix').innerHTML = userSix.role;
console.log('name:  ' + userSix.name, 'role: ' + userSix.role,  'img: ' + userSix.profileImg);


// Inserimento di tutti gli oggetti letterali creati all'interno di un array
team.push(userOne, userTwo, userThree, userFour, userFive, userSix);

// Scrittura in console dell'array
console.log(team)