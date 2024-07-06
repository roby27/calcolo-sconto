const formElement = document.getElementById('calcolatore')
let prezzoScontatoElement = document.getElementById('prezzo-scontato')
let prezzoElement = document.getElementById('prezzo')
let percentualeElement= document.getElementById('percentuale')

formElement.addEventListener('submit', function (event) {
    event.preventDefault()
    let prezzo = parseFloat(prezzoElement.value)
    let percentuale = parseFloat(percentualeElement.value)
    let prezzoScontato = prezzo  * (1 - (percentuale / 100))
    let sconto = prezzo * (percentuale / 100)
    
    prezzoScontatoElement.innerHTML = "Il prezzo scontato è: <strong>" + prezzoScontato.toFixed(2) + "€</strong> <br> Lo sconto è di: <strong>" + sconto.toFixed(2) + "€</strong>"
    prezzoScontatoElement.classList.remove('d-none')
})

let toggleTemaElement = document.getElementById('toggletema')
let htmlElement = document.documentElement

toggleTemaElement.addEventListener('click', function () {
    let tema = htmlElement.getAttribute('data-bs-theme')
    if (tema === 'light') {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        toggleTemaElement.innerHTML = "<i class=\"bi bi-moon-fill\"></i>"
    } else {
        htmlElement.setAttribute('data-bs-theme', 'light');
        toggleTemaElement.innerHTML = "<i class=\"bi bi-brightness-high-fill\"></i>"
    }
})