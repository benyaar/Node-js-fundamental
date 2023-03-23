const Emitter = require('events')

const emitter = new Emitter()

emitter.on('message', (data, second, third) => {
    console.log(`Your message ${data}`)
    console.log(`second argument ${second}`)
})
// emitter.once('message', callback)
//
// emitter.emit('message')
// emitter.emit('message')
// emitter.emit('message')
// emitter.emit('message')
// emitter.emit('message')
//
// emitter.removeAllListeners()
// emitter.removeListener('message', callback)


const MESSAGE = false

if(MESSAGE){
    emitter.emit('message', 'mytest', 123)
} else {
    emitter.emit('message', 'no messages')
}
