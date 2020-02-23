let name = document.getElementById("name"),
    phone = document.getElementById("phone");

name.addEventListener("input", function(event) {
    if (name.validity.patternMismatch) {
        name.setCustomValidity("Введите Ваши имя фаимилию и отчество на русском языке.");
    } else {
        name.setCustomValidity("");
    }
});

phone.addEventListener("input", function(event) {
    if (phone.validity.patternMismatch) {
        phone.setCustomValidity("Это поле может содержать только цифры, пробелы, “-” и “+”.");
    } else {
        phone.setCustomValidity("");
    }
});