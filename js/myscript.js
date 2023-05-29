

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto. x

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite. xx

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto xxx

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe xxxx

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva xx

// BONUS 2:
// Organizzare i singoli membri in card/schede

// Wayne Barnett     ounder & CEO      wayne-barnett-founder-ceo.jpg
// Angela Caroll     Chief Editor      angela-caroll-chief-editor.jpg
// Walter Gordon     Office Manager    walter-gordon-office-manager.jpg
// Angela Lopez      Social Media Manager  angela-lopez-social-media-manager.jpg
// Scott Estrada     Developer         scott-estrada-developer.jpg
// Barbara Ramos     Graphic Designer  barbara-ramos-graphic-designer.jpg


const team = [];


const userOne = {
    name : 'Wayne Barnett',
    role : 'Founder & CEO',
    profileImg : 'wayne-barnett-founder-ceo.jpg'
}

let imgOne = document.createElement("img"); 
imgOne.src = "img/wayne-barnett-founder-ceo.jpg"; 
let srcOne = document.getElementById("userImgOne"); 
srcOne.appendChild(imgOne); 

document.getElementById('userNameOne').innerHTML =  userOne.name;
document.getElementById('userMansionOne').innerHTML = userOne.role;
console.log('name:  ' + userOne.name, 'role: ' + userOne.role, 'img: ' + userOne.profileImg);


const userTwo = {
    name : 'Angela Caroll',
    role : 'Chief Editor',
    profileImg : 'angela-caroll-chief-editor.jpg'
}

let imgTwo = document.createElement("img"); 
imgTwo.src = 'img/angela-caroll-chief-editor.jpg'
let srcTwo = document.getElementById("userImgTwo"); 
srcTwo.appendChild(imgTwo); 

document.getElementById('userNameTwo').innerHTML =  userTwo.name;
document.getElementById('userMansionTwo').innerHTML = userTwo.role;
console.log('name:  ' + userTwo.name, 'role: ' + userTwo.role, 'img: ' + userTwo.profileImg);



const userThree = {
    name : 'Walter Gordon',
    role : 'Office Manager',
    profileImg : 'walter-gordon-office-manager.jpg'
}

let imgThree = document.createElement("img"); 
imgThree.src = "img/walter-gordon-office-manager.jpg"; 
let srcThree = document.getElementById("userImgThree"); 
srcThree.appendChild(imgThree); 

document.getElementById('userNameThree').innerHTML =  userThree.name;
document.getElementById('userMansionThree').innerHTML = userThree.role;
console.log('name:  ' + userThree.name, 'role: ' + userThree.role,  'img: ' + userThree.profileImg);


const userFour = {
    name : 'Angela Lopez ',
    role : 'Social Media Manager ',
    profileImg : 'angela-lopez-social-media-manager.jpg'
}

let imgFour = document.createElement("img"); 
imgFour.src = "img/angela-lopez-social-media-manager.jpg"; 
let srcFour = document.getElementById("userImgFour"); 
srcFour.appendChild(imgFour); 

document.getElementById('userNameFour').innerHTML =  userFour.name;
document.getElementById('userMansionFour').innerHTML = userFour.role;
console.log('name:  ' + userFour.name, 'role: ' + userFour.role,  'img: ' + userFour.profileImg);


const userFive = {
    name : 'Scott Estrada',
    role : 'Developer',
    profileImg : 'scott-estrada-developer.jpg'
}

let imgFive = document.createElement("img"); 
imgFive.src = "img/scott-estrada-developer.jpg"; 
let srcFive = document.getElementById("userImgFive"); 
srcFive.appendChild(imgFive); 

document.getElementById('userNameFive').innerHTML =  userFive.name;
document.getElementById('userMansionFive').innerHTML = userFive.role;
console.log('name:  ' + userFive.name, 'role: ' + userFive.role,  'img: ' + userFive.profileImg);


const userSix = {
    name : 'Barbara Ramos',
    role : 'Graphic Designer',
    profileImg : 'barbara-ramos-graphic-designer.jpg'
}

let imgSix = document.createElement("img"); 
imgSix.src = "img/barbara-ramos-graphic-designer.jpg"; 
let srcSix = document.getElementById("userImgSix"); 
srcSix.appendChild(imgSix); 

document.getElementById('userNameSix').innerHTML =  userSix.name;
document.getElementById('userMansionSix').innerHTML = userSix.role;
console.log('name:  ' + userSix.name, 'role: ' + userSix.role,  'img: ' + userSix.profileImg);


team.push(userOne, userTwo, userThree, userFour, userFive, userSix);
console.log(team)