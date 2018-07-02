const myService = require('../service/myservice')

const myController = (req, h) => {
    console.log(req.query.id)
    return myService.fromMyService(req, h);
}

module.exports = {
    myController: myController
}