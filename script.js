/*

cosegna

Viene fornito un layout di base. Come prima cosa nel file js definitevi un array di oggetti che rappresentano i membro del team (prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team.
BONUS:
Utilizziamo gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
Buon lavoro!

*/

/// definitevi un array di oggetti che rappresentano i membro del team 



/*
Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team.
*/




// const arrMemberTeam = [

//     {
//         photo: '<img src="https://picsum.photos/400/420"/>',
//         name: 'wayne Bernett',
//         role: 'Founder & CEO',
//     },
//     {
//         photo: '<img src="https://picsum.photos/400/420"/>',
//         name: 'Angela Carrol',
//         role: 'Chief Editor',
//     },
//     {
//         photo: '<img src="https://picsum.photos/400/420"/>',
//         name: 'walter Gordon',
//         role: 'Office Manager',
//     },
//     {
//         photo: '<img src="https://picsum.photos/400/420"/>',
//         name: 'Angela Lopez',
//         role: 'Social Media Manager',
//     },
//     {
//         photo: '<img src="https://picsum.photos/400/420"/>',
//         name: 'Scott Estrada',
//         role: 'Developer',
//     },
//     {
//         photo: '<img src="https://picsum.photos/400/420"/>',
//         name: 'Barbara Ramos',
//         role: 'Graphic Designer',
//     },
// ];

const arrMemberTeam = [];

const teamContainer = document.querySelector('.team-container');

const addMemberbtn = document.querySelector('#addMemberButton');


//// function create cards
addMemberbtn.addEventListener('click', () => {

    ///// valus input
    let inputName = document.querySelector('#name').value;
    let inputRole = document.querySelector('#role').value;
    let inputImage = document.querySelector('#image').value;

    /// push of valus in arrMemberTeam
    arrMemberTeam.push({
        name: inputName,
        role: inputRole,
        image: `<img src="${inputImage}" />`,
    });

    /// create element card
    let card = document.createElement('div');
    card.classList.add('team-card');
    card.innerHTML = `<div class="card-image">
 
    </div>
    <div class="card-text">
      <h3 class="title"></h3>
      <p class="role"></p>
    </div>`;

    teamContainer.append(card);

    /// take proprerty from arrey
    for (let i = 0; i < arrMemberTeam.length; i++) {

        const cardImage = document.querySelectorAll('.card-image');
        const nameMember = document.querySelectorAll('.title');
        const roleMember = document.querySelectorAll('.role');
    
        cardImage[i].innerHTML = arrMemberTeam[i].image
        nameMember[i].innerHTML = arrMemberTeam[i].name;
        roleMember[i].innerHTML = arrMemberTeam[i].role;
    }

});

//// function clear form
addMemberbtn.addEventListener('click', () => {
    let inputName = document.querySelector('#name');
    let inputRole = document.querySelector('#role');
    let inputImage = document.querySelector('#image');


    inputName.value = '';
    inputRole.value = '';
    inputImage.value = '';

})

