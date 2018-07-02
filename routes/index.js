const myController = require('../controller/mycontroller')

// Add the route

const hello = {
    method:'GET',
    path:'/hello',
    handler: (request,h) => {
        return myController.myController(request, h)
    }
}

const oi = {
    method:'GET',
    path:'/oi',
    handler: (request,h) => {
        return myController.myController(request, h)
    }
}

module.exports = [].concat(hello, oi)