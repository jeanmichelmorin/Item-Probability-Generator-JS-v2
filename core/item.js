class Item {
    constructor(name, occurences, rarity, img) {
      this.name = name;
      this.occurences = occurences;
	  this.rarity = rarity;
	  this.img = img;
    }

	get getName() {
		return this.name;
	}
	set setName(value) {
		this.name = value;
	}

	get getOccurences() {
		return this.occurences;
	}
	set setOccurences(value) {
		this.occurences = value;
	}

	get getRarity() {
		return this.rarity;
	}
	set setRarity(value) {
		this.rarity = value;
	}

	get getImg() {
		return this.img;
	}
	set setImg(value) {
		this.img = value;
	}

    toString() {
        return this.getName;
    }
}