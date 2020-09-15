function getPreparedUrl() {
    return `http://www.viaggiatreno.it/viaggiatrenonew/resteasy/viaggiatreno/partenze/S05010/${Date()}`
}

function handleTrains(trains) {
    trains.forEach(train => {
        let levelCrossingClosedTime = null
        if (train.destinazione === 'BOLOGNA C.LE') {
            levelCrossingClosedTime = train.compOrarioPartenzaZeroEffettivo
        } else {
            const currentTimeSplitted = compOrarioPartenzaZeroEffettivo.split(':')
            levelCrossingClosedTime = `${currentTimeSplitted[0]}:${parseInt(currentTimeSplitted[1]) - 5}`
        }
        console.log(
            `Destinazione: ${train.destinazione}`,
            `Partenza effettiva: ${train.compOrarioPartenzaZeroEffettivo}`,
            `Passaggio a livello chiuso a: ${levelCrossingClosedTime}`
        )
    })
}

fetch(getPreparedUrl('partenze'))
    .then(res => res.json())
    .then(res => handleTrains(res))