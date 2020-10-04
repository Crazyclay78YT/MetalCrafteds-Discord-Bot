var list1 = ['-play', '-stop', '-volume', '-skip', '-queue']

module.exports = {
    name: 'helpmusic',
    description: "you need help in music?",
    execute(message, args){
        message.channel.send({embed: {
            color: 0x009900,
            title: 'Help',
            fields: [
                { 
                    name: "Music", 
                    value: (list1),
                },
              ]
        }})
    }
}