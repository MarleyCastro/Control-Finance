firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        window.location.href = "../../../../../index.html";
        alert("Você precisa estar logado para acessar esta página.");
    }
});