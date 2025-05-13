// == Current Data == //
let simulatorGlobals = {
	castSize: 0,
	fullCast: [],
	currentCast: [],
	eliminatedCast: [],
	topQueens: [],
	topAllStars: [],
	safeQueens: [],
	bottomQueens: [],
	doubleShantay: false,
	doubleSashay: false,
	episodeCount: 0,
	episodeList: [],
	runwayEpisode: false,
	winner: undefined,
	format: "Regular",
	finaleSize: 3,
	isAllStars: false
};

// == End of Class == //

// == Configuration and Utility Fuctions == //
function selectFormat(format) {
    simulatorGlobals.format = format;
    simulatorGlobals.isAllStars = (format === "AllStars");
   
}
function randomNumber(min, max) {
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
}
function sortPerformances(cast) {
    cast.sort(function(a, b) {
        return a.performanceScore - b.performanceScore;
    });
}
function sortRunwayPerformances(cast) {
    cast.sort(function(a, b) {
        return a.runwayPerformanceScore - b.runwayPerformanceScore;
    });
}
function shuffle(array) {
    let currentIndex = array.length, randomIndex, temp;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}
// == End of Class == //

// == All of the classes == //
class Challenge {
	constructor() {
		this.descriptionElement = document.querySelector("p#Description");
	}

	generateDescription() {

	}

	rankPerformances() {

	}
};

class MiniChallenge extends Challenge {
	generateDescription() {
		const description = document.querySelector("p#Description");
		const desc1 = [
		  "make wigs with",
		  "do a quiz about",
		  "make nails with",
		  "invent a competition about",
		  "lipsync to a song about",
		  "make a song about"
		];

		const desc2 = [
		  " the pit crew",
		  " a partner",
		  " noodles"
		];

		if (simulatorGlobals.castSize == 8 && simulatorGlobals.currentCast.length == 8) {
			description.innerHTML = "The library is open! In today's mini-challenge, the queens will read eachother!";
		} else if (simulatorGlobals.castSize != 5 && simulatorGlobals.currentCast.length == 5) {
			description.innerHTML = "Bring in the puppets! The queens will be using puppets in order to parody eachother!";
		} else {
			description.innerHTML = "In today's mini-challenge, the queens will " + desc1[randomNumber(0, desc1.length - 1)] + desc2[randomNumber(0, desc2.length - 1)];
		}
	}
	rankPerformances() {
		const imageResult = document.querySelector("img#MCWinner");
		const result = document.querySelector("b#MCWinner");
		const winner = simulatorGlobals.currentCast[randomNumber(0, simulatorGlobals.currentCast.length - 1)];
		result.innerHTML = winner.getName() + " won the mini-challenge!";
		imageResult.src = winner.image;
	}
};

class ActingChallenge extends Challenge {
	generateDescription() {
		const desc1 = [
			"theater piece about ",
			"a parody film about "
		];
		const desc2 = [
			"crime.",
			"idk something."
		];
		this.descriptionElement.innerHTML = "The queens will act in a " + desc1[randomNumber(0, desc1.length - 1)] + desc2[randomNumber(0, desc2.length - 1)];
	}

	rankPerformances() {
		for (let i = 0; i < simulatorGlobals.currentCast.length; i++) {
			simulatorGlobals.currentCast[i].getActing();
		}
		sortPerformances(simulatorGlobals.currentCast);
	}
};

class ComedyChallenge extends Challenge { 
	generateDescription() {
		const desc1 = [
			"a comedy routine about ",
			"a roast about "
		];
		const desc2 = [
			"the queens.",
			"the judges.",
			"the season.",
			"love.",
			"sex."
		]
		this.descriptionElement.innerHTML = "The queens will participate in " + desc1[randomNumber(0, desc1.length - 1)] + desc2[randomNumber(0, desc2.length - 1)];
	}

	rankPerformances() {
		for (let i = 0; i < simulatorGlobals.currentCast.length; i++) {
			simulatorGlobals.currentCast[i].getComedy();
		}
		sortPerformances(simulatorGlobals.currentCast);
	}
}

class DanceChallenge extends Challenge { 
	generateDescription() {
		const desc1 = [
			"dance number about ",
			"a dance routine about ",
			"idk about "
		];
		const desc2 = [
			"the history of drag.",
			"the history of the world.",
			"the history of disco.",
			"RuPaul's biography."
		]
		this.descriptionElement.innerHTML = "The queens will participate in " + desc1[randomNumber(0, desc1.length - 1)] + desc2[randomNumber(0, desc2.length - 1)];
	}

	rankPerformances() {
		for (let i = 0; i < simulatorGlobals.currentCast.length; i++) {
			simulatorGlobals.currentCast[i].getDance();
		}
		sortPerformances(simulatorGlobals.currentCast);
	}
}

class DesignChallenge extends Challenge { 
	generateDescription() {
		const desc1 = [
			"trash. ",
			"random materials.",
			"condoms.",
			"random items."
		];
		this.descriptionElement.innerHTML = "The queens will participate in " + desc1[randomNumber(0, desc1.length - 1)];
	}

	rankPerformances() {
		for (let i = 0; i < simulatorGlobals.currentCast.length; i++) {
			simulatorGlobals.currentCast[i].getDesign();
		}
		sortPerformances(simulatorGlobals.currentCast);
	}
}

class ImprovChallenge extends Challenge { 
	generateDescription() {
		const desc1 = [
			"political satire.",
			"celebrity interview.",
			"political debate."
		];
		this.descriptionElement.innerHTML = "The queens will improvise in " + desc1[randomNumber(0, desc1.length - 1)];
	}

	rankPerformances() {
		for (let i = 0; i < simulatorGlobals.currentCast.length; i++) {
			simulatorGlobals.currentCast[i].getImprov();
		}
		sortPerformances(simulatorGlobals.currentCast);
	}
}

class BallChallenge extends Challenge { 
	generateDescription() {
		const desc0 = [
			"Balls to the walls",
			"Cosmic Realness",
			"Crystalized Eleganza",
			"AI"
		]
		const desc1 = [
			"Executive Realness,",
			"Party night,",
			"Red Carpet,",
			"Spring Fling,",
			"Winter Wonderland,",
			"Summer Solstice,"
		];
		const desc2 = [
			"Antinque,",
			"Futuristic,",
			"Retro,",
			"Modern,",
			"Classic,",
			"Vintage,"
		];
		const desc3 = [
			"Ice.",
			"Fire.",
			"Water.",
			"Earth.",
			"Air."
		]
		this.descriptionElement.innerHTML = "Tonight we are having the... " + desc0[randomNumber(0, desc0.length - 1)] + " Ball! The queens will bring three looks to the runway! Themes are:" + desc1[randomNumber(0, desc1.length - 1)] + desc2[randomNumber(0, desc2.length - 1)] + desc3[randomNumber(0, desc3.length - 1)];
	}

	rankPerformances() {
		for (let i = 0; i < simulatorGlobals.currentCast.length; i++) {
			simulatorGlobals.currentCast[i].getBall();
		}
		sortPerformances(simulatorGlobals.currentCast);
	}
}

class Queen {
	constructor(name, acting, comedy, dance, design, improv, runway, lipsync, image = "placeholder") {
		this.trackRecord = [];
		//== Scores & Performances ==//
		this.performanceScore = 0;
		this.runwayPerformanceScore = 0;
		this.lipsyncPerformanceScore = 0;
		this.finalePerformanceScore = 0;
		//== Season Values ==//
		this.winCount = 0;
		this.bottomCount = 0;
		this.favoritism = 0;
		this.unfavoritism = 0;
		this.lipstickChoice = undefined;
		this.miniChallengeWinsEpisode = [];
		this.chocolateBar = false;
		//== General Information ==//
		this._name = name;
		this._acting = acting;
		this._comedy = comedy;
		this._dance = dance;
		this._design = design; 
		this._improv = improv;
		this._runway = runway;
		this._lipsync = lipsync;
		this.image = `https://myrainboww.github.io/Drag-Race-Simulator/image/queens/${image}.webp`;
	}
	_calculateScores(min, max, stat = 0) {
		const score = randomNumber(min, max);
		return score - stat;
	}

	getName() {
		return this._name;
	}
	// > Regulars < //
	getActing() {
		this.performanceScore = this._calculateScores(15, 35, this._acting);
	}
	getComedy() {
		this.performanceScore = this._calculateScores(15, 35, this._comedy);
	}
	getDance() {
		this.performanceScore = this._calculateScores(15, 35, this._dance);
	}
	getDesign() {
		this.performanceScore = this._calculateScores(15, 35, this._design);
	}
	getImprov() {
		this.performanceScore = this._calculateScores(15, 35, this._improv);
	}
	getRunway() {
		this.runwayPerformanceScore = this._calculateScores(15, 35, this._runway);
	}
	// > Bonus < //
	getSnatch() {
		this.performanceScore = this._calculateScores(25, 45, this._acting + this._comedy);
	}
	getRusical() {
		this.performanceScore = this._calculateScores(35, 55, this._dance + this._lipsync + this.acting);
	}
	getRumix() {
		this.performanceScore = this._calculateScores(35, 55, this._dance + this._lipsync + this._improv);
	}
	getTalentShow() {
		this.performanceScore = this._calculateScores(15, 35, randomNumber(1, 35));
	}
	getMarketing() {
		this.performanceScore = this._calculateScores(25, 45, this._comedy + this._acting);
	}
	getBall() {
		this.performanceScore = this._calculateScores(25, 45, this._design + this._runway);
	}
	getLipsync() {
		this.lipsyncPerformanceScore = this._calculateScores(0, 40, this._lipsync);
	}
	getFinalePerformance() {
		this.finalePerformanceScore = 
			this._dance +
			this._runway + 
			this._lipsync;
		
		this.finalePerformanceScore += (this.winCount * 3);
		
		this.finalePerformanceScore += randomNumber(0, 10);
		
		this.finalePerformanceScore = Math.min(100, Math.max(0, this.finalePerformanceScore));
	}
}

class Scene {
	constructor(_wrapper) {
		this._wrapper = document.querySelector("div#wrapper");
	}

	clean() {
		this._wrapper.innerHTML = '';
	}
	changeRoom(room) {
		if (room == "untucked") {
			document.body.style.backgroundImage = "url('images/untuckedbg.webp')";
		} else if (room == "werkroom") {
			document.body.style.backgroundImage = "url('images/werkroombg.webp')";
		} else if (room == "mainstage") {
			document.body.style.backgroundImage = "url('images/stagebg.webp')";
		} else if (room == "mainstagelipsync") {
			document.body.style.backgroundImage = "url('images/stagelipsyncbg.webp')";
		}
	}
	createHeader(text) {
		const header = document.createElement("h1");
		header.innerHTML = text;
		this._wrapper.appendChild(header);
	}
	createBigText(text) {
		const big = document.createElement("big");
		big.innerHTML = text;
		this._wrapper.appendChild(big);
	}
	createParagraph(text, id = 0) {
		const p = document.createElement("p");
		p.innerHTML = text;
		p.setAttribute("id", id);
		this._wrapper.appendChild(p);
	}
	createBold(text, id = 0) {
		const p = document.createElement("p");
		const bold = document.createElement("b");
		bold.innerHTML = text;
		bold.setAttribute("id", id);
		p.appendChild(bold);
		this._wrapper.appendChild(p);
	}
	createImage(src, color = "#ECA9B1", id = 0) {
		const img = document.createElement("img");
		img.src = src;
		img.setAttribute("id", id);
		img.setAttribute("style", `outline-color: ${color}; width: 85px; height: 85px;`);
		this._wrapper.appendChild(img);
	}
	createButton(text, method, id = 0) {
		const button = document.createElement("button");
		button.innerHTML = text;
		button.setAttribute("onclick", method);
		button.setAttribute("id", id);
		this._wrapper.appendChild(button);
	}
	createHorizontalLine() {
		const hr = document.createElement("hr");
		this._wrapper.appendChild(hr);
	}
}
// == End of Class == //

