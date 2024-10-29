function yyid() {
  /* eslint-disable arrow-body-style, no-plusplus */
  if (!window.crypto) {
    return 'xx-x-x-x-xxx'.replace(/x/g, () => {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    })
  }

  let i = 0
  const randomTwoBytes = new Uint16Array(8)
  window.crypto.getRandomValues(randomTwoBytes)

  return 'xx-x-x-x-xxx'.replace(/x/g, () => {
    return randomTwoBytes[i++].toString(16).padStart(4, 0);
  })
  /* eslint-enable arrow-body-style, no-plusplus */
}

export default yyid
