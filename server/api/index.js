const router = require("express").Router();
const { Pokemon, Trainer } = require("../db");

// Connect your API routes here!

router.get("/Pokemon", async (req, res, next) => {
  try {
    const pokemon = await Pokemon.findAll();
    res.send(pokemon);
  } catch (err) {
    next(err);
  }
});

router.get("/Pokemon/:id", async (req, res, next) => {
  try {
    const pokemon = await Pokemon.findOne({
      where: { id: req.params.id },
      include: Trainer,
    });

    console.log(pokemon);

    res.send(pokemon);
  } catch (err) {
    next(err);
  }
});

router.get("/trainer", async (req, res, next) => {
  try {
    const pokemon = await Trainer.findAll();
    res.send(pokemon);
  } catch (err) {
    next(err);
  }
});

router.get("/trainer/:id", async (req, res, next) => {
  try {
    const pokemon = await Trainer.findByPk(req.params.id);
    res.send(pokemon);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
