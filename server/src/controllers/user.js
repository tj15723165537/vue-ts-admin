const {User} = require("@/models/index");
const list = async (req, res) => {
  const result = await User.findAll()
  res.send({
    code: 0,
    data: result
  })
}

module.exports = {
  list
}