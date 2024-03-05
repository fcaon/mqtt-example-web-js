var mqtt = require ('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org:1883')
var topic = 'caon/#'



client.on('message', (topic, message, packet) => {
    message = message.toString()
    console.log(message)
    console.log(topic)
    //console.log(packet.qos)
})

client.on('connect', () => {
    client.subscribe(topic)

})


//Funciona pelo NodeJSs
