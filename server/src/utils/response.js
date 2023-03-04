const successRes = (res, option) => {
  const {data, msg, total,token} = option
  res.send({
    code: 0,
    data,
    msg,
    total,
    token
  })
}
const failRes = (res, option) => {
  const {data, msg} = option
  res.send({
    code: 1,
    data,
    msg
  })
}

module.exports = {
  successRes,
  failRes
}