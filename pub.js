var mqtt = require ('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org:1883')
var topic = 'caon/teste/1'
var message = '- CAON EXEMPLO -'



client.on('connect', () => {
    client.publish(topic, message, {qos: 0, retain: false})
    console.log('Mensagem Enviada', message)
})



//funciona pelo nodeJS
