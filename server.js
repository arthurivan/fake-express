const fakeExpress = require('./src/fakeExpress')
const CONFIG = require('./config')

const app = fakeExpress()
const server = app.listen(CONFIG.PORT, () => console.log(`Server running on ${CONFIG.PORT}`))
