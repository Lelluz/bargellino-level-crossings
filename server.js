const express = require('express'),
  app = express(),
  router = express.Router(),
  fetch = require('node-fetch'),
  PORT = process.env.PORT || 8080

router.get('/departures', async function (req, res) {
  const viaggiotreno = await fetch(`http://www.viaggiatreno.it/viaggiatrenonew/resteasy/viaggiatreno/partenze/S05010/${Date()}`)
  const viaggiotrenoResponseData = await viaggiotreno.json()
  res.json(viaggiotrenoResponseData)
})

app.use('/api', router)
app.listen(PORT, console.log(`Server running on port ${PORT}`))