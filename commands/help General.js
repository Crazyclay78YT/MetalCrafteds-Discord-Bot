var list = ['-ping', '-poll']

module.exports = {
    name: 'helpgeneral',
    description: "you need help in general?",
    execute(message, args){
        message.channel.send({embed: {
            color: 0x009900,
            title: 'Help',
            fields: [
                { 
                    name: "General", 
                    value: (list),
                },
              ]
        }})
    }
}