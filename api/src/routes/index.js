const { Router } = require('express');
const router = Router();
const { Movement } = require('../db.js')

let movements = [
    {
        concept: "compras",
        date: "15/7/2022",
        amount: 100,
        type: 'expense'
    },
    {
        concept: "compras",
        date: "5/7/2022",
        amount: 200,
        type: 'expense'
    },
    {
        concept: "compras",
        date: "5/7/2022",
        amount: 300,
        type: 'income'
    },
    {
        concept: "compras",
        date: "5/7/2022",
        amount: 400,
        type: 'expense'
    },
]

router.get('/', async (req, res) => {
    try {
        const info = await Movement.findAll()
        res.json(info)
    }
    catch (error) {
        next(error)
    }
})

router.post('/', async (req, res) => {
    const { concept, date, amount, type } = req.body
    try {
        const newMovement = Movement.create({
            concept,
            date,
            amount,
            type
        })
        console.log(newMovement)
        res.json(newMovement)
    }
    catch (error) {
        next(error)
    }
})





/* 
pokemons.get("/", async (req, res, next) => {
  const { name } = req.query;

  let pokemon;
  if (name) {
    pokemon = await getPokemon(API, PokemonItem, name);

    if (!pokemon) {
      try {
        pokemon = await Pokemon.findOne({
          where: {
            name: name,
          },
          include: {
            model: Type,
          },
        });
      } catch (error) {
        next(error);
      }
    }
    if (pokemon) {
      res.json(pokemon);
    } else {
      //con 404 anda el search
      //con null anda el form
      //Andan los dos :)
      res.send(null);
    }
  } else {
    let totalPokemonApi = [];

    let urlArr = [];

    for (let i = 1; i <= 40; i++) {
      urlArr = [...urlArr, axios.get(`${API}/${i}`)];
    }

    await axios.all(urlArr).then(
      axios.spread((...responses) => {
        responses.forEach((res) => {
          pokemon = new PokemonItem(res.data);
          totalPokemonApi = [...totalPokemonApi, pokemon];
        });
      })
    );

    let totalPokemonDB = await Pokemon.findAll({
      include: {
        model: Type,
      },
    });

    const totalPokemon = totalPokemonApi.concat(totalPokemonDB);
    res.send(totalPokemon);
  }
});

pokemons.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  if (id.length > 6) {
    try {
      const pokemonDB = await Pokemon.findByPk(id, {
        include: {
          model: Type,
        },
      });
      return res.json(pokemonDB);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      let pokemon = await getPokemon(API, PokemonDetail, id);
      return res.json(pokemon);
    } catch (error) {
      next(error);
    }
  }
});

pokemons.post("/", async (req, res, next) => {
  const {
    name,
    hp,
    attack,
    type1,
    type2,
    defense,
    speed,
    height,
    weight,
    img,
  } = req.body;
  try {
    const newPoke = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      img,
    });

    type2
      ? newPoke.addType([Number(type1), Number(type2)])
      : newPoke.addType([Number(type1)]);

    res.json(newPoke);
  } catch (error) {
    next(error);
  }
});
*/



module.exports = router;
