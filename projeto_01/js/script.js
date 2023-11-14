function verifyFine() {
    const speed = document.querySelector('#velocidade').value
    let output_box = document.querySelector('#saidaApp')
    let output_txt = document.querySelector('#resultado')

    if(speed < 60) {
        output_box.style.backgroundColor = '#59b571' 
        output_txt.innerHTML = `<b>Velocidade:</b> ${speed} km/h
        <p class="minitexto"> Parabéns, você estava dentro do limite de velocidade,
        portanto não houve multa! </p>`
    } else if(speed == 60) {
        output_box.style.backgroundColor = '#e6c927' 
        output_txt.innerHTML = `<b>Velocidade:</b> ${speed} km/h
        <p class="minitexto"> Você estava no limite, mas cuidado! Suas chances de
        ultrapassa-lo são grandes. </p>`
    } else {
        output_box.style.backgroundColor = '#e64d27'
        output_txt.innerHTML = `<b>Velocidade:</b> ${speed} km/h
        <p class="minitexto"> Você foi multado! Por favor, contate o Detran mais
        próximo para evitar pontos negativos em sua carteira de
        motorista. </p>`
    }
}