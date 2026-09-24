let panier = [];
function ajouter(plat, prix) {
    panier.push(plat + " - " + prix + "DT");
    alert(plat + " ajouté! 🛒\nPanier: " + panier.length + " plats");
    document.getElementById("panier-count").innerText = panier.length;
}

function commander() {
    if(panier.length == 0){
        alert("Panier vide! Choisis un plat d'abord 😋");
        return;
    }
    let message = "Bonjour! Je veux commander:\n" + panier.join("\n");
    let url = "https://wa.me/21628684866?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}
