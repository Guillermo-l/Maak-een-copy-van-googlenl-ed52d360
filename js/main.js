// Google login
function googleInloggen() {
    var url = "https://account.google.com";
    window.location.replace(url);
} 

// Google zoeken
function googleSearch() {
    var input = document.getElementById("searchbar").value;
    if (input == "" || input == "null" || input == "undefined") {
        console.log("No Input found")
    } else {
        var url = "https://www.google.com/search?q=" + input;
        window.location.replace(url);
    }
}

// Doodles
function ikDoeEenGok() {
    var url = "https://www.google.com/doodles";
    window.location.replace(url);
}