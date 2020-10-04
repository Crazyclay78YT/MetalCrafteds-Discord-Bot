module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send({embed: {
      color: 0x009900,
      description: "Pong!"
  }}
)}}
