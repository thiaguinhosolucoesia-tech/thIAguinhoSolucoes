// ARQUIVO: /firebase-config.js
// DESCRIÇÃO: Ponto central de configuração e inicialização do Firebase.
// DEVE ser carregado em TODAS as páginas HTML que usam o Firebase.

// ATENÇÃO: ESTE É O SEU ARQUIVO DE CONFIGURAÇÃO REAL E FUNCIONAL.
const firebaseConfig = {
    apiKey: "AIzaSyCHh2XM92NE99Hgj0caW_7YQZCsQnjNU8U",
    authDomain: "thiaguinhoplataforma.firebaseapp.com",
    databaseURL: "https://thiaguinhoplataforma-default-rtdb.firebaseio.com",
    projectId: "thiaguinhoplataforma",
    storageBucket: "thiaguinhoplataforma.firebasestorage.app",
    messagingSenderId: "724302646935",
    appId: "1:724302646935:web:0debbe25fa0aad055323d2"
  };

// O CÓDIGO DE ACESSO DO ADMIN (codificado em Base64 para '*177')
const ADMIN_TRIGGER_KEY = 'KjE3Nw==';

// INICIALIZA O FIREBASE E DISPONIBILIZA AS VARIÁVEIS GLOBAIS
// Esta é a mudança crucial que conserta os erros de "não definido".
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
