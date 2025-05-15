const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Get info on commands and how to use them')
		.addStringOption(option =>
			option.setName('command')
				.setDescription('Specify a command you need help with')),
	async execute(interaction) {
		const command = interaction.options.getString('command');

		if (command === 'convert-base') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/convert-base')
			.setDescription('/convert-base <input> <base> <to-base>')
			.addFields(
				{ name: 'Description:', value: 'Allows you to convert an integer from one base to another.' },
				
				{ name: '<input>:', value: '**Required**. The ``input`` value is the value that is being converted.' },
				{ name: '<base>:', value: '**Required**. The ``base`` value is there to give the bot context as to which base the ``input`` value is currently in.' },
				{ name: '<to-base>:', value: '**Required**. The ``to-base`` value is the base that the ``input`` value is to be converted into.' },
				{ name: '*Additional Info*:', value: 'The only valid bases are integers between 2 and 32 (inclusive).' },
			)
		}
		else if (command === 'change-case') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/change-case')
			.setDescription('/change-case <text> <case>')
			.addFields(
				{ name: 'Description:', value: 'Allows you to change the case of a string to either upper case or lower case.' },
				
				{ name: '<text>:', value: '**Required**. The ``text`` value is the string whose case is to be changed.' },
				{ name: '<case>:', value: '**Required**. The ``case`` value tells the bot whether to convert the ``text`` value to upper case or lower case.' },
			)
		}
		else if (command === 'regex-slicer') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/regex-slicer')
			.setDescription('/regex-slicer <input> <regex>')
			.addFields(
				{ name: 'Description:', value: 'Allows you to remove parts of a string based on a regular expression pattern.' },
				
				{ name: '<input>:', value: '**Required**. The ``input`` value is the string to be edited.' },
				{ name: '<regex>:', value: '**Required**. The ``regex`` value is the regular expression pattern that is followed when slicing the ``input`` value.' },
			)
		}
		else if (command === 'ping') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/ping')
			.setDescription('/ping')
			.addFields(
				{ name: 'Description:', value: 'Provides the latency between sending the command and the reply.' },
			)
		}
		else if (command === 'random color') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/random color')
			.setDescription('/random color [alpha]')
			.addFields(
				{ name: 'Description:', value: 'Allows you to generate a random color.' },
				
				{ name: '[alpha]:', value: '*Optional*. The ``alpha`` value tells the bot whether to randomize the opacity of the color (default: false).' },
			)
		}
		else if (command === 'random word') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/random word')
			.setDescription('/random word [amount]')
			.addFields(
				{ name: 'Description:', value: 'Allows you to generate random words.' },
				
				{ name: '[amount]:', value: '*Optional*. The ``amount`` value tells the bot whether to generate multiple words and how many (default: 1).' },
			)
		}
		else if (command === 'random letter') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/random letter')
			.setDescription('/random letter [amount]')
			.addFields(
				{ name: 'Description:', value: 'Allows you to generate random letters (in the English alphabet).' },
				
				{ name: '[amount]:', value: '*Optional*. The ``amount`` value tells the bot whether to generate multiple letters and how many (default: 1).' },
			)
		}
		else if (command === 'random integer') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/random integer')
			.setDescription('/random integer <minimum> <maximum>')
			.addFields(
				{ name: 'Description:', value: 'Allows you to generate a random integer.' },
				
				{ name: '<minimum>:', value: '**Required**. The ``minimum`` value tells the bot the lowest possible value to generate.' },
				{ name: '<maximum>:', value: '**Required**. The ``maximum`` value tells the bot the highest possible value to generate.' },
			)
		}
		else if (command === 'suggest') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/suggest')
			.setDescription('/suggest')
			.addFields(
				{ name: 'Description:', value: 'Allows you to send a suggestion directly to the bot\'s developer.' },

				{ name: '*Additional Info*:', value: 'Your user will be attached to the suggestion. The developer is able to blacklist you from sending suggestions.' },
			)
		}
		else if (command === 'echo') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/echo')
			.setDescription('/echo <message>')
			.addFields(
				{ name: 'Description:', value: 'Sends a message directly back to the channel.' },
				
				{ name: '<message>:', value: '**Required**. The ``message`` value is what the bot will send back.' },
			)
		}
		else if (command === 'kill') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/kill')
			.setDescription('/kill <user> [method] [item-name]')
			.addFields(
				{ name: 'Description:', value: 'Allows you to "kill" another user.' },
				
				{ name: '<user>:', value: '**Required**. The ``user`` value provides the user to be "killed".' },
				{ name: '[method]:', value: '*Optional*. The ``method`` value sets the method of the ``user``\'s death (default: generic).' },
				{ name: '[item-name]:', value: '*Optional*. The ``item-name`` value sets the name of the item used to "kill" the ``user`` (if applicable).' },
				{ name: '*Additional Info*:', value: 'The full list of valid ``method`` values is on the [wiki](https://github.com/Awsome-Creeper9/Awesome-Bot/wiki/kill).' },
			)
		}
		else if (command === 'help') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/help')
			.setDescription('/help [command]')
			.addFields(
				{ name: 'Description:', value: 'Sends a list of all the commands or the info on a specific command.' },
				
				{ name: '[command]:', value: '*Optional*. The ``command`` value allows you to obtain info on a specific command.' },
			)
		}
		else if (command === 'status') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/status')
			.setDescription('/status <status> <type> [activity]')
			.addFields(
				{ name: 'Description:', value: 'Allows the bot\'s status to be changed.' },
				
				{ name: '<status>:', value: '**Required**. The ``status`` value is the status message displayed.' },
				{ name: '<type>:', value: '**Required**. The ``type`` value is the type of status (Online, Idle, DnD, or Invisible).' },
				{ name: '[activity]:', value: '*Optional*. The ``activity`` value is what type of activity the bot is performing (Playing, Streaming, Listening, Watching, Competing, or None).' },
				{ name: '*Additional Info*:', value: 'Only the bot\'s developer has access to use this command.' },
			)
		}
		else if (command === 'msg') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/msg')
			.setDescription('/msg <user> <message> [anonymous]')
			.addFields(
				{ name: 'Description:', value: 'Allows you to have the bot DM another user.' },
				
				{ name: '<user>:', value: '**Required**. The ``user`` value provides the user that\'ll be DM\'d.' },
				{ name: '<message>:', value: '**Required**. The ``message`` value is what the bot will send to the ``user``.' },
				{ name: '[anonymous]:', value: '*Optional*. The ``anonymous`` value allows you to send the message anonymously (default: false).' },
				{ name: '*Additional Info*:', value: 'A user may request to be placed on a blacklist to prevent being messaged via this command.' },
			)
		}
		else if (command === 'rps') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/rps')
			.setDescription('/rps <choice>')
			.addFields(
				{ name: 'Description:', value: 'Allows you to play rock, paper, scissors with the bot.' },
				
				{ name: '<choice>:', value: '**Required**. The ``choice`` value is your choice between rock, paper, or scissors.' },
			)
		}
		else if (command === 'timer') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/timer')
			.setDescription('/timer <interval-type> <amount> [reason]')
			.addFields(
				{ name: 'Description:', value: 'Allows you to set a timer.' },
				
				{ name: '<interval-type>:', value: '**Required**. The ``interval-type`` value is the type of interval to be used (Second, Minute, Hour, Day, or Week).' },
				{ name: '<amount>:', value: '**Required**. The ``amount`` value is the amount of time in the specified ``interval-type``.' },
				{ name: '[reason]:', value: '*Optional*. The ``reason`` value is the reason for the timer.' },
			)
		}
		else if (command === 'gradient') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/gradient')
			.setDescription('/gradient <color1..2> [color3..10] [type]')
			.addFields(
				{ name: 'Description:', value: 'Allows you to create a gradient.' },
				
				{ name: '<color1>:', value: '**Required**. The ``color1`` and ``color2`` values are the first colors in the gradient.' },
				{ name: '[color3..10]:', value: '*Optional*. The ``color3`` through ``color10`` values are the colors in the gradient after ``color2`` (in order).' },
				{ name: '[type]:', value: '*Optional*. The ``type`` value is the type of gradient to be created (Linear, Radial, 45 Degrees, or Conic).' },
			)
		}
		else if (command === 'color') {
			var embed = new EmbedBuilder()
				.setColor(0x000000)
				.setTitle('/color')
				.setDescription('/color <color>')
				.addFields(
					{ name: 'Description:', value: 'Allows you to display a color.' },

					{ name: '<color>:', value: '**Required**. The ``color`` value is the color to display.' },
				)
		}
		else if (command === 'caesar-cypher') {
			var embed = new EmbedBuilder()
				.setColor(0x000000)
				.setTitle('/caesar-cypher')
				.setDescription('/caesar-cypher <string> <shift>')
				.addFields(
					{ name: 'Description:', value: 'Allows you to encrypt or decrypt a string using a Caesar cypher.' },
					
					{ name: '<string>:', value: '**Required**. The ``string`` value is the string to be encrypted or decrypted.' },
					{ name: '<shift>:', value: '**Required**. The ``shift`` value is the number of letters to shift the string by.' },
					{ name: '*Additional Info*:', value: 'The shift value must be greater than (or equal to) 0. The string must only include English letters and spaces.' },
				)
		}
		else if (command === 'hangman') {
			var embed = new EmbedBuilder()
				.setColor(0x000000)
				.setTitle('/hangman')
				.setDescription('/hangman')
				.addFields(
					{ name: 'Description:', value: 'Allows you to play a game of hangman.' },

					{ name: '*Additional Info*:', value: 'Cannot be used in DMs.' },
				)
		}
		else if (command === 'mute') {
			var embed = new EmbedBuilder()
				.setColor(0x000000)
				.setTitle('/mute')
				.setDescription('/mute <user> [reason] [time]')
				.addFields(
					{ name: 'Description:', value: 'Mute a user on a server (only people with Timeout Member perms can use this command).' },

					{ name: '<user>:', value: '**Required**. The ``user`` value is the user to be muted.' },
					{ name: '[reason]:', value: '*Optional*. The ``reason`` value is the reason for the mute.' },
					{ name: '[time]:', value: '*Optional*. The ``time`` value is the length of the mute in hours (Max is 28 days. Default is 28 days).' },
				)
		}
		else if (command === 'unmute') {
			var embed = new EmbedBuilder()
				.setColor(0x000000)
				.setTitle('/unmute')
				.setDescription('/unmute <user>')
				.addFields(
					{ name: 'Description:', value: 'Unmute a user on a server (only people with Timeout Member perms can use this command).' },

					{ name: '<user>:', value: '**Required**. The ``user`` value is the user to be unmuted.' },
				)
		}
		else if (command === 'kick') {
			var embed = new EmbedBuilder()
				.setColor(0x000000)
				.setTitle('/kick')
				.setDescription('/kick <user> [reason]')
				.addFields(
					{ name: 'Description:', value: 'Kick a user on a server (only people with Kick Member perms can use this command).' },

					{ name: '<user>', value: '**Required**. The ``user`` value is the user to be kicked.' },
					{ name: '[reason]:', value: '*Optional*. The ``reason`` value is the reason for the kick.' },
				)
		}
		else if (command === 'ban') {
			var embed = new EmbedBuilder()
				.setColor(0x000000)
				.setTitle('/ban')
				.setDescription('/ban <user> [reason]')
				.addFields(
					{ name: 'Description:', value: 'Ban a user on a server (only people with Ban Member perms can use this command).' },

					{ name: '<user>', value: '**Required**. The ``user`` value is the user to be banned.' },
					{ name: '[reason]:', value: '*Optional*. The ``reason`` value is the reason for the ban.' },
				)
		}
		else if (command === 'unban') {
			var embed = new EmbedBuilder()
				.setColor(0x000000)
				.setTitle('/unban')
				.setDescription('/unban <user>')
				.addFields(
					{ name: 'Description:', value: 'Unban a user on a server (only people with Ban Member perms can use this command).' },

					{ name: '<user>', value: '**Required**. The ``user`` value is the user to be unbanned.' },
				)
		}
		else {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('Help:')
			.setURL('https://github.com/Awsome-Creeper9/Awesome-Bot/wiki/')
			.addFields(
				{ name: 'help', value: '/help [command]' },
				{ name: 'convert-base', value: '/convert-base <input> <base> <to-base>' },
				{ name: 'change-case', value: '/change-case <text> <case>' },
				{ name: 'regex-slicer', value: '/regex-slicer <input> <regex>' },
				{ name: 'kill', value: '/kill [method] [item-name]' },
				{ name: 'ping', value: '/ping' },
				{ name: 'random color', value: '/random color [alpha]' },
				{ name: 'random word', value: '/random word [amount]' },
				{ name: 'random letter', value: '/random letter [amount]' },
				{ name: 'random integer', value: '/random integer <minimum> <maximum>' },
				{ name: 'echo', value: '/echo <message>' },
				{ name: 'suggest', value: '/suggest' },
				{ name: 'status', value: '/status <status> <type> [activity]' },
				{ name: 'msg', value: '/msg <user> <message> [anonymous]' },
				{ name: 'rps', value: '/rps <choice>' },
				{ name: 'timer', value: '/timer <interval-type> <amount> [reason]' },
				{ name: 'gradient', value: '/gradient <color1..2> [color3..10] [type]' },
				{ name: 'color', value: '/color <color>' },
				{ name: 'caesar-cypher', value: '/caesar-cypher <text> <shift>' },
				{ name: 'hangman', value: '/hangman' },
				{ name: 'mute', value: '/mute <user> [reason] [time]' },
				{ name: 'unmute', value: '/unmute <user>' },
				{ name: 'kick', value: '/kick <user> [reason]' },
				{ name: 'ban', value: '/ban <user> [reason]' },
				{ name: 'unban', value: '/unban <user>' },
			)
		}
		
		await interaction.reply({ embeds: [embed] });
	},
};