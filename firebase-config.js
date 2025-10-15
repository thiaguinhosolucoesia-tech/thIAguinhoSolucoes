// ATENÇÃO: ESTE É O SEU ARQUIVO DE CONFIGURAÇÃO REAL E FUNCIONAL.
const firebaseConfig = {
    apiKey: "AIzaSyA9WEvRwaDuEDFlTlIwPxKvNr6hcNlYFbI",
    authDomain: "thiaguinho-solucoes.firebaseapp.com",
    databaseURL: "https://thiaguinho-solucoes-default-rtdb.firebaseio.com",
    projectId: "thiaguinho-solucoes",
    storageBucket: "thiaguinho-solucoes.firebasestorage.app",
    messagingSenderId: "879610267391",
    appId: "1:879610267391:web:bc48a54e0ce8e541feeeca"
};

// O CÓDIGO DE ACESSO DO ADMIN
const ADMIN_TRIGGER_KEY = 'KjE3Nw=='; // Base64 para '*177'

// INICIALIZA O FIREBASE E EXPORTA AS VARIÁVEIS GLOBAIS
// Esta é a mudança crucial que conserta os erros de "não definido".
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
