const elem = document.getElementById("demo");
const txt = document.getElementById("text");

txt.oninput = (e) => {
    e.preventDefault();
    let value = e.target.value.toUpperCase();
    const arr = value.split("");
    elem.innerText = "";
    value = "";
    let i = 0;
    arr.forEach((ch) => {
        if ((ch >= "A" && ch <= "Z") || (ch >= "0" && ch <= "9") || ch == ".") {
            elem.innerText += ch + ch + " ";
            value += ch;
        } else if (ch == ",") {
            elem.innerText += "... ";
            value += ch;
        } else if (ch == " ") {
            elem.innerText += "  ";
            value += ch;
        }
        i++;
        if (i == 18) {
            i = 0;
            elem.innerText += "\n\n";
        }
    });
    e.target.value = value;
};
