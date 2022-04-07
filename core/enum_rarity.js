class Rarity {
    // Create new instances of the same class as static attributes
    static Common = new Rarity("Common", "grey")
    static Uncommon = new Rarity("Uncommon", "blue")
    static Rare = new Rarity("Rare", "purple")
    static Ultra_Rare = new Rarity("Ultra Rare", "pink")
    static Epic = new Rarity("Epic", "yellow")
    static Legendary = new Rarity("Legendary", "orange")
    static Mythic = new Rarity("Mythic", "red")
  
    constructor(name, color) {
      this.name = name;
      this.color = color; // hex or common html color names
    }
  }


// Now we can access enums using namespaced assignments
// this makes it semantically clear that "Summer" is a "Season"
//let rarity = Rarity.Summer

// We can verify whether a particular variable is a Season enum
//console.log(rarity instanceof Rarity)
//true

//console.log(Symbol('something') instanceof Rarity)
//false

// We can explicitly check the type based on each enums class
//console.log(rarity.constructor.name)
// 'Rarity'