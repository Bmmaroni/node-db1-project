const router = require('express').Router()
const db = require("./accounts-model")
const { checkAccountPayload, checkAccountNameUnique, checkAccountId } = require("./accounts-middleware")

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json(await db.getAll())

  } catch (err) {
      next(err)
  }
})

router.get('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await db.getById(req.params.id)
    res.json(account)

  } catch (err) {
      next(err)
  }
})

router.post('/', checkAccountNameUnique, checkAccountPayload, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await db.create({
      name: req.body.name.trim(),
      budget: req.body.budget
    })
    res.status(201).json(account)

  } catch (err) {
      next(err)
  }
})

router.put('/:id', checkAccountPayload, checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const { id } = req.params
    const changes = {
      name: req.body.name.trim(),
      budget: req.body.budget
    }

    const account = await db.updateById(id, changes)
    res.status(200).json(account)

  } catch (err) {
      next(err)
  }
});

router.delete('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await db.deleteById(req.params.id)
    res.status(204).json(account)
  } catch (err) {
      next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: 'something went wrong inside the accounts router',
    errMessage: err.message,
  })
})

module.exports = router;
