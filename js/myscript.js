

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

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
console.log(userOne);

const userTwo = {
    name : 'Angela Caroll',
    role : 'Chief Editor',
    profileImg : 'wayne-barnett-founder-ceo.jpg'
}
console.log(userTwo);

const userThree = {
    name : 'Walter Gordon',
    role : 'Office Manager',
    profileImg : 'wayne-barnett-founder-ceo.jpg'
}
console.log(userThree);

const userFour = {
    name : 'Angela Lopez ',
    role : 'Social Media',
    profileImg : 'wayne-barnett-founder-ceo.jpg'
}
console.log(userFour);

const userFive = {
    name : 'Scott Estrada',
    role : 'Developer',
    profileImg : 'wayne-barnett-founder-ceo.jpg'
}
console.log(userFive);

const userSix = {
    name : 'Barbara Ramos',
    role : 'Graphic Designer',
    profileImg : 'wayne-barnett-founder-ceo.jpg'
}
console.log(userSix);


team.push(userOne, userTwo, userThree, userFour, userFive, userSix);
console.log(team)