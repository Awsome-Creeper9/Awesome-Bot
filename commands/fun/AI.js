const { SlashCommandBuilder } = require('discord.js');
const { Ollama } = require('ollama');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ai')
		.setDescription('Ask AI something')
		.addStringOption(option =>
			option.setName('question')
				.setDescription('question to ask')
				.setRequired(true)),
	async execute(interaction) {
		const question = interaction.options.getString('question');

		const prompt = `Respond to this:\n\`\`${question}\`\`.\nAdditional Instructions:\n- The only formatting you are allowed to use is Markdown. Do not attempt to use LaTeX (ie. no '\\boxed', '\\times', etc.).\n- Don't use KaTeX/LaTeX formatting when generating response.`

		await interaction.deferReply();

		const ollama = new Ollama();
		const response = await ollama.chat({
			model: 'deepseek-r1',
			messages: [{ role: 'user', content: prompt }],
		})

		await interaction.editReply(cleanText(response.message.content));
	},
};

function cleanText(text) {
	let intext = text
		.replace(/\\!/g, "")
		.replace(/\\boxed/g, "")
		.replace(/\\times/g, "\*")
		.replace(/\\/g, "")
		.replace(/\[/g, "")
		.replace(/\]/g, "")
		.replace(/\{/g, "")
		.replace(/\}/g, "")
		.replace(/beginalign\*/g, "")
		.replace(/endalign\*/g, "")
		.replace(/\&=/g, "=")
		.replace(/\n\n\n/g, "\n\n")
	return intext.replace(/[\s\S]*<\/think>\n?/, '').trim();
}