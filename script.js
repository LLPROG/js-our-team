

/// definitevi un array di oggetti che rappresentano i membro del team 

/*
Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team.
*/

/* arr member team
const arrMemberTeam = [

    {
        photo: '<img src="https://picsum.photos/400/420"/>',
        name: 'wayne Bernett',
        role: 'Founder & CEO',
    },
    {
        photo: '<img src="https://picsum.photos/400/420"/>',
        name: 'Angela Carrol',
        role: 'Chief Editor',
    },
    {
        photo: '<img src="https://picsum.photos/400/420"/>',
        name: 'walter Gordon',
        role: 'Office Manager',
    },
    {
        photo: '<img src="https://picsum.photos/400/420"/>',
        name: 'Angela Lopez',
        role: 'Social Media Manager',
    },
    {
        photo: '<img src="https://picsum.photos/400/420"/>',
        name: 'Scott Estrada',
        role: 'Developer',
    },
    {
        photo: '<img src="https://picsum.photos/400/420"/>',
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
    },
];
*/


/// const out fo functions
const arrMemberTeam = [];
const teamContainer = document.querySelector('.team-container');
const addMemberbtn = document.querySelector('#addMemberButton');

///// valus input
const inputName = document.querySelector('#name');
const inputRole = document.querySelector('#role');
const inputImage = document.querySelector('#image');

//// function on click
addMemberbtn.addEventListener('click', addMember);

//// function add member 
function addMember() {

        /// push of valus in arrMemberTeam
        arrMemberTeam.push({
            name: inputName.value,
            role: inputRole.value,
            image: `<img src="${inputImage.value}"/>`,
        });
    
        console.log(arrMemberTeam)
        createMemberCard();
        clearForm();
        takepropertyArrey();
}

/// function create member card
function createMemberCard() {

    let card = document.createElement('div');
    card.classList.add('team-card');
    card.innerHTML =`<div class="card-image">

                    </div>
                    <div class="card-text">
                        <h3 class="title"></h3>
                        <p class="role"></p>
                    </div>`;

    card.addEventListener('click', deleteCard);
    return teamContainer.append(card);

}

/// function clear form inputs
function clearForm () {
    inputName.value = '';
    inputRole.value = '';
    inputImage.value = '';
}

//// function take property from arrey
function takepropertyArrey() {
    for (let i = 0; i < arrMemberTeam.length; i++) {

        const nameMember = document.querySelectorAll('.title');
        const roleMember = document.querySelectorAll('.role');
        const cardImage = document.querySelectorAll('.card-image');
    
        nameMember[i].innerHTML = arrMemberTeam[i].name;
        roleMember[i].innerHTML = arrMemberTeam[i].role;
        cardImage[i].innerHTML = arrMemberTeam[i].image;
    }
}

//// function delete card member
function deleteCard() {
    arrMemberTeam.splice(this, 1);
    const index = [...this.parentNode.children].indexOf(this);
    this.remove();
}