// == All Queens and Seasons ==
const akashia = new Queen("Akashia", 3, 2, 7, 3, 2, 7, 11, "Akashia");
const bebe = new Queen("BeBe Zahara Benet", 6, 7, 8, 12, 6, 10, 9, "BeBe");
const jade = new Queen("Jade Sotomayor", 3, 3, 8, 7, 3, 7, 7, "Jade");
const ninaf = new Queen("Nina Flowers", 7, 5, 5, 11, 6, 10, 6, "NinaFlowers");
const ongina = new Queen("Ongina", 9, 8, 7, 9, 10, 9, 8, "Ongina");
const rebecca = new Queen("Rebecca Glasscock", 3, 3, 6, 4, 2, 6, 5, "Rebecca");
const shannel = new Queen("Shannel", 7, 8, 7, 9, 9, 13, 10, "Shannel");
const tammie = new Queen("Tammie Brown", 6, 7, 5, 7, 6, 7, 6, "Tammie");
const victoria = new Queen("Victoria 'Porkchop' Parker", 3, 6, 4, 3, 6, 5, 4, "Victoria");

const jessica = new Queen("Jessica Wild", 9, 8, 10, 11, 8, 9, 11, "Jessica");
const jujubee = new Queen("Jujubee", 9, 11, 7, 8, 12, 6, 12, "Jujubee");
const morgan = new Queen("Morgan McMichaels", 6, 6, 10, 9, 5, 10, 10, "Morgan");
const mystique = new Queen("Mystique Summers", 4, 5, 3, 3, 3, 5, 6, "Mystique");
const nicole = new Queen("Nicole Paige Brooks", 4, 4, 4, 6, 4, 7, 6, "Nicole");
const pandora = new Queen("Pandora Boxx", 12, 11, 6, 8, 10, 8, 7, "Pandora");
const raven = new Queen("Raven", 5, 8, 9, 10, 5, 8, 11, "Raven");
const sahara = new Queen("Sahara Davenport", 6, 6, 10, 4, 6, 7, 10, "Sahara");
const shangela = new Queen("Shangela", 14, 13, 10, 3, 9, 9, 12, "Shangela");
const sonique = new Queen("Kylie Sonique Love", 11, 9, 10, 9, 8, 11, 11, "Kylie");
const tatianna = new Queen("Tatianna", 8, 11, 8, 8, 10, 8, 10, "Tatianna");
const tyra = new Queen("King Tyra", 11, 7, 8, 11, 8, 9, 10, "Tyra");

const alexis = new Queen("Alexis Mateo", 14, 12, 9, 7, 10, 8, 12, "Alexis");
const carmen = new Queen("Carmen Carrera", 3, 8, 6, 4, 3, 7, 7, "Carmen");
const delta = new Queen("Delta Work", 4, 6, 5, 5, 5, 7, 7, "Delta");
const india = new Queen("India Ferrah", 6, 4, 8, 6, 3, 10, 9, "India");
const manila = new Queen("Manila Luzon", 12, 11, 7, 14, 10, 13, 11, "Manila");
const mariah = new Queen("Mariah Paris Balenciaga", 6, 4, 7, 8, 4, 9, 8, "Mariah");
const mimi = new Queen("Mimi Imfurst", 11, 6, 6, 10, 7, 8, 6, "Mimi");
const phoenix = new Queen("Phoenix", 3, 3, 6, 5, 3, 5, 4, "Phoenix");
const raja = new Queen("Raja", 11, 13, 6, 14, 12, 14, 9, "Raja");
const stacey = new Queen("Stacy Layne Matthews", 6, 7, 5, 4, 10, 5, 6, "Stacy");
const venus = new Queen("Venus D-Lite", 4, 5, 8, 2, 3, 5, 2, "Venus");
const yara = new Queen("Yara Sofia", 11, 9, 9, 13, 7, 10, 8, "Yara");

const alisa = new Queen("Alisa Summers", 4, 4, 5, 2, 3, 5, 4, "Alisa");
const chad = new Queen("Chad Michaels", 11, 10, 8, 9, 12, 10, 8, "Chad");
const dida = new Queen("Dida Ritz", 8, 7, 8, 5, 7, 7, 12, "Dida");
const jiggly = new Queen("Jiggly Caliente", 4, 6, 9, 4, 4, 7, 10, "Jiggly");
const kenya = new Queen("Kenya Olivera", 9, 6, 6, 6, 8, 7, 8, "Kenya");
const leshauwn = new Queen("Lashauwn Beyond", 4, 4, 6, 11, 5, 7, 7, "Lashauwn");
const latrice = new Queen("Latrice Royale", 11, 8, 9, 8, 7, 9, 13, "Latrice");
const madame = new Queen("Madame LaQueer", 4, 7, 6, 5, 9, 7, 6, "Madame");
const milan = new Queen("Milan", 4, 5, 9, 7, 5, 8, 10, "Milan");
const phiphi = new Queen("Jaremi Carey", 13, 9, 8, 10, 10, 10, 8, "PhiPhi");
const sharon = new Queen("Sharon Needles", 12, 12, 8, 12, 11, 10, 8, "SharonNeedles");
const princess = new Queen("The Princess", 4, 4, 5, 7, 4, 7, 7, "Princess");
const willam = new Queen("Willam", 10, 8, 7, 10, 10, 9, 8, "Willam");

const alaska = new Queen("Alaska", 15, 14, 7, 8, 14, 10, 11, "Alaska");
const alyssa = new Queen("Alyssa Edwards", 4, 6, 15, 6, 10, 9, 12, "Alyssa");
const coco = new Queen("Coco Montrese", 10, 10, 11, 9, 7, 9, 15, "Coco");
const detox = new Queen("Detox", 10, 9, 9, 9, 8, 12, 11, "Detox");
const honey = new Queen("Honey Mahogany", 10, 3, 3, 6, 6, 8, 4, "Honey");
const ivy = new Queen("Ivy Winters", 11, 4, 8, 12, 7, 10, 7, "Ivy");
const jadejolie = new Queen("Jade Jolie", 5, 7, 8, 7, 8, 7, 8, "JadeJ");
const jinkx = new Queen("Jinkx Monsoon", 15, 15, 9, 8, 15, 9, 8, "Jinkx");
const lineysha = new Queen("Lineysha Sparx", 10, 4, 7, 11, 5, 9, 8, "Lineysha");
const monica = new Queen("Monica Beverly Hillz", 4, 4, 6, 6, 4, 9, 8, "Monica");
const penny = new Queen("Penny Tration", 4, 5, 4, 5, 5, 5, 4, "Penny");
const roxxxy = new Queen("Roxxxy Andrews", 8, 9, 7, 13, 8, 11, 15, "Roxxxy");
const serena = new Queen("Serena ChaCha", 3, 3, 7, 4, 5, 5, 8, "Serena");
const vivienne = new Queen("Vivienne Pinay", 7, 3, 4, 5, 3, 6, 4, "Vivienne");

const adore = new Queen("Adore Delano", 9, 11, 9, 6, 9, 8, 11, "Adore");
const april = new Queen("April Carrión", 5, 5, 6, 9, 5, 9, 8, "April");
const bendelacreme = new Queen("BenDeLaCreme", 12, 12, 11, 10, 15, 10, 9, "BenDeLaCreme");
const bianca = new Queen("Bianca Del Rio", 11, 15, 7, 13, 15, 10, 5, "Bianca");
const courtney = new Queen("Courtney Act", 11, 8, 10, 10, 10, 12, 9, "Courtney");
const darienne = new Queen("Darienne Lake", 10, 8, 6, 5, 9, 9, 13, "Darienne");
const gia = new Queen("Gia Gunn", 10, 4, 8, 8, 4, 8, 9, "Gia");
const joslyn = new Queen("Joslyn Fox", 6, 7, 8, 6, 8, 8, 11, "Joslyn");
const kelly = new Queen("Kelly Mantle", 6, 6, 5, 5, 4, 7, 4, "Kellu");
const laganja = new Queen("Laganja Estranja", 9, 5, 14, 8, 6, 10, 15, "Laganja");
const magnolia = new Queen("Magnolia Crawford", 4, 5, 6, 4, 5, 7, 4, "Magnolia");
const milk = new Queen("Milk", 6, 6, 7, 8, 8, 7, 7, "Milk");
const trinityk = new Queen("Trinity K. Bonet", 9, 9, 13, 12, 4, 10, 15, "TrinityKB");
const vivacious = new Queen("Vivacious", 4, 5, 5, 4, 4, 7, 7, "Vivacious");

const ginger = new Queen("Ginger Minj", 14, 12, 8, 9, 15, 7, 12, "Ginger");
const jaidynn = new Queen("Jaidynn Diore Fierce", 9, 7, 8, 6, 6, 7, 11, "Jaidynn");
const jasmine = new Queen("Jasmine Masters", 3, 4, 6, 5, 2, 7, 6, "Jasmine");
const kandy = new Queen("Kandy Ho", 4, 4, 7, 5, 4, 7, 10, "KandyH");
const katya = new Queen("Katya", 9, 12, 9, 7, 12, 10, 10, "Katya");
const kennedy = new Queen("Kennedy Davenport", 9, 8, 10, 8, 11, 10, 14, "Kennedy");
const max = new Queen("Max", 10, 7, 5, 8, 4, 8, 5, "Max");
const fame = new Queen("Miss Fame", 8, 4, 5, 11, 3, 10, 5, "MissFame");
const kasha = new Queen("Mrs. Kasha Davis", 11, 8, 10, 7, 6, 9, 7, "Kasha");
const pearl = new Queen("Pearl", 7, 10, 8, 9, 10, 9, 5, "Pearl");
const sashab = new Queen("Frisbee Jenkins", 6, 6, 4, 4, 6, 6, 4, "SashaB");
const tempest = new Queen("Tempest DuJour", 6, 6, 5, 3, 6, 7, 4, "Tempest");
const trixie = new Queen("Trixie Mattel", 13, 10, 6, 10, 11, 10, 5, "Trixie");
const violet = new Queen("Violet Chachki", 6, 7, 8, 15, 8, 13, 8, "Violet");

const acid = new Queen("Acid Betty", 9, 4, 7, 10, 5, 11, 7, "Acid");
const bob = new Queen("Bob The Drag Queen", 15, 15, 8, 9, 15, 8, 12, "Bob");
const chichi = new Queen("Chi Chi DeVayne", 8, 4, 13, 8, 6, 8, 13, "ChiChi");
const cynthia = new Queen("Cynthia Lee Fontaine", 4, 4, 7, 6, 4, 7, 6, "Cynthia");
const dax = new Queen("Dax ExclamationPoint", 5, 6, 6, 5, 6, 5, 4, "Dax");
const derrick = new Queen("Derrick Barry", 7, 7, 8, 8, 9, 7, 8, "Derrick");
const kim = new Queen("Kim Chi", 10, 7, 4, 15, 8, 13, 4, "Kim");
const laila = new Queen("Laila McQueen", 6, 6, 4, 7, 6, 8, 7, "Laila");
const naomi = new Queen("Naomi Smalls", 9, 7, 10, 14, 10, 12, 11, "Naomi");
const naysha = new Queen("Naysha Lopez", 7, 5, 7, 5, 4, 10, 7, "Naysha");
const robbie = new Queen("Robbie Turner", 4, 5, 6, 4, 3, 6, 6, "Robbie");
const thorgy = new Queen("Thorgy Thor", 14, 9, 6, 9, 13, 9, 8, "Thorgy");

