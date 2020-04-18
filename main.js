// Chiedere all'utente il proprio Nome
var nome_utente = prompt ('Qual è il tuo Nome?');
console.log(nome_utente);

// Chiedere all'utente il proprio Cognome
var cognome_utente = prompt ('Qual è il tuo Cognome?');
console.log(cognome_utente);

// Chiedere all'utente il Colore Preferito
var colore_preferito = prompt ('Qual è il tuo Colore preferito?');
console.log(colore_preferito);

// Impostare l'anno corrente
var data_corrente = new Date();
var anno_corrente = data_corrente.getFullYear();
console.log(anno_corrente);

// Avviso all'utente sulla procedura per generare le Password
alert('Ciao ' + nome_utente + ', di seguito ti verrà consegnata la password per accedere al sito.');
console.log(alert);

// Generazione della password
document.writeln('La tua password è: ' + nome_utente + cognome_utente + colore_preferito + anno_corrente);
