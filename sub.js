// Only for NodeJS
// From the shell command line run "node sub.js"

var mqtt = require ('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org:1883')
var topic = 'caon/#'



client.on('message', (topic, message, packet) => {
    message = message.toString()
    console.log(message)
    console.log(topic)
})

client.on('connect', () => {
    client.subscribe(topic)

})
