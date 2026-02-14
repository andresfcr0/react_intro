// const useState = (name: string) => {
//     return [name, (name:string) => console.log(name)] as const
// }

// const [name, setName] = useState("Goku")
// console.log(name)
// setName("Vegeta")

import { heroes } from  "./heroes.data"

const findHeroById = (heroId: number) => {
    const h = heroes.find((hero) => hero.id === heroId)

    console.log(h)
}


findHeroById(1)
findHeroById(2)
findHeroById(3)
findHeroById(4)
findHeroById(5)