const Dog = require('../src/Dog')
const Cat = require('../src/Cat')
const PetShop = require('../src/PetShop')


describe('PetShop', () => {
    let petShop

    beforeEach(() => {
        petShop = new PetShop()
    })

    it('should add and list animals', () => {
        const dog = new Dog('Rex', 2, 13)
        const cat = new Cat('PussyCat', 3, 17)

        petShop.addAnimal(dog)

        const animals = petShop.listAnimals()
        expect(animals.length).toBe(1) 
        expect(animals).toContain(dog)
        expect(animals).toContain(cat)
    })
})

describe('Animal Sounds', () => {
    it('should return the correct sound for each animal', () => {
        const dog = new Dog('Rex', 2, 13)

        expect(dog.makesound()).toBe('woof!')
        expect(Cat.makesound()).toBe('Meow Meow')
    })
})