const aja = new Queen("Aja", 4, 8, 12, 11, 9, 10, 11, "Aja");
const alexism = new Queen("Alexis Michelle", 8, 8, 11, 10, 13, 10, 10, "AlexisM");
const charlie = new Queen("Charlie Hides", 10, 6, 5, 7, 4, 9, 2, "Charlie");
const eureka = new Queen("Eureka!", 9, 11, 8, 10, 13, 10, 12, "Eureka");
const farrah = new Queen("Farrah Moan", 9, 4, 7, 3, 6, 8, 7, "Farrah");
const jaymes = new Queen("Jaymes Mansfield", 8, 9, 5, 9, 9, 10, 7, "Jaymes");
const kimora = new Queen("Kimora Blac", 5, 5, 4, 6, 5, 8, 7, "Kimora");
const ninab = new Queen("Nina Bo'Nina Brown", 4, 8, 10, 9, 10, 10, 11, "NinaBB");
const peppermint = new Queen("Peppermint", 11, 9, 10, 9, 4, 7, 13, "Peppermint");
const sasha = new Queen("Sasha Velour", 9, 10, 8, 10, 11, 13, 11, "Sasha");
const shea = new Queen("Shea Couleé", 11, 12, 15, 12, 11, 15, 15, "Shea");
const trinity = new Queen("Trinity The Tuck", 13, 11, 9, 15, 10, 13, 11, "TrinityTT");
const valentina = new Queen("Valentina", 11, 7, 10, 9, 9, 9, 10, "Valentina");

const aquaria = new Queen("Aquaria", 6, 11, 8, 15, 12, 14, 11, "Aquaria");
const asia = new Queen("Asia O'Hara", 11, 9, 6, 6, 7, 9, 9, "Asia");
const blair = new Queen("Blair St. Clair", 9, 8, 6, 10, 8, 8, 7, "Blair");
const dusty = new Queen("Dusty Ray Bottoms", 8, 8, 6, 7, 6, 7, 6, "Dusty");
const kalorie = new Queen("Kalorie K. Williams", 6, 6, 6, 5, 7, 7, 8, "Kalorie");
const kameron = new Queen("Kameron Michaels", 5, 8, 14, 10, 8, 8, 15, "Kameron");
const mayhem = new Queen("Mayhem Miller", 4, 8, 9, 13, 7, 9, 10, "Mayhem");
const miz = new Queen("Miz Cracker", 13, 11, 5, 12, 15, 9, 8, "Miz");
const monet = new Queen("Monét X Change", 11, 11, 14, 9, 10, 10, 15, "Monet");
const monique = new Queen("Mo Heart", 12, 8, 6, 10, 13, 12, 10, "Monique");
const vanessa = new Queen("Vanessa Vanjie", 9, 7, 13, 8, 9, 12, 11, "Vanjie");
const vixen = new Queen("The Vixen", 5, 4, 12, 9, 3, 8, 12, "Vixen");
const yuhua = new Queen("Yuhua Hamasaki", 4, 4, 6, 9, 6, 7, 7, "Yuhua");

const akeria = new Queen("A'keria C. Davenport", 11, 9, 11, 8, 10, 13, 10, "Akeria");
const ariel = new Queen("Ariel Versace", 8, 6, 8, 5, 8, 8, 8, "Ariel");
const brooke = new Queen("Brooke Lynn Hytes", 8, 8, 13, 12, 8, 10, 13, "Brooke");
const honeyd = new Queen("Honey Davenport", 4, 6, 5, 7, 4, 9, 4, "HoneyD");
const kahanna = new Queen("Kahanna Montrese", 6, 6, 12, 8, 6, 13, 11, "Kahanna");
const mercedes = new Queen("Mercedes Iman Diamond", 4, 6, 4, 6, 6, 8, 8, "Mercedes");
const ninaw = new Queen("Nina West", 14, 11, 7, 9, 11, 9, 6, "NinaW");
const plastique = new Queen("Plastique Tiara", 11, 10, 10, 15, 8, 15, 9, "Plastique");
const rajah = new Queen("Ra'Jah O'Hara", 8, 8, 11, 12, 9, 12, 13, "Rajah");
const scarlet = new Queen("Scarlet Envy", 13, 9, 6, 13, 9, 11, 8, "Scarlet");
const shuga = new Queen("Shuga Cain", 10, 9, 7, 6, 7, 10, 7, "Shuga");
const silky = new Queen("Silky Nutmeg Ganache", 10, 10, 9, 8, 10, 10, 12, "Silky");
const soju = new Queen("Soju", 4, 4, 4, 4, 4, 4, 4, "Soju");
const yvie = new Queen("Yvie Oddly", 12, 7, 13, 12, 9, 12, 15, "Yvie");

const aiden = new Queen("Aiden Zhane", 9, 3, 6, 4, 3, 6, 6, "Aiden");
const brita = new Queen("Brita", 7, 8, 7, 4, 6, 8, 11, "Brita");
const crystal = new Queen("Crystal Methyd", 6, 8, 8, 9, 8, 12, 6, "CrystalM");
const dahlia = new Queen("Dahlia Sin", 4, 4, 6, 5, 5, 10, 4, "Dahlia");
const gigi = new Queen("Gigi Goode", 10, 11, 11, 13, 9, 12, 8, "Gigi");
const heidi = new Queen("Heidi N Closet", 9, 9, 11, 9, 12, 10, 13, "Heidi");
const jackie = new Queen("Jackie Cox", 11, 12, 6, 6, 13, 9, 11, "Jackie");
const jaida = new Queen("Jaida Essence Hall", 8, 5, 10, 15, 8, 13, 12, "Jaida");
const jan = new Queen("Jan", 8, 4, 12, 9, 5, 10, 9, "Jan");
const nicky = new Queen("Nicky Doll", 4, 4, 5, 12, 3, 11, 5, "Nicky");
const rock = new Queen("Rock M. Sakura", 6, 6, 6, 4, 8, 8, 7, "Rock");
const sherry = new Queen("Sherry Pie", 9, 8, 9, 8, 10, 11, 8, "SherryPie");
const widow = new Queen("Widow Von'Du", 11, 7, 13, 8, 11, 10, 15, "Widow");

const denali = new Queen("Denali", 4, 8, 14, 9, 10, 11, 13, "Denali");
const elliott = new Queen("Elliott With 2 Ts", 5, 5, 12, 9, 3, 8, 11, "Elliott");
const mik = new Queen("Gottmik", 9, 11, 7, 14, 14, 15, 9, "Gottmik");
const joey = new Queen("Joey Jay", 6, 7, 6, 5, 5, 7, 7, "Joey");
const kahmora = new Queen("Kahmora Hall", 3, 4, 3, 5, 4, 12, 4, "Kahmora");
const kandym = new Queen("Kandy Muse", 11, 10, 10, 7, 8, 10, 14, "KandyM");
const lala = new Queen("LaLa Ri", 6, 8, 13, 7, 10, 9, 14, "LaLa");
const olivia = new Queen("Olivia Lux", 11, 5, 11, 10, 8, 11, 8, "Olivia");
const rose = new Queen("Rosé", 12, 11, 13, 8, 10, 10, 6, "Rose");
const symone = new Queen("Symone", 14, 7, 7, 9, 12, 13, 13, "Symone");
const tamisha = new Queen("Tamisha Iman", 7, 6, 7, 5, 6, 7, 7, "Tamisha");
const tina = new Queen("Tina Burner", 6, 6, 10, 5, 6, 8, 9, "TinaB");
const utica = new Queen("Utica Queen", 7, 4, 6, 15, 5, 12, 11, "Utica");

const alyssaH = new Queen("Alyssa Hunter", 5, 6, 7, 10, 7, 13, 8, "AlyssaH");
const angeria = new Queen("Angeria Paris VanMicheals", 13, 11, 10, 12, 9, 13, 11, "Angeria");
const bosco = new Queen("Bosco", 11, 12, 6, 7, 12, 11, 6, "Bosco");
const daya = new Queen("Daya Betty", 9, 8, 9, 9, 10, 10, 8, "DayaBetty");
const deja = new Queen("DeJa Skye", 9, 7, 9, 8, 13, 8, 8, "DeJa");
const jasmineK = new Queen("Jasmine Kennedie", 7, 6, 13, 7, 6, 10, 14, "JasmineK");
const jorgeous = new Queen("Jorgeous", 9, 7, 15, 10, 6, 11, 15, "Jorgeous");
const june = new Queen("June Jambalaya", 5, 6, 6, 4, 5, 6, 6, "June");
const kerri = new Queen("Kerri Colby", 6, 6, 5, 5, 6, 9, 6, "Kerri");
const kornbread = new Queen("Kornbread Jeté", 6, 7, 6, 6, 7, 8, 7, "Kornbread");
const cadmen = new Queen("Lady Camden", 12, 11, 12, 11, 7, 10, 11, "LadyCamden");
const maddy = new Queen("Maddy Morphosis", 8, 7, 6, 5, 6, 9, 7, "Maddy");
const orion = new Queen("Orion Story", 4, 6, 6, 5, 6, 6, 5, "Orion");
const willow = new Queen("Willow Pill", 11, 8, 7, 10, 10, 12, 8, "Willow");

const amethyst = new Queen("Amethyst", 4, 8, 6, 5, 9, 8, 10, "Amethyst");
const anetra = new Queen("Anetra", 9, 7, 13, 11, 8, 11, 13, "Anetra");
const auraMayari = new Queen("Aura Mayari", 5, 5, 9, 7, 6, 9, 7, "AuraMayari");
const irene = new Queen("Irene The Alien", 4, 5, 4, 4, 4, 8, 6, "IreneDubois");
const jax = new Queen("Jax", 5, 6, 9, 8, 6, 8, 14, "Jax");
const loosey = new Queen("Loosey LaDuca", 10, 14, 9, 8, 13, 11, 9, "LooseyLaDuca");
const luxx = new Queen("Luxx Noir London", 10, 10, 9, 13, 9, 14, 9, "LuxxNoirLondon");
const malaysia = new Queen("Malaysia Babydoll Foxx", 9, 7, 7, 8, 6, 9, 8, "MalaysiaBabydollFoxx");
const marcia = new Queen("Marcia Marcia Marcia", 9, 9, 10, 8, 9, 8, 12, "MarciaMarciaMarcia");
const mistress = new Queen("Mistress Isabelle Brooks", 11, 10, 10, 10, 10, 13, 9, "MistressIsabelleBrooks");
const poppy = new Queen("Princess Poppy", 5, 6, 5, 5, 6, 6, 8, "PrincessPoppy");
const robin = new Queen("Robin Fierce", 7, 7, 6, 11, 7, 10, 9, "RobinFierce");
const salina = new Queen("Salina EsTitties", 9, 9, 9, 5, 7, 7, 11, "SalinaEsTitties");
const sashaColby = new Queen("Sasha Colby", 12, 8, 13, 11, 11, 15, 13, "SashaColby");
const spice = new Queen("Spice", 8, 6, 7, 8, 5, 11, 7, "Spice");
const sugar = new Queen("Sugar", 9, 7, 6, 6, 5, 11, 7, "Sugar");

