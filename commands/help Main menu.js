module.exports = {
    name: 'help',
    description: "you need help?",
    execute(message, args){
        message.channel.send({embed: {
            color: 0x009900,
            title: 'Help',
            fields: [
                { 
                    name: "General", 
                    value: "-helpGeneral",
                },
                {
                    name: "Music",
                    value: "-helpMusic",
                },
                { 
                    name: "Stream",
                    value: "-helpStream",
                },
              ]
        }})
    }
}