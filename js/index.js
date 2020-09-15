let arrivalTrains = null
let departureTrains = null

function getPreparedUrl(towardsTrains) {
    return `http://www.viaggiatreno.it/viaggiatrenonew/resteasy/viaggiatreno/${towardsTrains}/S05010/${Date()}`
}

function filterTrains(trains) {
    return trains.filter(train => train.destinazione === 'BOLOGNA C.LE' || train.origine === 'BOLOGNA CENTRALE')
}

fetch(getPreparedUrl('partenze'))
    .then(res => res.json())
    .then(res => arrivalTrains = filterTrains(res))
    .then(res => )

fetch(getPreparedUrl('arrivi'))
    .then(res => res.json())
    .then(res => departureTrains = filterTrains(res))