const amandaTori = new Queen("Amanda Tori Meating", 9, 7, 7, 7, 7, 7, 9, "AmandaToriMeating");
const dawn = new Queen("Dawn", 8, 8, 8, 13, 8, 13, 7, "Dawn");
const geneva = new Queen("Geneva Karr", 5, 7, 10, 6, 8, 8, 11, "GenevaKarr");
const hershii = new Queen("Hershii LiqCour-Jeté", 4, 4, 4, 4, 4, 4, 4, "HershiiLiqCourJete");
const megami = new Queen("Megami", 9, 7, 10, 10, 9, 10, 12, "Megami");
const mhiya = new Queen("Mhi'ya Iman LePaige", 8, 6, 9, 9, 9, 9, 15, "MhiyaImanLePaige");
const mirage = new Queen("Mirage", 6, 7, 8, 7, 6, 9, 10, "Mirage");
const morphine = new Queen("Morphine Love Dion", 7, 6, 10, 10, 7, 11, 15, "MorphineLoveDion");
const nymphia = new Queen("Nymphia Wind", 10, 11, 12, 15, 8, 15, 12, "NymphiaWind");
const jane = new Queen("Plane Jane", 12, 12, 9, 9, 13, 11, 10, "PlaneJane");
const plasma = new Queen("Plasma", 13, 9, 9, 7, 8, 9, 10, "Plasma");
const qQueen = new Queen("Q", 12, 10, 8, 15, 8, 15, 8, "Q");
const sapphira = new Queen("Sapphira Cristál", 8, 11, 12, 10, 11, 13, 13, "SapphiraCristal");
const xunami = new Queen("Xunami Muse", 7, 6, 8, 8, 6, 10, 8, "XunamiMuse");

const acacia = new Queen("Acacia Forgot", 7, 7, 7, 7, 7, 7, 7, "AcaciaForgot");
const arrietty = new Queen("Arrietty", 7, 7, 7, 7, 7, 7, 7, "Arrietty");
const crystalE = new Queen("Crystal Envy", 7, 7, 7, 7, 7, 7, 7, "CrystalEnvy");
const hormona = new Queen("Hormona Lisa", 7, 7, 7, 7, 7, 7, 7, "HormonaLisa");
const jewels = new Queen("Jewels Sparkles", 7, 7, 7, 7, 7, 7, 7, "JewelsSparkles");
const joella = new Queen("Joella", 7, 7, 7, 7, 7, 7, 7, "Joella");
const kori = new Queen("Kori King", 7, 7, 7, 7, 7, 7, 7, "KoriKing");
const lana = new Queen("Lana Ja'Rae", 7, 7, 7, 7, 7, 7, 7, "LanaJaRae");
const lexi = new Queen("Lexi Love", 7, 7, 7, 7, 7, 7, 7, "LexiLove");
const lucky = new Queen("Lucky Starzzz", 7, 7, 7, 7, 7, 7, 7, "LuckyStarzzz");
const lydia = new Queen("Lydia B Kollins", 7, 7, 7, 7, 7, 7, 7, "LydiaBKollins");
const onya = new Queen("Onya Nurve", 7, 7, 7, 7, 7, 7, 7, "OnyaNurve");
const samStar = new Queen("Sam Star", 7, 7, 7, 7, 7, 7, 7, "SamStar");
const suzie = new Queen("Suzie Toot", 7, 7, 7, 7, 7, 7, 7, "SuzieToot");

const jimbo = new Queen("Jimbo", 13, 15, 6, 14, 15, 14, 6, "Jimbo");

const seasonsData = {
	us_season1: [akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria],
	us_season2: [jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra],
	us_season3: [alexis, carmen, delta, india, manila, mariah, mimi, phoenix, raja, shangela, stacey, venus, yara],
	us_season4: [alisa, chad, dida, jiggly, kenya, leshauwn, latrice, madame, milan, phiphi, sharon, princess, willam],
	us_season5: [alaska, alyssa, coco, detox, honey, ivy, jadejolie, jinkx, lineysha, monica, penny, roxxxy, serena, vivienne],
	us_season6: [adore, april, bendelacreme, bianca, courtney, darienne, gia, joslyn, kelly, laganja, magnolia, milk, trinityk, vivacious],
	us_season7: [ginger, jaidynn, jasmine, kandy, katya, kennedy, max, fame, kasha, pearl, sashab, tempest, trixie, violet],
	us_season8: [acid, bob, chichi, cynthia, dax, derrick, kim, laila, naomi, naysha, robbie, thorgy],
	us_season9: [aja, alexism, charlie, cynthia, eureka, farrah, jaymes, kimora, ninab, peppermint, sasha, shea, trinity, valentina],
	us_season10: [aquaria, asia, blair, dusty, eureka, kalorie, kameron, mayhem, miz, monet, monique, vanessa, vixen, yuhua],
	us_season11: [akeria, ariel, brooke, honeyd, kahanna, mercedes, ninaw, plastique, rajah, scarlet, shuga, silky, soju, vanessa, yvie],
	us_Season12: [aiden, brita, crystal, dahlia, gigi, heidi, jackie, jaida, jan, nicky, rock, sherry, widow],
	us_season13: [denali, elliott, mik, joey, kahmora, kandym, lala, olivia, rose, symone, tamisha, tina, utica],
	us_season14: [alyssaH, angeria, bosco, daya, deja, jasmineK, jorgeous, june, kerri, kornbread, cadmen, maddy, orion, willow],
	us_season15: [amethyst, anetra, auraMayari, irene, jax, loosey, luxx, malaysia, marcia, mistress, poppy, robin, salina, sashaColby, spice, sugar],
	us_season16: [amandaTori, dawn, geneva, hershii, megami, mhiya, mirage, morphine, nymphia, jane, plasma, qQueen, sapphira, xunami],
	us_season17: [acacia, arrietty, crystalE, hormona, jewels, joella, kori, lana, lexi, lucky, lydia, onya, samStar, suzie],
	allstars_1: [alexis, chad, jujubee, latrice, manila, mimi, ninaf, pandora, raven, shannel, tammie, yara],
	allstars_2: [adore, alaska, alyssa, coco, detox, ginger, katya, phiphi, roxxxy, tatianna],
	allstars_3: [aja, bebe, bendelacreme, chichi, kennedy, milk, morgan, shangela, thorgy, trixie],	
	allstars_4: [farrah, gia, jasmine, latrice, manila, monet, monique, naomi, trinity, valentina],
	allstars_5: [alexis, blair, derrick, india, jujubee, mariah, mayhem, miz, ongina, shea],
	allstars_6: [sonique, eureka, ginger, rajah, trinityk, pandora, jan, akeria, scarlet, yara, silky,  jiggly, serena],
	allstars_7: [jinkx, vivienne, monet, trinity, shea, raja, yvie, jaida],
	allstars_8: [jimbo, kandy, jessica, alexis, lala, kahanna, jaymes, heidi, darienne, kasha, naysha, monica],
	allstars_9: [angeria, mik, jorgeous, ninaw, plastique, roxxxy, shannel, vanessa],
	allstars_10: [acid, aja, bosco, alyssaH, cynthia, daya, olivia, phoenix, tina, deja, denali, ginger, irene, jorgeous, kerri, nicole, mistress, lydia],
	allQueens: [akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria,
    jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra,
    alexis, carmen, delta, india, manila, mariah, mimi, phoenix, raja, stacey, venus, yara,
    alisa, chad, dida, jiggly, kenya, leshauwn, latrice, madame, milan, phiphi, sharon, princess, willam,
    alaska, alyssa, coco, detox, honey, ivy, jadejolie, jinkx, lineysha, monica, penny, roxxxy, serena, vivienne,
    adore, april, bendelacreme, bianca, courtney, darienne, gia, joslyn, kelly, laganja, magnolia, milk, trinityk, vivacious,
    ginger, jaidynn, jasmine, kandy, katya, kennedy, max, fame, kasha, pearl, sashab, tempest, trixie, violet,
    acid, bob, chichi, cynthia, dax, derrick, kim, laila, naomi, naysha, robbie, thorgy,
    aja, alexism, charlie, eureka, farrah, jaymes, kimora, ninab, peppermint, sasha, shea, trinity, valentina,
    aquaria, asia, blair, dusty, kalorie, kameron, mayhem, miz, monet, monique, vanessa, vixen, yuhua,
    akeria, ariel, brooke, honeyd, kahanna, mercedes, ninaw, plastique, rajah, scarlet, shuga, silky, soju, yvie,
    aiden, brita, crystal, dahlia, gigi, heidi, jackie, jaida, jan, nicky, rock, sherry, widow,
    denali, elliott, mik, joey, kahmora, kandym, lala, olivia, rose, symone, tamisha, tina, utica,
    alyssaH, angeria, bosco, daya, deja, jasmineK, jorgeous, june, kerri, kornbread, cadmen, maddy, orion, willow,
    amethyst, anetra, auraMayari, irene, jax, loosey, luxx, malaysia, marcia, mistress, poppy, robin, salina, sashaColby, spice, sugar,
    amandaTori, dawn, geneva, hershii, megami, mhiya, mirage, morphine, nymphia, jane, plasma, qQueen, sapphira, xunami,
    acacia, arrietty, crystalE, hormona, jewels, joella, kori, lana, lexi, lucky, lydia, onya, samStar, suzie, jimbo]
};
// == End of Class == //

// == UI Management Functions ==
function showQueenSuggestions(query) {
    const suggestionBox = document.getElementById('queenSuggestions');
    suggestionBox.innerHTML = '';
    if (!query) {
        suggestionBox.style.display = 'none';
        return;
    }
    const matches = seasonsData.allQueens.filter(q => q.getName().toLowerCase().includes(query.toLowerCase()) && !simulatorGlobals.currentCast.includes(q));
    if (matches.length === 0) {
        suggestionBox.style.display = 'none';
        return;
    }
    matches.slice(0, 8).forEach(queen => {
        const option = document.createElement('div');
        option.textContent = queen.getName();
        option.style.padding = '6px 10px';
        option.style.cursor = 'pointer';
        option.onmouseover = function() { option.style.background = '#eee'; };
        option.onmouseout = function() { option.style.background = '#fff'; };
        option.onclick = function() {
            document.getElementById('queenSearchInput').value = queen.getName();
            suggestionBox.style.display = 'none';
        };
        suggestionBox.appendChild(option);
    });
    suggestionBox.style.display = 'block';
}

function addQueenFromSearch() {
    const input = document.getElementById('queenSearchInput');
    const name = input.value.trim();
    if (!name) return;
    const queen = seasonsData.allQueens.find(q => q.getName().toLowerCase() === name.toLowerCase());
    if (queen && !simulatorGlobals.currentCast.includes(queen)) {
        simulatorGlobals.currentCast.push(queen);
        addQueenToCastUI(queen);
        input.value = '';
        document.getElementById('queenSuggestions').style.display = 'none';
    } else {
        input.value = '';
        document.getElementById('queenSuggestions').style.display = 'none';
    }
}

