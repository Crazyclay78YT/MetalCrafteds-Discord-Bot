var list2 = ['-start', '-stop', '-link', 'idk']

module.exports = {
    name: 'helpstream',
    description: "you need help in stream?",
    execute(message, args){
        message.channel.send({embed: {
            color: 0x009900,
            title: 'Help',
            fields: [
                { 
                    name: "Stream", 
                    value: (list2),
                },
              ]
        }})
    }
}