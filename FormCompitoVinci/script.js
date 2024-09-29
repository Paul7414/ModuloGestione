let people = [];
 
function aggiungiPersona() {
    
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const email = document.getElementById('email').value;
    const birthday = document.getElementById('birthday').value;
    const telefono = document.getElementById('telefono').value;
    const paese = document.getElementById('paese').value;
    const provincia = document.getElementById('provincia').value;

    if (nome === "" || email === "" || cognome === "") {
        alert("Tutti i campi devono essere compilati!");
        return;
    }
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Inserisci un'email valida!");
        return;
    }
    let person = {
        nome: nome,
        cognome: cognome,
        email: email,
        birthday: birthday,
        telefono: telefono,
        paese: paese,
        provincia: provincia
    };
    people.push(person);
    const tabella = document.getElementById('tabellaPersone').getElementsByTagName('tbody')[0];
    const nuovaRiga = tabella.insertRow();

    

    aggiornaTabella();
    document.getElementById('formPersone').reset();
}
 
function rimuoviTutti() {
    people = [];
    aggiornaTabella();
}
function rimuoviPersona(index) {
    people.splice(index, 1);

    aggiornaTabella();
}
function aggiornaTabella() {
    const contenutoTabella = document.getElementById('tabellaPersone').getElementsByTagName('tbody')[0];

    
    contenutoTabella.innerHTML = '';

    
    people.forEach((persona, indice) => {
        const nuovaR = document.createElement('tr');
        
        nuovaR.innerHTML = `
            <td>${persona.nome}</td>
            <td>${persona.cognome}</td>
            <td>${persona.email}</td>
            <td>${persona.birthday}</td>
            <td>${persona.telefono}</td>
            <td>${persona.paese}</td>
            <td>${persona.provincia}</td>
            <td><button class="btn btn-accent btn-warning" onclick="rimuoviPersona(${indice})">Rimuovi</button></td>
        `;

        contenutoTabella.appendChild(nuovaR); 
    });
}
 
function inviaModulo() {
    if (people.length === 0) {
        alert("Nessun modulo è stato creato. Aggiungi almeno una persona.");
        return false;
    }
    alert("Modulo inviato!");
    rimuoviTutti();
    return true;
}
 