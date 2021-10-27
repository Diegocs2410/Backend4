const bcrypt = require('bcrypt');
const auth = {}; //Object Created to not expand the exports

auth.encryptPassword = function (password) {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  } catch (error) {
    res.status(500).json({ message: error.message, ok: false });
  }
};

module.exports = auth;