function addQueenToCastUI(queen) {
    const castSelection = document.getElementById('castSelection');
    if ([...castSelection.children].some(div => div.dataset.queenName === queen.getName())) return;
    const div = document.createElement('div');
    div.className = 'cast-queen';
    div.dataset.queenName = queen.getName();
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'center';
    div.style.background = '#f5ebf5';
    div.style.color = '#222';
    div.style.borderRadius = '10px';
    div.style.fontWeight = 'bold';
    div.style.padding = '8px 10px 6px 10px';
    div.style.position = 'relative';
    div.style.minWidth = '90px';
    div.style.maxWidth = '110px';
    div.style.boxShadow = '0 2px 8px #0001';
    div.style.margin = '0 2px 8px 2px';
 
    const nameDiv = document.createElement('div');
    nameDiv.textContent = queen.getName();
    nameDiv.style.fontSize = '13px';
    nameDiv.style.textAlign = 'center';
    div.appendChild(nameDiv);
 
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';
    removeBtn.style.position = 'absolute';
    removeBtn.style.top = '2px';
    removeBtn.style.right = '4px';
    removeBtn.style.background = '#e57373';
    removeBtn.style.color = '#fff';
    removeBtn.style.border = 'none';
    removeBtn.style.borderRadius = '50%';
    removeBtn.style.cursor = 'pointer';
    removeBtn.style.width = '20px';
    removeBtn.style.height = '20px';
    removeBtn.onclick = function() {
        div.remove();
        simulatorGlobals.currentCast = simulatorGlobals.currentCast.filter(q => q !== queen);
    };
    div.appendChild(removeBtn);
    castSelection.appendChild(div);
}

function addRandomQueens() {
    const available = seasonsData.allQueens.filter(q => !simulatorGlobals.currentCast.includes(q));
    if (available.length === 0) return;
    const queen = available[randomNumber(0, available.length - 1)];
    simulatorGlobals.currentCast.push(queen);
    addQueenToCastUI(queen);
}

// == Core Simulation Logic ==
function startSimulation(predefined) {
	if (!Array.isArray(predefined) || predefined.length === 0) {
		if (simulatorGlobals.currentCast.length < 3) {
			return;
		} else {
			simulatorGlobals.fullCast = simulatorGlobals.currentCast;
			newEpisode();
		}
	} else {
		simulatorGlobals.fullCast = predefined;
		simulatorGlobals.currentCast = predefined;
		newEpisode();
	}
}

const _originalStartSimulation = window.startSimulation;
window.startSimulation = function(predefined) {
    const finaleInput = document.getElementById('finaleSizeInput');
    if (finaleInput) {
        let n = parseInt(finaleInput.value);
        if (isNaN(n) || n < 2) n = 2;
        if (n > 10) n = 10;
        simulatorGlobals.finaleSize = n;
    }
    _originalStartSimulation.apply(this, arguments);
};

function newEpisode() {
	simulatorGlobals.safeQueens = [];
	simulatorGlobals.topQueens = [];
	simulatorGlobals.topAllStars = [];
	for (let i = 0; i < simulatorGlobals.currentCast.length; i++) {
		simulatorGlobals.currentCast[i].lipstickChoice = null;
	}
	simulatorGlobals.bottomQueens = [];
	simulatorGlobals.doubleShantay = false;
	simulatorGlobals.doubleSashay = false;
	simulatorGlobals.runwayEpisode = false;
	simulatorGlobals.episodeCount++;

	const queensRemainingScene = new Scene();
	queensRemainingScene.changeRoom("werkroom");
	queensRemainingScene.clean();
	queensRemainingScene.createHeader("Queens remaining...");
	for (let i = 0; i < simulatorGlobals.currentCast.length; i++) {
		queensRemainingScene.createImage(simulatorGlobals.currentCast[i].image);
		queensRemainingScene.createBold(simulatorGlobals.currentCast[i].getName());
	}

	queensRemainingScene.createButton("Proceed", "miniChallenge()");
}

function generatePerformances() {
    const performanceScreen = new Scene();
    performanceScreen.createHorizontalLine();
    performanceScreen.createBigText("The queens' performances...");

    let slay = [];
    let great = [];
    let good = [];
    let bad = [];
    let flop = [];

    for (let i = 0; i < simulatorGlobals.currentCast.length; i++) {
        let score = simulatorGlobals.currentCast[i].performanceScore;
        if (score < 6) {
            slay.push(simulatorGlobals.currentCast[i]);
        } else if (score >= 6 && score < 16) {
            great.push(simulatorGlobals.currentCast[i]);
        } else if (score >= 16 && score < 26) {
            good.push(simulatorGlobals.currentCast[i]);
        } else if (score >= 26 && score < 31) {
            bad.push(simulatorGlobals.currentCast[i]);
        } else if (score >= 31 && score < 50) {
            flop.push(simulatorGlobals.currentCast[i]);
        }
    }

    createPerformanceDesc(performanceScreen, slay, great, good, bad, flop);
}

function createPerformanceDesc(screen, slay, great, good, bad, flop) {
    function displayGroup(queens, color, id, message) {
        if (queens.length === 0) return;

        shuffle(queens);

        for (let i = 0; i < queens.length; i++) {
            screen.createImage(queens[i].image, color);
        }

        screen.createBold("", id);
        const textElem = document.getElementById(id);
        if (textElem) {
            let names = "";
            for (let j = 0; j < queens.length; j++) {
                names += queens[j].getName();
                if (j < queens.length - 1) names += ", ";
            }
            textElem.innerHTML = names + " " + message;
        }
    }

    displayGroup(slay, "darkblue", "slay", "slayed the challenge!");
    displayGroup(great, "royalblue", "great", "had a great performance!");
    displayGroup(good, null, "good", "had a good performance.");
    displayGroup(bad, "pink", "bad", "had a bad performance...");
    displayGroup(flop, "tomato", "flop", "flopped the challenge...");
	if (simulatorGlobals.runwayEpisode === true) {
		screen.createButton("Proceed", "judging()");
	} else {
		screen.createButton("Proceed", "runway()");
	}
}

function createRunwayDesc(screen, slay, great, good, bad, flop) {
    function displayGroup(queens, color, id, message) {
        if (queens.length === 0) return;

        shuffle(queens);

        for (let i = 0; i < queens.length; i++) {
            screen.createImage(queens[i].image, color);
        }

        screen.createBold("", id);
        const textElem = document.getElementById(id);
        if (textElem) {
            let names = "";
            for (let j = 0; j < queens.length; j++) {
                names += queens[j].getName();
                if (j < queens.length - 1) names += ", ";
            }
            textElem.innerHTML = names + " " + message;
        }
    }

	displayGroup(slay, "darkblue", "slay", "slayed the runway!");
    displayGroup(great, "royalblue", "great", "had a great runway!");
    displayGroup(good, "black", "good", "had a good runway.");
    displayGroup(bad, "pink", "bad", "had a bad runway...");
    displayGroup(flop, "tomato", "flop", "flopped the runway...");
}

// == Challenges and Runway Logic == //
function miniChallenge() {
	const miniChallengeScreen = new Scene();
	miniChallengeScreen.clean();
	miniChallengeScreen.createHeader("Mini-challenge!");
	miniChallengeScreen.createParagraph("", "Description");
	miniChallengeScreen.createHorizontalLine();
	miniChallengeScreen.createImage("", "royalblue", "MCWinner");
	miniChallengeScreen.createBold("", "MCWinner");

	const miniChallenge = new MiniChallenge();
	miniChallenge.generateDescription();
	miniChallenge.rankPerformances();

	if (simulatorGlobals.currentCast.length > simulatorGlobals.finaleSize) {
		const methods = [
		"actingChallenge()",
		"comedyChallenge()",
		"danceChallenge()",
		"designChallenge()",
		"improvChallenge()",
		"ballChallenge()"
		];

		const chosen = methods[randomNumber(0, methods.length - 1)];
		switch (chosen) {
			case "actingChallenge()":
				simulatorGlobals.episodeList.push("Acting");
				break;
			case "comedyChallenge()":
				simulatorGlobals.episodeList.push("Comedy");
				break;
			case "danceChallenge()":
				simulatorGlobals.episodeList.push("Dance");
				break;
			case "designChallenge()":
				simulatorGlobals.episodeList.push("Design");
				break;
			case "improvChallenge()":
				simulatorGlobals.episodeList.push("Improv");
				break;
			case "ballChallenge()":
				simulatorGlobals.episodeList.push("Ball");
				break;
		}
		miniChallengeScreen.createButton("Proceed", chosen);
	} else {
		miniChallengeScreen.createButton("Proceed", "runway()");
	}
}
function actingChallenge() {
	const actingChallengeScreen = new Scene();
	actingChallengeScreen.clean();
	actingChallengeScreen.createHeader("Maxi-challenge!");
	actingChallengeScreen.createParagraph("", "Description");
	const actingChallenge = new ActingChallenge();
	actingChallenge.generateDescription();
	actingChallenge.rankPerformances();

	simulatorGlobals.runwayEpisode = false;
	generatePerformances();
}
function comedyChallenge() {
	const comedyChallengeScreen = new Scene();
	comedyChallengeScreen.clean();
	comedyChallengeScreen.createHeader("Maxi-challenge!");
	comedyChallengeScreen.createParagraph("", "Description");

	const comedyChallenge = new ComedyChallenge();
	comedyChallenge.generateDescription();
	comedyChallenge.rankPerformances();

	simulatorGlobals.runwayEpisode = false;
	generatePerformances();
}
function danceChallenge() {
	const danceChallengeScreen = new Scene();
	danceChallengeScreen.clean();
	danceChallengeScreen.createHeader("Maxi-challenge!");
	danceChallengeScreen.createParagraph("", "Description");

	const danceChallenge = new DanceChallenge();
	danceChallenge.generateDescription();
	danceChallenge.rankPerformances();

	simulatorGlobals.runwayEpisode = false;
	generatePerformances();
}
function designChallenge() {
	const designChallengeScreen = new Scene();
	designChallengeScreen.clean();
	designChallengeScreen.createHeader("Maxi-challenge!");
	designChallengeScreen.createParagraph("", "Description");

	const designChallenge = new DesignChallenge();
	designChallenge.generateDescription();
	designChallenge.rankPerformances();

	simulatorGlobals.runwayEpisode = true;
	generatePerformances();
}
function improvChallenge() {
	const improvChallengeScreen = new Scene();
	improvChallengeScreen.clean();
	improvChallengeScreen.createHeader("Maxi-challenge!");
	improvChallengeScreen.createParagraph("", "Description");

	const improvChallenge = new ImprovChallenge();
	improvChallenge.generateDescription();
	improvChallenge.rankPerformances();

	simulatorGlobals.runwayEpisode = false;
	generatePerformances();
}
function ballChallenge() {
	const ballChallengeScreen = new Scene();
	ballChallengeScreen.clean();
	ballChallengeScreen.createHeader("Maxi-challenge!");
	ballChallengeScreen.createParagraph("", "Description");

	const ballChallenge = new BallChallenge();
	ballChallenge.generateDescription();
	ballChallenge.rankPerformances();

	simulatorGlobals.runwayEpisode = true;
	generatePerformances();
}
function runway() {
	const runwayScreen = new Scene();
	runwayScreen.clean();
	runwayScreen.changeRoom("mainstage");
	runwayScreen.createHeader("Runway!");
	runwayScreen.createParagraph("The queens will walk the runway in their looks!");
	
	const categories = [
		"Executive Realness",
		"Party Night",
		"Red Carpet",
		"Spring Fling",
		"Winter Wonderland",
		"Summer Solstice",
		"IDK- Something",
	];
	const finaleCategories = [
		"Crowning Glory",
		"Best Drag",
		"Come in your Best Drag",
		"Finale Eleganza",
		"Finale Eleganza Extravaganza"
	]
	if (simulatorGlobals.currentCast.length > simulatorGlobals.finaleSize) {
		runwayScreen.createParagraph("Category is... " + categories[randomNumber(0, categories.length - 1)]);
	} else {
		runwayScreen.createParagraph("Category is... " + finaleCategories[randomNumber(0, finaleCategories.length - 1)]);
	}

	runwayScreen.createHorizontalLine();
	runwayScreen.createBigText("The queens' performances...");
	for (let i = 0; i < simulatorGlobals.currentCast.length; i++) {
		simulatorGlobals.currentCast[i].getRunway();
	}
	sortRunwayPerformances(simulatorGlobals.currentCast);
	let slay = [];
	let great = [];
	let good = [];
	let bad = [];
	let flop = [];
	for (let i = 0; i < simulatorGlobals.currentCast.length; i++) {
        let score = simulatorGlobals.currentCast[i].runwayPerformanceScore;
        if (score < 6) {
            slay.push(simulatorGlobals.currentCast[i]);
        } else if (score >= 6 && score < 16) {
            great.push(simulatorGlobals.currentCast[i]);
        } else if (score >= 16 && score < 26) {
            good.push(simulatorGlobals.currentCast[i]);
        } else if (score >= 26 && score < 31) {
            bad.push(simulatorGlobals.currentCast[i]);
        } else if (score >= 31 && score < 50) {
            flop.push(simulatorGlobals.currentCast[i]);
        }
    }
	createRunwayDesc(runwayScreen, slay, great, good, bad, flop);
	if (simulatorGlobals.currentCast.length > simulatorGlobals.finaleSize) {
		runwayScreen.createButton("Proceed", "judging()");
	} else {
		runwayScreen.createButton("Proceed", "finale()");
	}
}

