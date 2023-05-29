

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto. x

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite. xx

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto xxx

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe


// Wayne Barnett     ounder & CEO      wayne-barnett-founder-ceo.jpg
// Angela Caroll     Chief Editor      angela-caroll-chief-editor.jpg
// Walter Gordon     Office Manager    walter-gordon-office-manager.jpg
// Angela Lopez      Social Media      Manager  angela-lopez-social-media-manager.jpg
// Scott Estrada     Developer         scott-estrada-developer.jpg
// Barbara Ramos     Graphic Designer  barbara-ramos-graphic-designer.jpg


const team = [];

const userOne = {
    name : 'Wayne Barnett',
    role : 'ounder & CEO',
    profileImg : 'wayne-barnett-founder-ceo.jpg'
}
document.getElementById('userOne').innerHTML = 'name:  ' + userOne.name + ' role: ' + userOne.role + ' img: ' + userOne.profileImg;
console.log('name:  ' + userOne.name, 'role: ' + userOne.role, 'img: ' + userOne.profileImg);

const userTwo = {
    name : 'Angela Caroll',
    role : 'Chief Editor',
    profileImg : 'wayne-barnett-founder-ceo.jpg'
}

document.getElementById('userTwo').innerHTML = 'name:  ' + userTwo.name + ' role: ' + userTwo.role + 'img: ' + userTwo.profileImg;
console.log('name:  ' + userTwo.name, 'role: ' + userTwo.role, 'img: ' + userTwo.profileImg);



const userThree = {
    name : 'Walter Gordon',
    role : 'Office Manager',
    profileImg : 'wayne-barnett-founder-ceo.jpg'
}

document.getElementById('userThree').innerHTML = 'name:  ' + userThree.name + ' role: ' + userThree.role +  ' img: ' + userThree.profileImg;
console.log('name:  ' + userThree.name, 'role: ' + userThree.role,  'img: ' + userThree.profileImg);


const userFour = {
    name : 'Angela Lopez ',
    role : 'Social Media',
    profileImg : 'wayne-barnett-founder-ceo.jpg'
}

document.getElementById('userFour').innerHTML = 'name:  ' + userFour.name + ' role: ' + userFour.role +  ' img: ' + userFour.profileImg;
console.log('name:  ' + userFour.name, 'role: ' + userFour.role,  'img: ' + userFour.profileImg);



const userFive = {
    name : 'Scott Estrada',
    role : 'Developer',
    profileImg : 'wayne-barnett-founder-ceo.jpg'
}

document.getElementById('userFive').innerHTML = 'name:  ' + userFive.name + ' role: ' + userFive.role + ' img: ' + userFive.profileImg;
console.log('name:  ' + userFive.name, 'role: ' + userFive.role,  'img: ' + userFive.profileImg);



const userSix = {
    name : 'Barbara Ramos',
    role : 'Graphic Designer',
    profileImg : 'wayne-barnett-founder-ceo.jpg'
}

document.getElementById('userSix').innerHTML = 'name:  ' + userSix.name + ' role: ' + userSix.role +  ' img: ' + userSix.profileImg;
console.log('name:  ' + userSix.name, 'role: ' + userSix.role,  'img: ' + userSix.profileImg);



team.push(userOne, userTwo, userThree, userFour, userFive, userSix);
console.log(team)