const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('random')
		.setDescription('Randomizers')
		.addSubcommand(subcommand =>
			subcommand
				.setName('color')
				.setDescription('Responds with a random color'))
		.addSubcommand(subcommand =>
			subcommand
				.setName('word')
				.setDescription('Responds with a random word')
				.addIntegerOption(option => option.setName('amount').setDescription('Amount of words')))
		.addSubcommand(subcommand =>
			subcommand
				.setName('integer')
				.setDescription('Responds with a random integer')
				.addIntegerOption(option => option.setName('maximum').setDescription('Maximum Limit').setRequired(true))
				.addIntegerOption(option => option.setName('minimum').setDescription('Minimum Limit').setRequired(true)))
		.addSubcommand(subcommand =>
			subcommand
				.setName('letter')
				.setDescription('Responds with a random english letter')
				.addIntegerOption(option => option.setName('amount').setDescription('Amount of letters'))),
	async execute(interaction) {
		if (interaction.options.getSubcommand() === 'color') {
			const r = Math.round(Math.random() * 255);
			const g = Math.round(Math.random() * 255);
			const b = Math.round(Math.random() * 255);

			let HexR = r.toString(16).toUpperCase();
			let HexG = g.toString(16).toUpperCase();
			let HexB = b.toString(16).toUpperCase();
			if (r < 16) {HexR = '0' + HexR}
			if (g < 16) {HexG = '0' + HexG}
			if (b < 16) {HexB = '0' + HexB}

			const Hex = `#${HexR}${HexG}${HexB}`
			const HexInt = `0x${HexR}${HexG}${HexB}`
			const colorLink = `https://htmlcolors.com/color-image/${HexR}${HexG}${HexB}.png`

			const embed = new EmbedBuilder()
				.setColor(Number(HexInt))
				.setTitle(`${Hex}`)
				.setThumbnail(colorLink);

			await interaction.reply({ embeds: [embed] });
		} else if (interaction.options.getSubcommand() === 'word') {
		const words = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Black", "White", "Gray", "Brown", "Silver", "Teal", "Lime", "Gold", "Bronze", "Open", "Close", "Off", "On", "Naked", "Clothing", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Word", "Nothing", "Everything", "Void", "Abyss", "Mine", "Craft", "Teacher", "Student", "Desk", "Pencil", "Eraser", "Chalk", "Color", "Rainbow", "Person", "People", "You", "I", "A", "Your", "You're", "There", "Their", "They're", "Year", "Month", "Day", "Hour", "Minute", "Second", "Decade", "Century", "Eon", "Era", "Period", "Point", "Exclaim", "Question", "Run", "Deal", "Drugs", "Alcohol", "Drunk", "Poison", "Bad", "Good", "Great", "Best", "Garbage", "Candle", "Celebrate", "Eat", "Drink", "Sleep", "Repeat", "Game", "Ball", "Cool", "Math", "English", "Spanish", "French", "Supercalifragilisticexpialidocious", "Super", "Fragmentation", "Entitled", "Estate", "In", "It", "At", "Stop", "Go", "Meal", "Food", "Wheel", "Van", "Car", "Truck", "Me", "My", "Mom", "Dad", "Father", "Mother", "Grandfather", "Grandmother", "Time", "Space", "Sun", "Planet", "Earth", "Dwarf", "Moon", "Asteroid", "Octagon", "Hundred", "Square", "Ampersand", "Asterisk", "Sentence", "Paragraph", "Kelp", "Need", "Want", "Lead", "Keep", "Keyboard", "Keys", "Monitor", "Spring", "Computer", "Bread", "Milk", "Mouse", "Cheese", "Eel", "Fish", "Cod", "Salmon", "Tropical", "Storm", "Hurricane", "Tornado", "Lemon", "Earthquake", "Volcano", "Cloud", "Lightning", "Thunder", "Rain", "Snow", "Feeding", "Fell", "Feels", "Dining", "Munch", "Squish", "Landing", "Wrote", "Read", "Meat", "Isometric", "Telecommunications", "Orbit", "Atoms", "Protons", "Electrons", "Neutrons", "Cell", "Nucleus", "Nuclear", "Nuke", "Bomb", "Planes", "Tower", "Triangle", "Circle", "Keen", "Nimble", "Sly", "Efficient", "User", "Comma", "Colon", "Symmetric", "Asexual", "Pansexual", "Heterosexual", "Homosexual", "Bisexual", "Straight", "Gay", "Curve", "Slight", "Light", "Fight", "Night", "Knight", "Kite", "Cough", "Pop", "Corn", "Elbows", "Discord", "Curve", "Supercalifragilisticexpialidocious", "Grass", "Pneumonoultramicroscopicsilicovolcanoconiosis", "Dinosaur", "Macaroni", "Cheese", "Bread", "Food", "Gender", "Omnisexual", "Flag", "Pink", "Pride", "Progress", "Digress", "Deam", "Beacon", "Bacon", "Miner", "Minor", "Major", "Degree", "Scale", "Safe", "Size", "Need", "Keep", "Pan", "Pot", "Calendar", "Bowl", "Cup", "Send", "Mail", "Poop", "Crap", "Owl", "Pee", "Pork", "Beef", "Chicken", "Slice", "Lime", "Lemon", "Orange", "Rain", "Thunder", "Lightning", "Storm", "Trap", "Door", "White", "Transluscent", "Heavy", "Dark", "Lord", "Over", "World", "End", "Finish", "Bucket", "Tropical", "Of", "Ore", "Or", "Oar", "Paddle", "Bat", "Baseball", "Basket", "Football", "Soccer", "Is", "Choice", "Command", "Prompt", "Switch", "Ball", "Lever", "Boil", "Toilet", "Dude", "Dud", "Mud", "Crud", "Sheep", "Horse", "Animalistic", "Essence", "Exhile", "Volunteer", "Host", "Elect", "Electricity", "Power", "Cork", "Fork", "Spoon", "Tree", "Forest", "Bot", "Rude", "Money", "Funny", "Equals", "Rights", "Meat", "Meet", "Repeating", "Slider", "Ice", "Microphone", "Gigantic", "Terrifying", "Perpendicular", "Estate", "Bomb", "Explosive", "Everyone", "Here", "Role", "Rules", "Ping", "Pound", "Sign", "Octothorpe", "Cream", "Piñata", "Pepper", "Candy", "Can", "Dye", "Die", "Hijack", "Typical", "Pick", "Pickaxe", "Sword", "Axe", "Hoe", "Diamond", "Rack", "Golden", "Guild", "Guilded", "Stone", "Rock", "Dirt", "Water", "Magma", "Lava", "Bathe", "Breath", "Breathe", "Bath", "Shower", "Lather", "Leather", "All", "Lavender", "Lavish", "Livid", "Vivid", "Update", "Upgrade", "Downgrade", "Step", "Back", "Foward", "Direct", "Message", "User", "Player", "Prop", "Crop", "Mop", "Top", "Unsteady", "Variable", "Reference", "Options", "Permission", "Allow", "Deny", "Affirmative", "Positive", "Negative", "Coronavirus", "Silence", "Advance", "Additionally", "Prove", "Provoke", "Characters", "Embed", "Edit", "Describe", "Description", "Derive", "Drive", "Save", "Clone", "Delete", "Window", "Apple", "Beat", "Seal", "Seel", "Seek", "Peel", "Lead", "Leader", "Read", "Shear", "Scissors", "Bracket", "Braces", "Parenthesis", "Octopus", "Question", "Understand", "Done", "Almost", "Shoot", "Gun", "Shift", "Capitol", "Sign", "Resign", "Fire", "Sigh", "Lose", "Loose", "Tight", "Statistic", "Fudge", "Pizzaria", "Palace", "Country", "County", "Parish", "Hungry", "Deaming", "Dreaming", "Dream", "Seam", "Seem", "Seen", "Ill", "Kill", "Fill", "Ew", "Ewe", "Mill", "Till", "Like", "Megaphone", "Microphone", "Clothes", "Pajamas", "Dress", "Pants", "Shorts", "Shot", "Head", "Crown", "Never", "Die", "Techno", "Electronic", "Dance", "Music", "Arts", "Reward", "Award", "Random", "Embed", "Bed", "Bedding", "Splash", "Text", "Stein", "Fine", "Sine", "Cosine", "Tangent", "Estates", "Animalistic", "Balistic", "Missile", "Soda", "Pop", "Use", "Redo", "Reuse", "Server", "Serve", "Dice", "Spin", "Spinner", "Cards", "Play", "Playing", "Port", "Portable", "Potty", "Toilet", "Shoot", "Basket", "Bread", "Chips", "Fish", "Fries", "Flags", "Flag", "Chip", "Chore", "Chokes", "Charcoal", "Coals", "Burn", "Fire", "Hell", "Heaven", "Seven", "Mice", "Exists", "Underlined", "Under", "Overrated", "Underestimate", "Response", "Box", "Extremely", "Time", "Timely", "Answer", "Question", "Mark", "Semicolon", "Pings", "Ping", "Parameter", "Meter", "Centimeter", "Deciliter", "Milligram", "Contour", "Paraphrase", "Bracket", "Chapter", "Live", "Delta", "Time", "Diacritic", "Grave", "Mega", "Byte", "Drive", "Hardware", "Firmware", "Software", "Backslash", "Domination", "Communism", "Capitalism", "Socialism", "Regime", "Governmental", "Wing", "False", "Itemized", "Stream", "Death", "Laugh", "Holocaust", "Hexadecimal", "Hyperactive", "Light", "Punk", "Retro", "Historically", "Never", "Least", "Fuzzy", "Static", "Sarcasm", "Sex", "Race", "Gender", "Sexuality", "Meaning", "Meme", "Memo", "Lemur", "Leaf", "Carrot", "Influenza", "Influence", "Joke", "Java", "Job", "Manuscripts", "Collapse", "Soviet", "Social", "Zeal", "Raspberry", "Zany", "Zebra", "Bull", "Slash", "Flash", "Passes", "Through", "Though", "Thing", "Thinly", "Ball", "Little", "Big", "Bite", "Bent", "Lint", "Roll", "Yaw", "Pitch", "Language", "Webpage", "Website", "Comment", "Coma", "Apostrophe", "Adjective", "Propagate", "Populate", "Pool", "Swims", "Palindrome", "Romance", "Germanic", "Brain", "Organ", "Syringe", "Slimy", "Spike", "Spiny", "Table", "Tablet", "Tavern", "Bartender", "Partake", "Argument", "Origin", "Originality", "Fuse", "Muddy", "Feud", "Family", "Friends", "Thrice", "Twice", "Twist", "Once", "Million", "Exponential", "Trips", "Quoted", "Cite", "Coincide", "Coined", "Term", "Tracks", "Picture", "Profile", "Teleprompter", "Television", "Telephone", "Cellphone", "Phone", "Code", "Program", "Calculated", "Calculator", "Emancipate", "Slack", "Slush", "Thumb", "Nail", "Screw", "Hammer", "Drill", "Dull", "Dim", "Doom", "Approaching", "Impending", "An", "And", "Ask", "Pain", "Polo", "Tuxedo", "Shirt", "Jacket", "Coat", "Vest", "Interest", "Suggesting", "Ecstatic", "Meth", "Mole", "Scroll", "Bar", "Function", "Python", "Scratch", "Billiards", "Cue", "Queue", "Quack", "Quality", "Quantitative", "Damage", "Attack", "Laser", "Sounds", "Background", "Foreground", "Foliage", "Sacred", "Stale", "Stall", "Stole", "Smack", "Snack", "Snake", "Sweep", "Dust", "Frogs", "Toadstool", "Fungus", "Toad", "Fool", "For", "Only", "Lone", "Alone", "Apex", "Buck", "Puck", "Hamburger", "Lady", "Bug", "Sting", "String", "Too", "To", "Total", "Vote", "Elections", "Robotic", "Stork", "Stiff", "Sniff", "Node", "Nose", "Mode", "Percent", "Percentage", "Pairing", "Ready", "Auxillary", "Audio", "Video", "Vibrations", "Fix", "Rooster", "Roost", "Hen", "Integer", "Boolean", "Books", "Looks", "Rook", "King", "Queen", "Prince", "Princess", "Bishop", "Pawn", "Firefighter", "Board", "Police", "United", "States", "Republic", "Democracy", "Monarchy", "Oligarchy", "Theocracy", "Troop", "Throb", "Knell", "Kneel", "Knee", "Leg", "Arm", "Servo", "Photographic", "Graphically", "Carefully", "Cracker", "Nut", "Coconut", "Peach", "Pear", "Fruit", "Strawberry", "Melon", "Circular", "Saw", "Blade", "Blaze", "Rot", "Nitrogen", "Oxygen", "Argon", "Xenon", "Yttrium", "Magnesium", "Helium", "Hydrogen", "Uranium", "Plutonium", "Americium", "Iron", "Sodium", "Copper", "Brass", "Cobalt", "Amethyst", "Ruby", "Emerald", "Pearl", "Opal", "Topaz", "Lapis", "Amber", "Sand", "Waves", "Beach", "Shore", "Take", "Attended", "Motor", "Engine", "Groups", "Sheets", "Life", "Lively", "Likely", "Likewise", "Hand", "Foot", "Face", "Value", "Let", "Constant", "Construct", "Critical", "Lunar", "Solar", "Plaque"]

			var amount = interaction.options.getInteger('amount')

			var word = words[Math.round(Math.random() * (words.length - 1))]

			while (amount > 1) {
				word = word + ", " + words[Math.round(Math.random() * (words.length - 1))]
				amount--
			}

			await interaction.reply(`${word}`);
		}else if (interaction.options.getSubcommand() === 'letter') {
			const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

			var amount = interaction.options.getInteger('amount')

			var letter = letters[Math.round(Math.random() * (letters.length - 1))]

			while (amount > 1) {
				letter = letter + ", " + letters[Math.round(Math.random() * (letters.length - 1))]
				amount--
			}

			await interaction.reply(`${letter}`);
		 } else if (interaction.options.getSubcommand() === 'integer') {
			const min = interaction.options.getInteger('minimum');
			const max = interaction.options.getInteger('maximum');
			const integer = Math.round(Math.random() * (max - min)) + min;
			await interaction.reply(`${integer}`);
		}
	},
};