function judging() {	
	if (simulatorGlobals.currentCast.length > 11) {
		simulatorGlobals.currentCast.sort(function(a, b) {
			return a.performanceScore - b.performanceScore;
		});
		for (let i = 0; i < 4; i++) {
			simulatorGlobals.topQueens.push(simulatorGlobals.currentCast[i]);
			simulatorGlobals.bottomQueens.push(simulatorGlobals.currentCast[simulatorGlobals.currentCast.length - (1 + i)]);
		}
		judgingScreen();
	} else if (simulatorGlobals.currentCast.length > 6) {
		simulatorGlobals.currentCast.sort(function(a, b) {
			return a.performanceScore - b.performanceScore;
		});
		for (let i = 0; i < 3; i++) {
			simulatorGlobals.topQueens.push(simulatorGlobals.currentCast[i]);
			simulatorGlobals.bottomQueens.push(simulatorGlobals.currentCast[simulatorGlobals.currentCast.length - (1 + i)]);
		}
		judgingScreen();
	} else {
		simulatorGlobals.currentCast.sort(function(a, b) {
			return a.performanceScore - b.performanceScore;
		});
		const halfPoint = Math.floor(simulatorGlobals.currentCast.length / 2);
		for (let i = 0; i < halfPoint; i++) {
			simulatorGlobals.topQueens.push(simulatorGlobals.currentCast[i]);
			simulatorGlobals.bottomQueens.push(simulatorGlobals.currentCast[simulatorGlobals.currentCast.length - (1 + i)]);
		}
		judgingScreen();
	}
}

function judgingScreen() {
	const judgingScreen = new Scene();
	judgingScreen.clean();
	judgingScreen.changeRoom("mainstage");
	judgingScreen.createHeader("Judging!");
	judgingScreen.createParagraph("Based on tonight's performances...");	
	const judgedQueens = simulatorGlobals.topQueens.concat(simulatorGlobals.bottomQueens);

	for (let i = 0; i < judgedQueens.length; i++) {
		judgingScreen.createImage(judgedQueens[i].image, "black");
	}
	const judgedQueensNames = judgedQueens.map(queen => queen.getName()).join(", ");
	judgingScreen.createBold(judgedQueensNames);
	judgingScreen.createParagraph("Tonight, you represent the tops and the bottom of the week.")
	judgingScreen.createHorizontalLine();

	simulatorGlobals.safeQueens = simulatorGlobals.currentCast.filter(
		queen => !judgedQueens.includes(queen)
	);
	if (simulatorGlobals.safeQueens.length > 0) {
		for (let i = 0; i < simulatorGlobals.safeQueens.length; i++) {
			simulatorGlobals.safeQueens[i].trackRecord.push("SAFE");
		}
		const safeQueensNames = simulatorGlobals.safeQueens.map(queen => queen.getName()).join(", ");
		judgingScreen.createParagraph(safeQueensNames + " you are safe.");
	}

	judgingScreen.createButton("Proceed", "resultsScreen()");
}

function resultsScreen() {
	const resultsScreen = new Scene();
	resultsScreen.clean();
	resultsScreen.changeRoom("mainstage");
	resultsScreen.createHeader("Bring back my girls!");
	resultsScreen.createBold("Ladies, I've made my decision.");

	for (let i = 0; i < simulatorGlobals.topQueens.length; i++) {
		simulatorGlobals.topQueens[i].performanceScore -= (simulatorGlobals.topQueens[i].runwayPerformanceScore - simulatorGlobals.topQueens[i].favoritism);
	}

	simulatorGlobals.topQueens.sort(function(a, b) {
		return a.performanceScore - b.performanceScore;
	});

	if (simulatorGlobals.isAllStars == true) {
		simulatorGlobals.topQueens[0].winCount++;
		simulatorGlobals.topQueens[0].favoritism += 5;

		simulatorGlobals.topQueens[1].winCount++;
		simulatorGlobals.topQueens[1].favoritism += 5;

		simulatorGlobals.topAllStars.push(simulatorGlobals.topQueens[0]);
		simulatorGlobals.topAllStars.push(simulatorGlobals.topQueens[1]);
		
		resultsScreen.createImage(simulatorGlobals.topQueens[0].image, "deepskyblue");
		resultsScreen.createImage(simulatorGlobals.topQueens[1].image, "deepskyblue");
		resultsScreen.createBold(simulatorGlobals.topQueens[0].getName() + ", " + simulatorGlobals.topQueens[1].getName() + ", conDRAGulations! You represent the top two all stars of this week!");
		simulatorGlobals.topQueens.splice(0, 2);

		if (simulatorGlobals.topQueens.length > 0) {
			const highQueens = simulatorGlobals.topQueens.map(queen => queen.getName()).join(", ");
			for (let i = 0; i < simulatorGlobals.topQueens.length; i++) {
				resultsScreen.createImage(simulatorGlobals.topQueens[i].image, "lightblue");
				simulatorGlobals.topQueens[i].trackRecord.push("HIGH");
			}
			resultsScreen.createParagraph(highQueens + ", good work this week, you're safe.");
		}
	}
	else {
		if (simulatorGlobals.topQueens.length >= 2 && simulatorGlobals.topQueens[0].performanceScore == simulatorGlobals.topQueens[1].performanceScore) {
			simulatorGlobals.topQueens[0].winCount++;
			simulatorGlobals.topQueens[0].favoritism += 5;

			simulatorGlobals.topQueens[1].winCount++;
			simulatorGlobals.topQueens[1].favoritism += 5;

			simulatorGlobals.topQueens[0].trackRecord.push('WIN ');
			simulatorGlobals.topQueens[1].trackRecord.push('WIN ');
			
			resultsScreen.createImage(simulatorGlobals.topQueens[0].image, "darkblue");
			resultsScreen.createImage(simulatorGlobals.topQueens[1].image, "darkblue");
			resultsScreen.createBold(simulatorGlobals.topQueens[0].getName() + ", " + simulatorGlobals.topQueens[1].getName() + ", conDRAGulations! You're the winners of this week's challenge!");
			simulatorGlobals.topQueens.splice(0, 2);
		} else if (simulatorGlobals.topQueens.length >= 1) {
			simulatorGlobals.topQueens[0].winCount++;
			simulatorGlobals.topQueens[0].favoritism += 5;

			resultsScreen.createImage(simulatorGlobals.topQueens[0].image, "royalblue");
			simulatorGlobals.topQueens[0].trackRecord.push("WIN");
			resultsScreen.createBold(simulatorGlobals.topQueens[0].getName() + ", conDRAGulations! You're the winner of this week's challenge!");
			simulatorGlobals.topQueens.splice(0, 1);
		}

		if (simulatorGlobals.topQueens.length > 0) {
			const highQueens = simulatorGlobals.topQueens.map(queen => queen.getName()).join(", ");
			for (let i = 0; i < simulatorGlobals.topQueens.length; i++) {
				resultsScreen.createImage(simulatorGlobals.topQueens[i].image, "lightblue");
				simulatorGlobals.topQueens[i].trackRecord.push("HIGH");
			}
			resultsScreen.createParagraph(highQueens + ", good work this week, you're safe.");
		}
	}

	resultsScreen.createHorizontalLine();

	for (let i = 0; i < simulatorGlobals.bottomQueens.length; i++) {
		simulatorGlobals.bottomQueens[i].performanceScore -= (simulatorGlobals.bottomQueens[i].runwayPerformanceScore + simulatorGlobals.bottomQueens[i].unfavoritism);
	}
	simulatorGlobals.bottomQueens.sort(function(a, b) {
		return a.performanceScore - b.performanceScore;
	});

	if (simulatorGlobals.bottomQueens.length >= 3) {
		for (let i = 0; i < simulatorGlobals.bottomQueens.length; i++) {
			resultsScreen.createImage(simulatorGlobals.bottomQueens[i].image, "tomato");
		}
		const bottomQueensNames = simulatorGlobals.bottomQueens.map(q => q.getName()).join(", ");
		resultsScreen.createParagraph(bottomQueensNames + ", you represent the bottoms of the week...");
	}

	if (simulatorGlobals.bottomQueens.length == 4) {
		const lowQueens = simulatorGlobals.bottomQueens.splice(0, 2);		
		for (let i = 0; i < lowQueens.length; i++) {
			lowQueens[i].unfavoritism += 3;
			lowQueens[i].trackRecord.push("LOW");
			resultsScreen.createImage(lowQueens[i].image, "lightpink");
		}
		resultsScreen.createBold(lowQueens[0].getName() + ", " + lowQueens[1].getName() + "... you are both safe.");
	} else if (simulatorGlobals.bottomQueens.length == 3) {
		const [lowQueen] = simulatorGlobals.bottomQueens.splice(0, 1);	
		lowQueen.unfavoritism += 3;
		lowQueen.trackRecord.push("LOW");
		resultsScreen.createImage(lowQueen.image, "lightpink");
		resultsScreen.createBold(lowQueen.getName() + "... you are safe.");
	}

	for (let i = 0; i < simulatorGlobals.bottomQueens.length; i++) {
		resultsScreen.createImage(simulatorGlobals.bottomQueens[i].image, "tomato");
		simulatorGlobals.bottomQueens[i].bottomCount++;
	}	resultsScreen.createBold(simulatorGlobals.bottomQueens[0].getName() + ", " + simulatorGlobals.bottomQueens[0].getName() + ", i'm sorry my dears but you are up for elimination.");
	
	if (simulatorGlobals.isAllStars && simulatorGlobals.bottomQueens.length > 0) {
		for (let i = 0; i < simulatorGlobals.topAllStars.length; i++) {
			const randomIndex = Math.floor(Math.random() * simulatorGlobals.bottomQueens.length);
			simulatorGlobals.topAllStars[i].lipstickChoice = simulatorGlobals.bottomQueens[randomIndex];
		}
	}

	resultsScreen.createButton("Proceed", "startLipsync()");
}

function startLipsync() {
	lipsync().catch(error => {
		console.error("Error during lip-sync:", error);
	});
}

