const firebaseConfig = {
    apiKey: "AIzaSyA9WEvRwaDuEDFlTlIwPxKvNr6hcNlYFbI",
    authDomain: "thiaguinho-solucoes.firebaseapp.com",
    databaseURL: "https://thiaguinho-solucoes-default-rtdb.firebaseio.com",
    projectId: "thiaguinho-solucoes",
    storageBucket: "thiaguinho-solucoes.firebasestorage.app",
    messagingSenderId: "879610267391",
    appId: "1:879610267391:web:bc48a54e0ce8e541feeeca"
};

const ADMIN_TRIGGER_KEY = 'KjE3Nw=='; // Base64 encoded for '*177'

// Verifica se o Firebase já foi inicializado para evitar erros de duplicação
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Torna auth e database acessíveis globalmente
const auth = firebase.auth();
const database = firebase.database();

