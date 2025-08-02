function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../../index.html";
        alert("Você saiu com sucesso!");
    }).catch(() => {
        console.log("Erro ao sair.");
    });
}