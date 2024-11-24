const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kill')
		.setDescription('Kills a user')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('User to be killed')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('method')
				.setDescription('Method of how the user was killed'))
		.addStringOption(option =>
			option.setName('item-name')
				.setDescription('Name of item used to kill the user')),
	async execute(interaction) {
		const user = interaction.options.getUser('user');
		let method = interaction.options.getString('method');
		const item = interaction.options.getString('item-name');
		const methodList = ['generic', 'player generic', 'melee', 'ranged', 'cactus', 'cactus escape', 'fall', 'hit ground too hard', 'hit ground too hard escape', 'fell off ladder', 'fell off vines', 'fell off weeping vines', 'fell off twisting vines', 'fell off scaffolding', 'fell while climbing', 'fell out of water', 'doomed fall', 'void', 'void escape', 'magic', 'magic escape', 'player magic', 'explosion', 'player explosion', 'starvation', 'starve while fighting', 'lightning', 'lightning while fighting', 'wither', 'wither while fighting', 'firework', 'berry bush', 'berry bush escape', 'lava', 'lava escape', 'magma', 'magma escape', 'drowning', 'drowning escape', 'freezing', 'freezing escape', 'fire', 'burning', 'burned while fighting', 'fire while fighting', 'kinetic energy', 'kinetic energy escape', 'anvil', 'falling block', 'suffocation', 'suffocated while fighting', 'trident', 'stalagmite', 'stalagmite while fighting', 'stalactite', 'bed', 'cramming', 'cramming escape', 'thorns', 'blaze', 'bee', 'warden', 'wither skull', 'world border', 'world border while fighting', 'dehydration', 'dehydration escape', 'command', 'command while fighting', 'snowball', 'crossbow firework', 'warden escape', 'even more magic', 'mace']
		if (method === 'random') {
			method = methodList[Math.round(Math.random() * (methodList.length - 1))]
		}
		let message;
		if (method === 'void') {message = `${user} fell out of the world`}
		else if (method === 'melee') {message = `${user} was slain by ${interaction.user} ${item ? `using [*${item}*]` : ''}`}
		else if (method === 'ranged') {message = `${user} was shot by ${interaction.user} ${item ? `using [*${item}*]` : ''}`}
		else if (method === 'cactus') {message = `${user} was pricked to death`}
		else if (method === 'cactus escape') {message = `${user} walked into a cactus while trying to escape ${interaction.user}`}
		else if (method === 'fall') {message = `${user} fell from a high place`}
		else if (method === 'hit ground too hard') {message = `${user} hit the ground too hard`}
		else if (method === 'hit ground too hard escape') {message = `${user} hit the ground too hard while trying to escape ${interaction.user}`}
		else if (method === 'fell off ladder') {message = `${user} fell off a ladder`}
		else if (method === 'fell off vines') {message = `${user} fell off some vines`}
		else if (method === 'fell off weeping vines') {message = `${user} fell off some weeping vines`}
		else if (method === 'fell off twisting vines') {message = `${user} fell off some twisting vines`}
		else if (method === 'fell off scaffolding') {message = `${user} fell off scaffolding`}
		else if (method === 'fell out of water') {message = `death.fell.accident.water`}
		else if (method === 'fell while climbing') {message = `${user} fell while climbing`}
		else if (method === 'doomed fall') {message = `${user} was doomed to fall by ${interaction.user} ${item ? `using [*${item}*]` : ''}`}
		else if (method === 'void escape') {message = `${user} didn't want to live in the same world as ${interaction.user}`}
		else if (method === 'magic') {message = `${user} was killed by magic`}
		else if (method === 'magic escape') {message = `${user} was killed by magic while trying to escape ${interaction.user}`}
		else if (method === 'player magic') {message = `${user} was killed by ${interaction.user} using ${item ? `[*${item}*]` : 'magic'}`}
		else if (method === 'explosion') {message = `${user} blew up`}
		else if (method === 'player explosion') {message = `${user} was blown up by ${interaction.user} ${item ? `using [*${item}*]` : ''}`}
		else if (method === 'starvation') {message = `${user} starved to death`}
		else if (method === 'starve while fighting') {message = `${user} starved to death while fighting ${interaction.user}`}
		else if (method === 'lightning') {message = `${user} was struck by lightning`}
		else if (method === 'lightning while fighting') {message = `${user} was struck by lightning while fighting ${interaction.user}`}
		else if (method === 'wither') {message = `${user} withered away`}
		else if (method === 'wither while fighting') {message = `${user} withered away while fighting ${interaction.user}`}
		else if (method === 'firework') {message = `${user} went off with a bang`}
		else if (method === 'berry bush') {message = `${user} was poked to death by a sweet berry bush`}
		else if (method === 'berry bush escape') {message = `${user} was poked to death by a sweet berry bush while trying to escape ${interaction.user}`}
		else if (method === 'lava') {message = `${user} tried to swim in lava`}
		else if (method === 'lava escape') {message = `${user} tried to swim in lava to escape ${interaction.user}`}
		else if (method === 'drowning') {message = `${user} drowned`}
		else if (method === 'drowning escape') {message = `${user} drowned while trying to escape ${interaction.user}`}
		else if (method === 'magma') {message = `${user} discovered the floor was lava`}
		else if (method === 'magma escape') {message = `${user} walked into the danger zone due to ${interaction.user}`}
		else if (method === 'freezing') {message = `${user} froze to death`}
		else if (method === 'freezing escape') {message = `${user} was frozen to death by ${interaction.user}`}
		else if (method === 'fire') {message = `${user} went up in flames`}
		else if (method === 'burning') {message = `${user} burned to death`}
		else if (method === 'burned while fighting') {message = `${user} was burned to a crisp while fighting ${interaction.user}`}
		else if (method === 'fire while fighting') {message = `${user} walked into fire while fighting ${interaction.user}`}
		else if (method === 'kinetic energy') {message = `${user} experienced kinetic energy`}
		else if (method === 'kinetic energy escape') {message = `${user} experienced kinetic energy while trying to escape ${interaction.user}`}
		else if (method === 'anvil') {message = `${user} was squashed by a falling anvil`}
		else if (method === 'falling block') {message = `${user} was squashed by a falling block`}
		else if (method === 'trident') {message = `${user} was impaled by ${interaction.user} ${item ? `with [*${item}*]` : ''}`}
		else if (method === 'stalagmite') {message = `${user} was impaled on a stalagmite`}
		else if (method === 'stalagmite while fighting') {message = `${user} was impaled on a stalagmite while fighting ${interaction.user}`}
		else if (method === 'stalactite') {message = `${user} was skewered by a falling stalactite`}
		else if (method === 'suffocation') {message = `${user} suffocated in a wall`}
		else if (method === 'suffocated while fighting') {message = `${user} suffocated in a wall while fighting ${interaction.user}`}
		else if (method === 'bed') {message = `${user} was killed by [Intentional Game Design]`}
		else if (method === 'cramming') {message = `${user} was squished too much`}
		else if (method === 'cramming escape') {message = `${user} was squashed by ${interaction.user}`}
		else if (method === 'thorns') {message = `${user} was killed trying to hurt ${interaction.user}`}
		else if (method === 'blaze') {message = `${user} was fireballed by Blaze`}
		else if (method === 'bee') {message = `${user} was stung to death`}
		else if (method === 'warden') {message = `${user} was obliterated by a sonically-charged shriek`}
		else if (method === 'wither skull') {message = `${user} was shot by a skull from Wither`}
		else if (method === 'world border') {message = `${user} left the confines of this world`}
		else if (method === 'world border while fighting') {message = `${user} left the confines of this world while fighting ${interaction.user}`}
		else if (method === 'dehydration') {message = `${user} died from dehydration`}
		else if (method === 'dehydration escape') {message = `${user} died from dehydration while trying to escape ${interaction.user}`}
		else if (method === 'player generic') {message = `${user} died because of ${interaction.user}`}
		else if (method === 'command') {message = `${user} was killed`}
		else if (method === 'command while fighting') {message = `${user} was killed while fighting ${interaction.user}`}
		else if (method === 'snowball') {message = `${user} was pummeled by ${interaction.user}`}
		else if (method === "crossbow firework" && item) {message = `${user} went off with a bang due to a firework fired from [*${item}*] by ${interaction.user}`}
		else if (method === "warden escape" && item) {message = `${user} was obliterated by a sonically-charged shriek while trying to escape ${interaction.user} wielding [*${item}*]`}
		else if (method === "even more magic") {message = `${user} was killed by even more magic`}
		else if (method === "mace") (message = `${user} was smashed by ${interaction.user} ${item ? `with [*${item}*]` : ''}`)
		else {message = `${user} died`}
		await interaction.reply(`${message}`);
	},
};