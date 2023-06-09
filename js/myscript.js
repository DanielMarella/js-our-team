

const team = [
{
    name : 'Wayne Barnett',
    role : 'Founder & CEO',
    profileImg : 'wayne-barnett-founder-ceo.jpg'
},

{
    name : 'Angela Caroll',
    role : 'Chief Editor',
    profileImg : 'angela-caroll-chief-editor.jpg'
},

{
    name : 'Walter Gordon',
    role : 'Office Manager',
    profileImg : 'walter-gordon-office-manager.jpg'
},

{
    name : 'Angela Lopez ',
    role : 'Social Media Manager ',
    profileImg : 'angela-lopez-social-media-manager.jpg'
},

{
    name : 'Scott Estrada',
    role : 'Developer',
    profileImg : 'scott-estrada-developer.jpg'
},

{
    name : 'Barbara Ramos',
    role : 'Graphic Designer',
    profileImg : 'barbara-ramos-graphic-designer.jpg'
},
];
console.log(team)



const container = document.getElementById('container');

function addElement() {
    const newDivElement = document.createElement('div');
    newDivElement.classList.add('card');

    return newDivElement;
}

function addTextElement (){
    const newTextElement = document.createElement ('p');

    return newTextElement;
}

function addSubTextElement (){
    const newTextElement = document.createElement ('p');

    return newTextElement;
}

function addImgElement(){
    const newImgElement = document.createElement("img");
    return newImgElement;
}

for (let i = 0; i < team.length; i++){
    const divElement = addElement();
    container.appendChild(divElement);

    const newImg = addImgElement();
    divElement.appendChild(newImg);
    newImg.src = 'img/' + team[i].profileImg;

    const textElement = addTextElement();
    textElement.innerHTML = team[i].name;
    divElement.appendChild(textElement);

    const subTextElement = addSubTextElement();
    subTextElement.innerHTML = team[i].role;
    divElement.appendChild(subTextElement);
}



