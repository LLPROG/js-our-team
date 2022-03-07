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

const teamContainer = document.querySelector('.team-container');
const teamCard = document.querySelector('.team-card');
const cardImage = document.querySelector('.team-card');
const cardText = document.querySelector('.card-text');

const nameMember = document.getElementById('title');
const roleMember = document.getElementById('role');


// for (let i = 0; i < arrMemberTeam.length; i++) {

//     for(let object in arrMemberTeam[i]) {

//     }

// }

let arrMemberTeam = [
    {
        photo: '<img src="https://picsum.photos/400/420" alt="Wayne Barnett" />',
        name: 'wayne Bernett',
        role: 'Founder & CEO'
    },
    {
        photo:`<img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett" />`,
        name: 'wayne Bernett',
        role: 'Founder & CEO',
    },
    {
        photo:`<img src="https://picsum.photos/400/429/" alt="Wayne Barnett" />`,
        name: 'wayne Bernett',
        role: 'Founder & CEO',
    },
    {
        photo:`<img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett" />`,
        name: 'wayne Bernett',
        role: 'Founder & CEO',
    },
    {
        photo:`<img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett" />`,
        name: 'wayne Bernett',
        role: 'Founder & CEO',
    },
    {
        photo:`<img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett" />`,
        name: 'wayne Bernett',
        role: 'Founder & CEO',
    },
];


cardImage.innerHTML = arrMemberTeam[0]['photo'];
nameMember.innerHTML = arrMemberTeam[0]['name'];
roleMember.innerHTML = arrMemberTeam[0]['role'];

// console.log(arrMemberTeam[0].photo);
// console.log(arrMemberTeam[0].name);
// console.log(arrMemberTeam[0].role);







