//your JS code here. If required.
const form = document.querySelector("form");
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");


// Apply saved preferences when page loads
const cookies = document.cookie.split("; ");

cookies.forEach(function(cookie) {
    const parts = cookie.split("=");
    const name = parts[0];
    const value = parts[1];

    if (name === "fontsize") {
        fontSizeInput.value = value;
        document.documentElement.style.setProperty(
            "--fontsize",
            value + "px"
        );
    }

    if (name === "fontcolor") {
        fontColorInput.value = value;
        document.documentElement.style.setProperty(
            "--fontcolor",
            value
        );
    }
});


// Save preferences
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    document.cookie = "fontsize=" + fontSize + "; path=/";
    document.cookie = "fontcolor=" + fontColor + "; path=/";

    document.documentElement.style.setProperty(
        "--fontsize",
        fontSize + "px"
    );

    document.documentElement.style.setProperty(
        "--fontcolor",
        fontColor
    );
});