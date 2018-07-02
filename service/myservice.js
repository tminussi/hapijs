const fromMyService = (req, h) => {
    console.log('logging from service')
    return 'hello world from my service';
}

module.exports = {
    fromMyService: fromMyService
}