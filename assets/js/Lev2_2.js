let submit = document.getElementById("form1")

function submitData() {
    console.log("test")
    let firstName = document.getElementById("vorname");
    /* !MAN KANN DIREKT NACH DER KLAMMER .value HINSCHREIBEN!
    console.log(name + " " +lastname + " " + country) */
    let lastName = document.getElementById("nachname");
    let country = document.getElementById("land");
    console.log(firstName.value, lastName.value, country.value);
    document.body.innerHTML += ("<p>Your name is " + firstName.value + " " + lastName.value + " and you\'re living in " + country.value + "</p>");
}