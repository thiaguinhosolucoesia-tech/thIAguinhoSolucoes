// ARQUIVO: /firebase-config.js
// DESCRIÇÃO: Ponto central de configuração e inicialização do Firebase.
// DEVE ser carregado em TODAS as páginas HTML que usam o Firebase.

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

// O CÓDIGO DE ACESSO DO ADMIN (codificado em Base64 para '*177')
const ADMIN_TRIGGER_KEY = 'KjE3Nw==';

// INICIALIZA O FIREBASE E DISPONIBILIZA AS VARIÁVEIS GLOBAIS
// Esta é a mudança crucial que conserta os erros de "não definido".
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