async function lipsync() {
	const lipsyncScreen = new Scene();
	lipsyncScreen.clean();
	lipsyncScreen.changeRoom("mainstagelipsync");
	lipsyncScreen.createHeader("It's time...");
	if (simulatorGlobals.isAllStars == true) {
		lipsyncScreen.createParagraph("The time has come for you to lip-sync for your legacy!")

		try {
			const response = await fetch('textFiles/songs.txt');
			const text = await response.text();
			const lipsyncSongs = text.split('\n').filter(song => song.trim() !== '');
			const song = lipsyncSongs[randomNumber(0, lipsyncSongs.length - 1)];
			lipsyncScreen.createBold("Tonight you will be lip-syncing to... " + song);

			lipsyncScreen.createHorizontalLine();
			
			for (let i = 0; i < simulatorGlobals.topAllStars.length; i++) {
				lipsyncScreen.createImage(simulatorGlobals.topAllStars[i].image, "deepskyblue");
				simulatorGlobals.topAllStars[i].getLipsync();
			}

			simulatorGlobals.topAllStars.sort((a, b) => a.lipsyncPerformanceScore - b.lipsyncPerformanceScore);
			lipsyncScreen.createBold(simulatorGlobals.topAllStars[0].getName() + ", " + simulatorGlobals.topAllStars[1].getName() + ", good luck and don't fuck it up!");
			lipsyncScreen.createButton("Proceed", "eliminationScreen()");
		} catch (error) {
			console.error("Error loading lip-sync song:", error);
			lipsyncScreen.createBold("Tonight you will be lip-syncing to... Born Naked by RuPaul");
			lipsyncScreen.createButton("Proceed", "eliminationScreen()");
		}
	}
	else {
		lipsyncScreen.createParagraph("The time has come for you to lip-sync for your life!");

		try {
			const response = await fetch('textFiles/songs.txt');
			const text = await response.text();
			const lipsyncSongs = text.split('\n').filter(song => song.trim() !== '');
			const song = lipsyncSongs[randomNumber(0, lipsyncSongs.length - 1)];
			lipsyncScreen.createBold("Tonight you will be lip-syncing to... " + song);

			lipsyncScreen.createHorizontalLine();
			
			for (let i = 0; i < simulatorGlobals.bottomQueens.length; i++) {
				lipsyncScreen.createImage(simulatorGlobals.bottomQueens[i].image, "tomato");
				simulatorGlobals.bottomQueens[i].getLipsync();
			}

			simulatorGlobals.bottomQueens.sort((a, b) => a.lipsyncPerformanceScore - b.lipsyncPerformanceScore);
			lipsyncScreen.createBold(simulatorGlobals.bottomQueens[0].getName() + ", " + simulatorGlobals.bottomQueens[1].getName() + ", good luck and don't fuck it up!");
			lipsyncScreen.createButton("Proceed", "eliminationScreen()");
		} catch (error) {
			console.error("Error loading lip-sync song:", error);
			lipsyncScreen.createBold("Tonight you will be lip-syncing to... Born Naked by RuPaul");
			lipsyncScreen.createButton("Proceed", "eliminationScreen()");
		}
	}
}

function eliminationScreen() {
	const eliminationScreen = new Scene();
	eliminationScreen.clean();
	eliminationScreen.changeRoom("mainstage");
	eliminationScreen.createHeader("The Results...");
	eliminationScreen.createBold("Ladies, I've made my decision...");


	if (simulatorGlobals.isAllStars == true) {
		const winner = simulatorGlobals.topAllStars[0];
		const loser = simulatorGlobals.topAllStars[1];

		if (Math.abs(winner.lipsyncPerformanceScore - loser.lipsyncPerformanceScore) < 5 && randomNumber(0, 100) < 10) {
			eliminationScreen.createImage(winner.image, "darkblue");
			eliminationScreen.createImage(loser.image, "darkblue");
			eliminationScreen.createBold("ConDRAGulations! You are both the winners of this lip-sync!");
			winner.trackRecord.push("WIN ");
			loser.trackRecord.push("WIN ");
			winner.favoritism += 5;
			loser.favoritism += 5;
			eliminationScreen.createHorizontalLine();
			eliminationScreen.createBigText("Now... Who will you send home?");
			eliminationScreen.createImage(winner.lipstickChoice.image, "tomato");
			eliminationScreen.createBold(winner.lipstickChoice.getName() + ".");
			eliminationScreen.createImage(loser.lipstickChoice.image, "tomato");
			eliminationScreen.createBold(loser.lipstickChoice.getName() + ".");
			eliminationScreen.createParagraph("As it is written, it shall be done.");
			eliminationScreen.createParagraph(loser.lipstickChoice.getName() + ", " + winner.lipstickChoice.getName() + ", you two will always be all-stars, now sashay away...");
			loser.lipstickChoice.trackRecord.push("ELIM ");
			simulatorGlobals.eliminatedCast.push(winner.lipstickChoice);
			loser.lipstickChoice.unfavoritism += 3;
			simulatorGlobals.eliminatedCast.push(loser.lipstickChoice);
			winner.lipstickChoice.trackRecord.push("ELIM ");
			winner.lipstickChoice.unfavoritism += 3;
			simulatorGlobals.currentCast.splice(winner.lipstickChoice, 1);
			simulatorGlobals.currentCast.splice(loser.lipstickChoice, 1);
			eliminationScreen.createButton("Proceed", "showTrackRecord(false)");
			return;
		}

		eliminationScreen.createImage(winner.image, "royalblue");
		eliminationScreen.createBold(winner.getName() + ", conDRAGulations! You are the winner of this weeks challenge!");
		winner.trackRecord.push("WIN");
		winner.favoritism += 5;

		eliminationScreen.createImage(loser.image, "deepskyblue");
		eliminationScreen.createBold(loser.getName() + ", great job this week, you are safe.");
		loser.trackRecord.push(" WIN");
		loser.favoritism += 3;

		eliminationScreen.createHorizontalLine();

		eliminationScreen.createBigText("Now... Who will you send home?");
		eliminationScreen.createImage(winner.lipstickChoice.image, "tomato");
		eliminationScreen.createBold(winner.lipstickChoice.getName() + ".");
		eliminationScreen.createParagraph("As it is written, it shall be done.");

		eliminationScreen.createParagraph(winner.lipstickChoice.getName() + ", you will always be an all-star, now sashay away...");
		winner.lipstickChoice.trackRecord.push("ELIM");
		winner.lipstickChoice.unfavoritism += 3;
		simulatorGlobals.eliminatedCast.push(winner.lipstickChoice);
		simulatorGlobals.currentCast.splice(winner.lipstickChoice, 1);
		for (let i = 0; i < simulatorGlobals.bottomQueens.length; i++) {
			if (simulatorGlobals.bottomQueens[i] !== winner.lipstickChoice) {
				simulatorGlobals.bottomQueens[i].trackRecord.push("BTM2");
			}
		}

	} else {
		const winner = simulatorGlobals.bottomQueens[0];
		const eliminated = simulatorGlobals.bottomQueens[1];

		if (Math.abs(winner.lipsyncPerformanceScore - eliminated.lipsyncPerformanceScore) < 5 && randomNumber(0, 100) < 10 && !simulatorGlobals.doubleShantay) {
			simulatorGlobals.doubleShantay = true;
			eliminationScreen.createImage(winner.image, "hotpink");
			eliminationScreen.createImage(eliminated.image, "hotpink");
			eliminationScreen.createBold("You both showed me how bad you wanted to stay... Shantay you BOTH stay!");
			winner.trackRecord.push("BTM2");
			eliminated.trackRecord.push("BTM2");
			eliminated.unfavoritism += 3;
			winner.unfavoritism += 3;

			eliminationScreen.createButton("Proceed", "showTrackRecord(false)");
			return;
		}

		if (winner.lipsyncPerformanceScore > 30 && eliminated.lipsyncPerformanceScore > 30 && randomNumber(0, 100) < 10 && !simulatorGlobals.doubleSashay) {
			simulatorGlobals.doubleSashay = true;
			eliminationScreen.createImage(winner.image, "firebrick");
			eliminationScreen.createImage(eliminated.image, "firebrick");
			eliminationScreen.createBold("None of you survived that lipsync... I must ask you both to sashay away.");
			
			simulatorGlobals.currentCast = simulatorGlobals.currentCast.filter(queen => 
				queen !== winner && queen !== eliminated);
			simulatorGlobals.eliminatedCast.push(winner, eliminated);

			winner.trackRecord.push("ELIM ");
			eliminated.trackRecord.push("ELIM ");
			winner.unfavoritism += 3;
			eliminated.unfavoritism += 3;

			eliminationScreen.createButton("Proceed", "showTrackRecord(false)");
			return;
		}
		eliminationScreen.createImage(winner.image, "tomato");
		winner.trackRecord.push("BTM2");
		eliminated.trackRecord.push("ELIM");
		eliminationScreen.createBold(winner.getName() + ", shantay you stay.");
		
		eliminationScreen.createImage(eliminated.image, "red");
		eliminationScreen.createBold(eliminated.getName() + ", sashay away...");

		simulatorGlobals.currentCast = simulatorGlobals.currentCast.filter(queen => queen !== eliminated);
		simulatorGlobals.eliminatedCast.push(eliminated);
	}

	eliminationScreen.createButton("Proceed", "showTrackRecord(false)");
}

function getPlacementPriority(result) {
    switch (result.trim()) {
        case "WINNER": return 100;
        case "RUNNER UP": return 90;
        case "WIN": return 80;
        case "WIN ": return 75;
        case "TOP2": return 70;
        case "HIGH": return 60;
        case "SAFE": return 50;
        case "LOW": return 40;
        case "BTM2": return 30;
        case "BTM2 ": return 25;
        case "ELIM ": return 10;
        case "ELIM": return 5;
        default: return 0;
    }
}

function getQueenSortKey(queen) {
    let elimIndex = queen.trackRecord.findIndex(r => r.trim() === "ELIM" || r.trim() === "ELIM ");
    if (elimIndex === -1) elimIndex = Infinity;
    let highest = Math.max(...queen.trackRecord.map(getPlacementPriority));
    return { elimIndex, highest };
}

function sortTrackRecordQueens(queens) {
    return queens.slice().sort((a, b) => {
        const aKey = getQueenSortKey(a);
        const bKey = getQueenSortKey(b);

        if (aKey.elimIndex === Infinity && bKey.elimIndex === Infinity) {
            return bKey.highest - aKey.highest;
        }
        if (aKey.elimIndex !== Infinity && bKey.elimIndex === Infinity) return 1;

        if (aKey.elimIndex === Infinity && bKey.elimIndex !== Infinity) return -1;

        return bKey.elimIndex - aKey.elimIndex;
    });
}

