function GetData() {
    // Get data from HTML form

    const form = document.querySelector('.form')
    const result = document.querySelector('.result')
    const people = []

    function GetFormEvent(event) {
        event.preventDefault()
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        people.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        console.log(people)
        result.innerHTML += `<p>
                                Nome: ${nome.value} | 
                                Sobrenome: ${sobrenome.value} | 
                                Peso: ${peso.value} KG | 
                                Altura: ${altura.value} Cm
                            </p>`
    }
    form.addEventListener('submit', GetFormEvent)

}
GetData()