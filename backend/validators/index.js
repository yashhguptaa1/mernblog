const { validationResult } = require("express-validator");

//since its a middleware we pass a callback next
exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array()[0].msg });
  }
  next();
};
