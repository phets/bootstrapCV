function switchLanguage(lang) {
    var gb_div = document.getElementById("english");
    var it_div = document.getElementById("italian");
    var es_div = document.getElementById("spanish");

    if(lang=="english") {
        gb_div.classList.remove("d-none");
        it_div.classList.add("d-none");
        es_div.classList.add("d-none");
    }

    if(lang=="spanish") {
        gb_div.classList.add("d-none");
        it_div.classList.add("d-none");
        es_div.classList.remove("d-none");
    }

    if(lang=="italian") {
        gb_div.classList.add("d-none");
        it_div.classList.remove("d-none");
        es_div.classList.add("d-none");
    }
}

function setLanguage() {
    if(location.hash) {
        if(location.hash == '#es' || location.hash == '#spanish') {
            console.log(location.hash);
            switchLanguage('spanish');
        }
        if(location.hash == '#en' || location.hash == '#english') {
            console.log(location.hash);
            switchLanguage('english');
        }
        if(location.hash == '#it' || location.hash == '#italian') {
            console.log(location.hash);
            switchLanguage('italian');
        }
    }
}