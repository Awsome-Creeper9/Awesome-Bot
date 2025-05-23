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

		const prompt = `Respond to this:\n\`\`${question}\`\`.\nFOR THE LOVE OF EVERYTHING DO NOT USE ANY SPECIAL FORMATTING FOR MATH/SCIENCE!!!! NO LaTeX, NO KaTeX, KEEP IT OUT OF YOUR RESPONSE ENTIRELY!!!!!!!!`

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
		.replace(/\\over/g, "/")
		.replace(/\\div/g, "/")
		.replace(/\\begin{align}\*/g, "")
		.replace(/\\end{align}\*/g, "")
		.replace(/\n\n\n/g, "\n\n")
	return intext.replace(/[\s\S]*<\/think>\n?/, '').trim();
}

// Note: dispite the prompt, the AI still uses KaTeX for formatting