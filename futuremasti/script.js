// ---------- USER WEBSITE FUNCTION ----------
function showFuture() {
    const name = document.getElementById("username").value.trim().toLowerCase();

    if (name === "") {
        alert("पहले नाम लिखो!");
        return;
    }

    // LocalStorage से future निकालना
    const savedFuture = localStorage.getItem("future_" + name);

    if (savedFuture) {
        document.getElementById("result").innerHTML =
            `${name.toUpperCase()} जी,<br>${savedFuture}`;
        return;
    }

    // Default funny futures
    const randomFutures = [
        "आप का future bright है… screen light की वजह से! 😂",
        "आपको जल्द ही success मिलेगी… अगर जाग गए तो! 😆",
        "आप famous होने वाले हैं… अपने घर में! 🤣",
        "आपको प्यार मिलेगा… रिचार्ज करवाने के बाद! 😜",
        "आप जल्द ही करोड़पति बनने वाले हो… Monopoly गेम में! 😆"
    ];

    const result = randomFutures[Math.floor(Math.random() * randomFutures.length)];

    document.getElementById("result").innerHTML =
        `${name.toUpperCase()} जी,<br>${result}`;
}



// ---------- ADMIN PANEL FUNCTION ----------
function saveFuture() {
    const name = document.getElementById("adminName").value.trim().toLowerCase();
    const future = document.getElementById("adminFuture").value.trim();

    if (name === "" || future === "") {
        alert("नाम और भविष्य दोनों लिखो!");
        return;
    }

    // LocalStorage में future save
    localStorage.setItem("future_" + name, future);

    document.getElementById("msg").innerText = "Future Saved Successfully! ✔";

    document.getElementById("adminName").value = "";
    document.getElementById("adminFuture").value = "";
}
