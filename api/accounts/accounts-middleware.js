exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.body) {
    res.status(400).json({
      message: ""
    })
  } else if (!req.body.name || !req.body.budget) {
    res.json({
      message: "name and budget are required"
    })
  } else if ()
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
}