function showTrackRecord(finale) {
    const trackRecordScreen = new Scene();
    trackRecordScreen.clean();
    trackRecordScreen.createHeader("Track Record");
    trackRecordScreen.changeRoom("untucked");

    if (!document.getElementById('rubikFont')) {
        const link = document.createElement('link');
        link.id = 'rubikFont';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap';
        document.head.appendChild(link);
    }

    const sortedQueens = sortTrackRecordQueens(simulatorGlobals.fullCast);

    let table = document.createElement("table");
    table.setAttribute("id", "trackRecord");
    table.setAttribute("class", "trtable");
    table.style.width = "100%";
    table.style.textAlign = "center";
    table.style.color = "black";
    table.style.borderCollapse = "collapse";
    table.style.fontFamily = "'Rubik', Arial, sans-serif";
    table.style.fontSize = "13px";
    table.style.letterSpacing = "0.01em";

    // --- HEADER ROWS ---
    let headerRow1 = document.createElement("tr");
    headerRow1.style.height = "32px";
    let contestantHeader = document.createElement("th");
    contestantHeader.innerHTML = "Contestant";
    contestantHeader.colSpan = 1;
	contestantHeader.style.backgroundColor = "#e9dfe9";
	contestantHeader.style.border = "1px solid #a2a9b1";
	contestantHeader.style.color = "black";
    contestantHeader.style.fontWeight = "bold";
    contestantHeader.style.width = "110px";
    headerRow1.appendChild(contestantHeader);
    for (let i = 1; i <= simulatorGlobals.episodeCount; i++) {
        let episodeHeader = document.createElement("th");
        episodeHeader.innerHTML = "Ep. " + i;
        episodeHeader.style.fontWeight = "bold";
		episodeHeader.style.color = "black";
        episodeHeader.style.width = "24px";
        episodeHeader.style.height = "32px";
		episodeHeader.style.backgroundColor = "#e9dfe9";
		episodeHeader.style.border = "1px solid #a2a9b1";
        headerRow1.appendChild(episodeHeader);
    }
    table.appendChild(headerRow1);

    let headerRow2 = document.createElement("tr");
    headerRow2.style.height = "18px";
    let nameHeader = document.createElement("th");
	nameHeader.style.backgroundColor = "#e9dfe9";
	nameHeader.style.border = "1px solid #a2a9b1";
	nameHeader.style.color = "black";
    nameHeader.style.fontWeight = "normal";
    nameHeader.style.width = "70px";
    headerRow2.appendChild(nameHeader);
    if (Array.isArray(simulatorGlobals.episodeList)) {
        simulatorGlobals.episodeList.forEach(epName => {
            let episodeNameHeader = document.createElement("th");
            episodeNameHeader.innerHTML = `<small>${epName}</small>`;
            episodeNameHeader.style.fontWeight = "normal";
            episodeNameHeader.style.fontSize = "10px";
            episodeNameHeader.style.width = "24px";
			episodeNameHeader.style.backgroundColor = "#e9dfe9";
			episodeNameHeader.style.border = "1px solid #a2a9b1";
			episodeNameHeader.style.color = "black";
            episodeNameHeader.style.height = "18px";
            headerRow2.appendChild(episodeNameHeader);
        });
    } else {
        for (let i = 1; i <= simulatorGlobals.episodeCount; i++) {
            let episodeNameHeader = document.createElement("th");
            episodeNameHeader.innerHTML = "";
            headerRow2.appendChild(episodeNameHeader);
        }
    }
    table.appendChild(headerRow2);

    for (let queen of sortedQueens) {
        let row = document.createElement("tr");
        row.style.height = "32px";
        let nameCell = document.createElement("td");
        nameCell.textContent = queen.getName();
        nameCell.style.backgroundColor = "#f5ebf5";
        nameCell.style.color = "black";
        nameCell.style.fontWeight = "bold";
        nameCell.style.fontSize = "12px";
        nameCell.style.width = "70px";
		nameCell.style.border = "1px solid #a2a9b1";
        nameCell.style.textAlign = "center";
        nameCell.style.padding = "0 2px";
        row.appendChild(nameCell);

        for (let result of queen.trackRecord) {
            let cell = document.createElement("td");
            cell.style.width = "24px";
            cell.style.height = "32px";
            cell.style.fontSize = "11px";
            cell.style.padding = "0";
            cell.style.border = "1px solid #a2a9b1";
            cell.style.verticalAlign = "middle";
            cell.style.lineHeight = "32px";
            cell.style.textAlign = "center";
            switch(result.trim()) {
                case "WINNER":
                    cell.style.color = "black";
					cell.style.fontWeight = "bold";
                    cell.style.backgroundColor = "yellow";
                    break;
                case "RUNNER UP":
                    cell.style.color = "black";
					cell.style.fontWeight = "bold";
                    cell.style.backgroundColor = "silver";
                    break;
				case "ELIMINATED":
					cell.style.color = "white";
					cell.style.fontWeight = "bold";
					cell.style.backgroundColor = "sienna";
					break;
                case "WIN":
                    cell.style.color = "white";
					cell.style.fontWeight = "bold";
                    cell.style.backgroundColor = "royalblue";
                    break;
                case "WIN ":
                    cell.style.color = "white";
					cell.style.fontWeight = "bold";
                    cell.style.backgroundColor = "darkblue";
                    break;
                case " WIN":
                    cell.style.color = "black";
					cell.style.fontWeight = "bold";
                    cell.style.backgroundColor = "deepskyblue";
                    break;
				case "TOP2":
                    cell.style.color = "black";
                    cell.style.backgroundColor = "deepskyblue";
                    break;
                case "HIGH":
                    cell.style.color = "black";
                    cell.style.backgroundColor = "lightblue";
                    break;
                case "SAFE":
                    cell.style.color = "black";
                    cell.style.backgroundColor = "white";
                    break;
                case "LOW":
                    cell.style.color = "black";
                    cell.style.backgroundColor = "pink";
                    break;
                case "BTM2":
                    cell.style.color = "black";
                    cell.style.backgroundColor = "tomato";
                    break;
                case "BTM2 ":
                    cell.style.color = "black";
                    cell.style.backgroundColor = "hotpink";
                    break;
                case "ELIM ":
                    cell.style.color = "white";
					cell.style.fontWeight = "bold";
                    cell.style.backgroundColor = "firebrick";
                    break;
                case "ELIM":
                    cell.style.color = "black";
					cell.style.fontWeight = "bold";
                    cell.style.backgroundColor = "red";
                    break;
				case "":
					cell.style.color = "transparent";
					cell.style.backgroundColor = "lightgray";
                default:
                    cell.style.color = "black";
                    cell.style.backgroundColor = "transparent";
            }
            cell.innerHTML = result;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    trackRecordScreen._wrapper.appendChild(table);

    if (finale === false)
        trackRecordScreen.createButton("Proceed", "newEpisode()");
    else
        trackRecordScreen.createButton("Proceed", "resetSimulation()");
}

function resetSimulation() {
    simulatorGlobals = {
        castSize: 0,
        fullCast: [],
        currentCast: [],
        eliminatedCast: [],
        topQueens: [],
        safeQueens: [],
        bottomQueens: [],
        doubleShantay: false,
        doubleSashay: false,
        episodeCount: 0,
        runwayEpisode: false,
        finaleSize: 3,
        winner: undefined
    };

    seasonsData.allQueens.forEach(queen => {
        queen.trackRecord = [];
        queen.winCount = 0;
        queen.bottomCount = 0;
        queen.favoritism = 0;
        queen.unfavoritism = 0;
        queen.performanceScore = 0;
        queen.runwayPerformanceScore = 0;
        queen.lipsyncPerformanceScore = 0;
        queen.finalePerformanceScore = 0;
    });

    window.location.reload();
}

function finale() {
    const finaleScreen = new Scene();
    finaleScreen.clean();
    finaleScreen.changeRoom("mainstage");
    finaleScreen.createHeader("The Finale!");
    finaleScreen.createParagraph("Our finalists will now perform in a lip-sync for the crown!");

    for (let i = 0; i < simulatorGlobals.currentCast.length; i++) {
        simulatorGlobals.currentCast[i].getFinalePerformance();
    }
    simulatorGlobals.currentCast.sort((a, b) => a.finalePerformanceScore - b.finalePerformanceScore);

    let finalists = [];
    if (simulatorGlobals.finaleSize > 3) {
        finalists = simulatorGlobals.currentCast.slice(0, 2);
        for (let i = 2; i < simulatorGlobals.currentCast.length; i++) {
            simulatorGlobals.currentCast[i].trackRecord.push("ELIMINATED");
            finaleScreen.createImage(simulatorGlobals.currentCast[i].image, "sienna");
            finaleScreen.createBold(simulatorGlobals.currentCast[i].getName() + ", I'm sorry my dear but you will not be advancing to the final lip-sync. Now... sashay away.");
            simulatorGlobals.eliminatedCast.push(simulatorGlobals.currentCast[i]);
        }
        simulatorGlobals.currentCast = finalists;
        finaleScreen.createHorizontalLine();
    } else if (simulatorGlobals.currentCast.length >= 3 && simulatorGlobals.currentCast[2].finalePerformanceScore < 20) {
        finalists = simulatorGlobals.currentCast.slice(0, 2)
        simulatorGlobals.currentCast[2].trackRecord.push("ELIMINATED");
        finaleScreen.createImage(simulatorGlobals.currentCast[2].image, "sienna");
        finaleScreen.createBold(simulatorGlobals.currentCast[2].getName() + ", I'm sorry my dear but you will not be advancing to the final lip-sync. Now... sashay away.");
        simulatorGlobals.eliminatedCast.push(simulatorGlobals.currentCast[2]);
        simulatorGlobals.currentCast = finalists;
        finaleScreen.createHorizontalLine();
    } else {
        finalists = simulatorGlobals.currentCast.slice(0, Math.min(3, simulatorGlobals.currentCast.length));
    }

    finaleScreen.createBigText("The finalists who will lip-sync for the crown are...");
    for (let queen of finalists) {
        finaleScreen.createImage(queen.image, "royalblue");
        queen.trackRecord.push("TOP " + finalists.length);
    }
    finaleScreen.createBold(finalists.map(q => q.getName()).join(", "));
    
    finaleScreen.createButton("Proceed", "finaleLipSync()");
}

async function finaleLipSync() {
    const lipsyncScreen = new Scene();
    lipsyncScreen.clean();
    lipsyncScreen.changeRoom("mainstagelipsync");

    const finalists = simulatorGlobals.currentCast.filter(q => q.trackRecord[q.trackRecord.length - 1].startsWith("TOP"));
    
    const response = await fetch('textFiles/songs.txt');
	const text = await response.text();
	const lipsyncSongs = text.split('\n').filter(song => song.trim() !== '');
	const song = lipsyncSongs[randomNumber(0, lipsyncSongs.length - 1)];
    
    lipsyncScreen.createHeader("Ladies, this is your last chance to impress me and earn the crown.");
    lipsyncScreen.createParagraph("The time has come for you to lip-sync... for the CROWN!");
    lipsyncScreen.createBold("The song is... " + song + "!");

    for (let queen of finalists) {
        queen.getFinalePerformance();
        queen.finaleScore = queen.lipSyncScore + queen.finalePerformanceScore;
    }

    finalists.sort((a, b) => b.finaleScore - a.finaleScore);
    simulatorGlobals.currentCast = finalists;

    lipsyncScreen.createButton("Proceed", "announceWinner()");
}

function announceWinner() {
    const winnerScreen = new Scene();
    winnerScreen.clean();
    winnerScreen.changeRoom("mainstage");
    
    const winner = simulatorGlobals.currentCast[0];
    const runnerUps = simulatorGlobals.currentCast.slice(1);
    simulatorGlobals.winner = winner;

    winner.trackRecord[winner.trackRecord.length - 1] = "WINNER";
    for (let queen of runnerUps) {
        queen.trackRecord[queen.trackRecord.length - 1] = "RUNNER UP";
    }

    winnerScreen.createHeader("The next RuPaul's Drag Race superstar is...");
    winnerScreen.createBigText(winner.getName() + "!");
    winnerScreen.createImage(winner.image, "yellow");

    for (let queen of runnerUps) {
        winnerScreen.createImage(queen.image, "silver");
    }
    winnerScreen.createBold(runnerUps.map(q => q.getName()).join(", ") + " thank you for an incredible season...");

	simulatorGlobals.episodeList.push("Finale");
    winnerScreen.createButton("Proceed", "showTrackRecord(true)");
}

function setFinaleSize(val) {
    let n = parseInt(val);
    if (isNaN(n) || n < 2) n = 2;
    if (n > 10) n = 10;
    simulatorGlobals.finaleSize = n;
    document.getElementById('finaleSizeInput').value = n;
}