const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('random')
		.setDescription('Randomizers')
		.addSubcommand(subcommand =>
			subcommand
				.setName('color')
				.setDescription('Responds with a random color')
				.addBooleanOption(option => option.setName('alpha').setDescription('Choose if you want to include transparency')))
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

			const canvas = Canvas.createCanvas(100, 100);
			const ctx = canvas.getContext('2d');

			const alpha = interaction.options.getBoolean('alpha');
			let HexA;
			let name = 'RGB:';

			const r = Math.round(Math.random() * 255);
			const g = Math.round(Math.random() * 255);
			const b = Math.round(Math.random() * 255);
			let RGB = `rgb(${r}, ${g}, ${b})`

			if (alpha) {
				const a = Math.round(Math.random() * 255);
				HexA = a.toString(16).toUpperCase();
				if (a < 16) {HexA = '0' + HexA}
				RGB = `rgba(${r}, ${g}, ${b}, ${Math.round((a * 1000) / 255) / 1000})`
				name = 'RGBA:';
			}

			let HexR = r.toString(16).toUpperCase();
			let HexG = g.toString(16).toUpperCase();
			let HexB = b.toString(16).toUpperCase();
			if (r < 16) {HexR = '0' + HexR}
			if (g < 16) {HexG = '0' + HexG}
			if (b < 16) {HexB = '0' + HexB}

			
			const HexInt = `0x${HexR}${HexG}${HexB}`
			let Hex;
			let colorLink;

			if (alpha) {
				Hex = `#${HexR}${HexG}${HexB}${HexA}`
				colorLink = `https://htmlcolors.com/color-image/${HexR}${HexG}${HexB}${HexA}.png`
			}
			else {
				Hex = `#${HexR}${HexG}${HexB}`
				colorLink = `https://htmlcolors.com/color-image/${HexR}${HexG}${HexB}.png`
			}

			ctx.fillStyle = `${Hex}`
			ctx.fillRect(0, 0, canvas.width, canvas.height)

			const attachment = new AttachmentBuilder(await canvas.toBuffer('image/png'), { name: `image.png` })
			// interaction.reply({ content: `${Hex}`, files: [attachment] });

			const embed = new EmbedBuilder()
				.setColor(Number(HexInt))
				.setTitle(`Random Color`)
				.addFields(
					{ name: 'HEX:', value: `${Hex}` },
					{ name: `${name}`, value: `${RGB}` },
				)
				.setThumbnail(`attachment://image.png`);

			await interaction.reply({ embeds: [embed], files: [attachment] });
		} else if (interaction.options.getSubcommand() === 'word') {
		const words = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Black", "White", "Gray", "Brown", "Silver", "Teal", "Lime", "Gold", "Bronze", "Open", "Close", "Off", "On", "Naked", "Clothing", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Word", "Nothing", "Everything", "Void", "Abyss", "Mine", "Craft", "Teacher", "Student", "Desk", "Pencil", "Eraser", "Chalk", "Color", "Rainbow", "Person", "People", "You", "I", "A", "Your", "There", "Their", "Year", "Month", "Day", "Hour", "Minute", "Second", "Decade", "Century", "Eon", "Era", "Period", "Point", "Exclaim", "Question", "Run", "Deal", "Drugs", "Alcohol", "Drunk", "Poison", "Bad", "Good", "Great", "Best", "Garbage", "Candle", "Celebrate", "Eat", "Drink", "Sleep", "Repeat", "Game", "Ball", "Cool", "Math", "English", "Spanish", "French", "Supercalifragilisticexpialidocious", "Super", "Fragmentation", "Entitled", "Estate", "In", "It", "At", "Stop", "Go", "Meal", "Food", "Wheel", "Van", "Car", "Truck", "Me", "My", "Mom", "Dad", "Father", "Mother", "Grandfather", "Grandmother", "Time", "Space", "Sun", "Planet", "Earth", "Dwarf", "Moon", "Asteroid", "Octagon", "Hundred", "Square", "Ampersand", "Asterisk", "Sentence", "Paragraph", "Kelp", "Need", "Want", "Lead", "Keep", "Keyboard", "Keys", "Monitor", "Spring", "Computer", "Bread", "Milk", "Mouse", "Cheese", "Eel", "Fish", "Cod", "Salmon", "Tropical", "Storm", "Hurricane", "Tornado", "Lemon", "Earthquake", "Volcano", "Cloud", "Lightning", "Thunder", "Rain", "Snow", "Feeding", "Fell", "Feels", "Dining", "Munch", "Squish", "Landing", "Wrote", "Read", "Meat", "Isometric", "Telecommunications", "Orbit", "Atoms", "Protons", "Electrons", "Neutrons", "Cell", "Nucleus", "Nuclear", "Nuke", "Bomb", "Planes", "Tower", "Triangle", "Circle", "Keen", "Nimble", "Sly", "Efficient", "User", "Comma", "Colon", "Symmetric", "Asexual", "Pansexual", "Heterosexual", "Homosexual", "Bisexual", "Straight", "Gay", "Curve", "Slight", "Light", "Fight", "Night", "Knight", "Kite", "Cough", "Pop", "Corn", "Elbows", "Discord", "Curve", "Supercalifragilisticexpialidocious", "Grass", "Pneumonoultramicroscopicsilicovolcanoconiosis", "Dinosaur", "Macaroni", "Cheese", "Bread", "Food", "Gender", "Omnisexual", "Flag", "Pink", "Pride", "Progress", "Digress", "Deam", "Beacon", "Bacon", "Miner", "Minor", "Major", "Degree", "Scale", "Safe", "Size", "Need", "Keep", "Pan", "Pot", "Calendar", "Bowl", "Cup", "Send", "Mail", "Poop", "Crap", "Owl", "Pee", "Pork", "Beef", "Chicken", "Slice", "Lime", "Lemon", "Orange", "Rain", "Thunder", "Lightning", "Storm", "Trap", "Door", "White", "Transluscent", "Heavy", "Dark", "Lord", "Over", "World", "End", "Finish", "Bucket", "Tropical", "Of", "Ore", "Or", "Oar", "Paddle", "Bat", "Baseball", "Basket", "Football", "Soccer", "Is", "Choice", "Command", "Prompt", "Switch", "Ball", "Lever", "Boil", "Toilet", "Dude", "Dud", "Mud", "Crud", "Sheep", "Horse", "Animalistic", "Essence", "Exhile", "Volunteer", "Host", "Elect", "Electricity", "Power", "Cork", "Fork", "Spoon", "Tree", "Forest", "Bot", "Rude", "Money", "Funny", "Equals", "Rights", "Meat", "Meet", "Repeating", "Slider", "Ice", "Microphone", "Gigantic", "Terrifying", "Perpendicular", "Estate", "Bomb", "Explosive", "Everyone", "Here", "Role", "Rules", "Ping", "Pound", "Sign", "Octothorpe", "Cream", "Piñata", "Pepper", "Candy", "Can", "Dye", "Die", "Hijack", "Typical", "Pick", "Pickaxe", "Sword", "Axe", "Hoe", "Diamond", "Rack", "Golden", "Guild", "Guilded", "Stone", "Rock", "Dirt", "Water", "Magma", "Lava", "Bathe", "Breath", "Breathe", "Bath", "Shower", "Lather", "Leather", "All", "Lavender", "Lavish", "Livid", "Vivid", "Update", "Upgrade", "Downgrade", "Step", "Back", "Foward", "Direct", "Message", "User", "Player", "Prop", "Crop", "Mop", "Top", "Unsteady", "Variable", "Reference", "Options", "Permission", "Allow", "Deny", "Affirmative", "Positive", "Negative", "Coronavirus", "Silence", "Advance", "Additionally", "Prove", "Provoke", "Characters", "Embed", "Edit", "Describe", "Description", "Derive", "Drive", "Save", "Clone", "Delete", "Window", "Apple", "Beat", "Seal", "Seel", "Seek", "Peel", "Lead", "Leader", "Read", "Shear", "Scissors", "Bracket", "Braces", "Parenthesis", "Octopus", "Question", "Understand", "Done", "Almost", "Shoot", "Gun", "Shift", "Capitol", "Sign", "Resign", "Fire", "Sigh", "Lose", "Loose", "Tight", "Statistic", "Fudge", "Pizzaria", "Palace", "Country", "County", "Parish", "Hungry", "Deaming", "Dreaming", "Dream", "Seam", "Seem", "Seen", "Ill", "Kill", "Fill", "Ew", "Ewe", "Mill", "Till", "Like", "Megaphone", "Microphone", "Clothes", "Pajamas", "Dress", "Pants", "Shorts", "Shot", "Head", "Crown", "Never", "Die", "Techno", "Electronic", "Dance", "Music", "Arts", "Reward", "Award", "Random", "Embed", "Bed", "Bedding", "Splash", "Text", "Stein", "Fine", "Sine", "Cosine", "Tangent", "Estates", "Animalistic", "Balistic", "Missile", "Soda", "Pop", "Use", "Redo", "Reuse", "Server", "Serve", "Dice", "Spin", "Spinner", "Cards", "Play", "Playing", "Port", "Portable", "Potty", "Toilet", "Shoot", "Basket", "Bread", "Chips", "Fish", "Fries", "Flags", "Flag", "Chip", "Chore", "Chokes", "Charcoal", "Coals", "Burn", "Fire", "Hell", "Heaven", "Seven", "Mice", "Exists", "Underlined", "Under", "Overrated", "Underestimate", "Response", "Box", "Extremely", "Time", "Timely", "Answer", "Question", "Mark", "Semicolon", "Pings", "Ping", "Parameter", "Meter", "Centimeter", "Deciliter", "Milligram", "Contour", "Paraphrase", "Bracket", "Chapter", "Live", "Delta", "Time", "Diacritic", "Grave", "Mega", "Byte", "Drive", "Hardware", "Firmware", "Software", "Backslash", "Domination", "Communism", "Capitalism", "Socialism", "Regime", "Governmental", "Wing", "False", "Itemized", "Stream", "Death", "Laugh", "Holocaust", "Hexadecimal", "Hyperactive", "Light", "Punk", "Retro", "Historically", "Never", "Least", "Fuzzy", "Static", "Sarcasm", "Sex", "Race", "Gender", "Sexuality", "Meaning", "Meme", "Memo", "Lemur", "Leaf", "Carrot", "Influenza", "Influence", "Joke", "Java", "Job", "Manuscripts", "Collapse", "Soviet", "Social", "Zeal", "Raspberry", "Zany", "Zebra", "Bull", "Slash", "Flash", "Passes", "Through", "Though", "Thing", "Thinly", "Ball", "Little", "Big", "Bite", "Bent", "Lint", "Roll", "Yaw", "Pitch", "Language", "Webpage", "Website", "Comment", "Coma", "Apostrophe", "Adjective", "Propagate", "Populate", "Pool", "Swims", "Palindrome", "Romance", "Germanic", "Brain", "Organ", "Syringe", "Slimy", "Spike", "Spiny", "Table", "Tablet", "Tavern", "Bartender", "Partake", "Argument", "Origin", "Originality", "Fuse", "Muddy", "Feud", "Family", "Friends", "Thrice", "Twice", "Twist", "Once", "Million", "Exponential", "Trips", "Quoted", "Cite", "Coincide", "Coined", "Term", "Tracks", "Picture", "Profile", "Teleprompter", "Television", "Telephone", "Cellphone", "Phone", "Code", "Program", "Calculated", "Calculator", "Emancipate", "Slack", "Slush", "Thumb", "Nail", "Screw", "Hammer", "Drill", "Dull", "Dim", "Doom", "Approaching", "Impending", "An", "And", "Ask", "Pain", "Polo", "Tuxedo", "Shirt", "Jacket", "Coat", "Vest", "Interest", "Suggesting", "Ecstatic", "Meth", "Mole", "Scroll", "Bar", "Function", "Python", "Scratch", "Billiards", "Cue", "Queue", "Quack", "Quality", "Quantitative", "Damage", "Attack", "Laser", "Sounds", "Background", "Foreground", "Foliage", "Sacred", "Stale", "Stall", "Stole", "Smack", "Snack", "Snake", "Sweep", "Dust", "Frogs", "Toadstool", "Fungus", "Toad", "Fool", "For", "Only", "Lone", "Alone", "Apex", "Buck", "Puck", "Hamburger", "Lady", "Bug", "Sting", "String", "Too", "To", "Total", "Vote", "Elections", "Robotic", "Stork", "Stiff", "Sniff", "Node", "Nose", "Mode", "Percent", "Percentage", "Pairing", "Ready", "Auxillary", "Audio", "Video", "Vibrations", "Fix", "Rooster", "Roost", "Hen", "Integer", "Boolean", "Books", "Looks", "Rook", "King", "Queen", "Prince", "Princess", "Bishop", "Pawn", "Firefighter", "Board", "Police", "United", "States", "Republic", "Democracy", "Monarchy", "Oligarchy", "Theocracy", "Troop", "Throb", "Knell", "Kneel", "Knee", "Leg", "Arm", "Servo", "Photographic", "Graphically", "Carefully", "Cracker", "Nut", "Coconut", "Peach", "Pear", "Fruit", "Strawberry", "Melon", "Circular", "Saw", "Blade", "Blaze", "Rot", "Nitrogen", "Oxygen", "Argon", "Xenon", "Yttrium", "Magnesium", "Helium", "Hydrogen", "Uranium", "Plutonium", "Americium", "Iron", "Sodium", "Copper", "Brass", "Cobalt", "Amethyst", "Ruby", "Emerald", "Pearl", "Opal", "Topaz", "Lapis", "Amber", "Sand", "Waves", "Beach", "Shore", "Take", "Attended", "Motor", "Engine", "Groups", "Sheets", "Life", "Lively", "Likely", "Likewise", "Hand", "Foot", "Face", "Value", "Let", "Constant", "Construct", "Critical", "Lunar", "Solar", "Plaque", "Parsec", "Carnival", "Maniac", "Index", "Middle", "Left", "Right", "Center", "Ring", "Pinky", "Toe", "Finger", "Object", "Array", "Arrow", "Hydraulic", "Submarine", "Controller", "Failure", "Success", "Superb", "Stupendous", "Studious", "Splendid", "Stupid", "Dumb", "Stellar", "Nova", "Novel", "Bleed", "Medications", "Render", "Line", "Quadratic", "Parallel", "Ninety", "Goat", "Land", "Laboratory", "Oh", "Zoological", "Zoo", "Cartography", "Oceanographer", "Biology", "Chemist", "Science", "Boot", "Physics", "Astrology", "Astronomy", "Option", "Settings", "Themes", "Plugins", "Beg", "Each", "Blubber", "Rice", "Price", "Privy", "Eggs", "Taco", "Perimeter", "Area", "Volume", "Density", "Multiplicative", "Divisive", "Mass", "Master", "Weight", "Width", "Height", "Length", "Mile", "While", "Whilst", "Dairy", "Lactose", "Supplement", "Sucrose", "Sugar", "Cane", "Dangerously", "Dangerous", "Limestone", "Grind", "Gear", "Cog", "Popcorn", "Tube", "Hub", "Net", "Networking", "Lobby", "Organize", "Organization", "Safety", "Chunk", "Load", "Socket", "Rocket", "Pocket", "Locket", "Lock", "Mock", "Jamboree", "Jelly", "Gelatin", "Jam", "Jack", "Tire", "Start", "Man", "Beetroot", "Ingot", "Segment", "Terminal", "Console", "Coloration", "Magnate", "Billionaire", "Cash", "Cache", "Monetary", "Cookie", "Plate", "Papyrus", "Panting", "Painting", "Paint", "Pail", "Pale", "Pack", "Sack", "Stack", "Block", "Dock", "Station", "Train", "Cart", "Cardboard", "Carbon", "Nugget", "Jewel", "Gem", "Gemstone", "Onyx", "Epidemic", "Pandemic", "Sickness", "Disease", "Congress", "Revelation", "Revolution", "Rebellion", "We", "Hold", "These", "Truths", "Be", "Self", "Evident", "That", "Men", "Are", "Created", "Equal", "Women", "Binary", "Ternary", "Tertiary", "Decimal", "Donut", "Droop", "Boop", "Snoop", "Snooze", "Sluggish", "Weak", "Annoying", "Wimpy", "Kid", "Child", "Children", "Teenager", "Adult", "Odd", "Even", "Barn", "Farm", "House", "Home", "Farmland", "Fertile", "Cut", "Paste", "Copy", "Undo", "Melt", "Mold", "Gild", "Pillow", "Pill", "Blanket", "Blank", "Topography", "Cleric", "Church", "Temple", "Pyramid", "Cube", "Cubic", "Tesseract", "Quartic", "Quantity", "Quality", "Quintuple", "Cake", "Pie", "Pi", "Phi", "Leak", "Loop", "Awesome", "Creep", "Crude", "Oil", "Solidarity", "Solitude", "Sham", "Scamp", "Stamp", "Stool", "Still", "Stick", "Tool", "Tomb", "Bombard", "Wrong", "Correct", "Incorrect", "Sound", "Song", "Dunce", "Deuce", "Lob", "Lobe", "Lobster", "Whale", "Wail", "Shake", "Shale", "Tic", "Tick", "Fail", "Slate", "Spank", "Spatula", "Osmium", "Opium", "Opioid", "Poppy", "Dandelion", "Flower", "Flour", "Bake", "Baker", "Anthropologist", "Dentist", "Dentistry", "Biologist", "Chemistry", "Story", "Coffee", "Genuine", "Guarantee", "Sure", "Yes", "No", "Nope", "Wonderful", "Neat", "Nice", "Mathematics", "Laptop", "What", "Who", "Where", "Why", "How", "Stoop", "Slunk", "Slink", "Slip", "Double", "Single", "Triple", "Trite", "Quadruple", "Tetrahedron", "Click", "Turn", "Trunk", "Stump", "Terror", "Terrorist", "Tourist", "Facet", "Multifaceted", "Facetious", "Mesa", "Desert", "Dessert", "Subtraction", "Zero", "Twenty", "Pilots", "Pilot", "Tin", "Tungsten", "Quart", "Hex", "Vex", "Xylophone", "Zoology", "Zoologist", "Foxtrot", "Fox", "Dog", "Cat", "Feline", "Male", "Female", "Decagon", "Sphere", "Spherical", "Pentagon", "Hexagon", "Heptagon", "Cone", "Prism", "Dodecahedron", "Icosahedron", "Squid", "Squirrel", "Cash", "Quote", "Marry", "Merry", "Marriage", "Funeral", "Diet", "Slight", "Slide", "Peace", "War", "Par", "Per", "Peek", "Leak", "Protractor", "Compass", "Computational", "Devious", "Divine", "Magenta", "Delectable", "Detect", "Adjacent", "Near", "Steer", "Sheer", "Cheer", "Illness", "Disorder", "Autism", "Attention", "Deficit", "Focus", "Hyper", "Commence", "Begin", "Terminate", "Alienate", "Alien", "Alliance", "Alter", "Altar", "Monster", "Lying", "Coin", "Stock", "Stalk", "Asparagus", "Coincidence", "Independence", "Dependence", "Deprecated", "Deprecate", "Depreciate", "Appreciate", "Associate", "Association", "Company", "Business", "Bust", "Busy", "Large", "Giant", "Huge", "Enormous", "Enamoured", "Bay", "Baby", "Infant", "Infantile", "Fertility", "Okay", "Sticky", "Angle", "Angel", "Bisect", "Appendix", "Spleen", "Sheen", "Clean", "Clear", "Staple", "Stapler", "Stable", "Stake", "Suggestion", "Intelligent", "Intelligence", "Important", "Education", "Elementary", "Inferno", "Cyclone", "Typhoon", "Flames", "Ablaze", "Trial", "Trolley", "Jury", "Court", "Spaghetti", "Pasta", "Null", "Blink", "Cryptography", "Encrypt", "Decrypt", "Decipher", "Cipher", "Base", "Number", "Float", "Long", "Short", "Integral", "Derivative", "Calculus", "Trigonometry", "Geometry", "Cape", "Lie", "Lies", "Pig", "Swine", "Gamma", "Lambda", "Eta", "Theta", "Omega", "Xi", "Chi", "Greek", "Mexican", "Russian", "Peruvian", "Brazilian", "Greece", "Grease", "Mexico", "Russia", "England", "Spain", "Peru", "Brazil", "Italian", "Italy", "Ecuador", "Cuban", "Cuba", "Haiti", "Jamaican", "Jamaica", "Editor", "Editorial", "Equate", "Equation", "Equatorial", "Equator", "Savior", "Salvation", "Refuge", "Refugee", "Asylum", "Institution", "Institutional", "Instate", "Lamb", "Veal", "Feel", "Feed", "Calf", "Kitty", "Case", "Arcade", "Party", "Religion", "Atheist", "Christian", "Jewish", "Hindi", "Christianity", "Judaism", "Hinduism", "Arab", "Arabic", "Islam", "Muslim", "Iran", "Iraq", "Turkey", "Qatar", "Slavery", "Slaves", "Own", "Owner", "Dinner", "Lunch", "Breakfast", "Break", "Fast", "Quick", "Quiet", "Quite", "Inquiry", "Exquisite", "Armor", "Parkour", "Lifestyle", "Style", "Randomization", "Generate", "Generation", "Generator", "Energy", "Speed", "Galaxy", "Note", "Ultra", "Age", "Protection", "Defense", "Fence", "Offense", "Fortitude", "Strength", "Forte", "Fort", "Castle", "Fortress", "Place", "Location", "Direction", "Instruction", "Infrastructure", "Structure", "Creation", "Arachnophobia", "Phobia", "Principle", "Principal", "Principality", "Capital", "Icy", "Enlarge", "Increase", "Decrease", "Hypothetical", "Hypothesis", "Hypothermia", "Hyperthermia", "Thermal", "Inflate", "Inflation", "Deflate", "Deflation", "Stagnation", "Economy", "Economist", "Stocks", "Market", "Trade", "Enchant", "Chime", "Chin", "Charm", "Sharp", "Gist", "Get", "Gym", "Gymnasium", "Truant", "Truancy", "Shrink", "Grow", "Crowds", "Cloak", "Hide", "Encase", "Circumvent", "Circumnavigate", "Radius", "Radii", "Diameter", "Diametric", "Metric", "Orthographic", "Area", "Circumference", "Dimension", "Inter", "Enter", "Intend", "Intention", "Knife", "Gnome", "Gnat", "Alligator", "Crocodile", "Intense", "Tense", "Tend", "Lend", "Lease", "Worst", "Worse", "Worsen", "Better", "Ban", "Kick", "Banner", "Band", "Adieu", "Ado", "Heliocentric", "Iota", "Upsilon", "Epsilon", "Sigma", "Notation", "Sum", "Summation", "Just", "Jobless", "Not", "Knot", "Quarter", "Quaint", "Queer", "Tan", "Tape", "Union", "Vital", "Vitality", "Xenophobia", "Ytterbium", "Zealous", "Zesty"]

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