class Case {
    constructor(id, name, occurences, items, rarity, img) {
		this.id = id;
     	this.name = name;
      	this.occurences = occurences;
	 	this.items = items;
		if(rarity instanceof Rarity) {
			this.rarity = rarity;
		}
		this.img = img;
    }

	get getId() {
		return this.id;
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

	get getItems() {
		return this.items;
	}
	set setItems(value) {
		this.items = value;
	}

	get getRarity() {
		return this.rarity;
	}
	set setRarity(value) {
		if(value instanceof Rarity) {
			this.rarity = value;
		}
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