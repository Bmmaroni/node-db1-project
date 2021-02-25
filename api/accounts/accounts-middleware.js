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
  } else if (typeof req.body.name !== 'string' ) {
    res.json({
      message: "name of account must be a string"
    })
  } else if (req.body.name.length < 3 || req.body.name.length > 100) {
    res.json({
      message: "name of account must be between 3 and 100"
    })
  } else if (typeof req.body.budget !== 'number') {
    res.json({
      message: "budget of account must be a number"
    })
  } else if (req.body.budget < 0 || req.body.budget > 1000000) {
    res.json({
      message: "budget of account is too large or too small"
    })
  }
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
}
