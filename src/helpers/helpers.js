export const getRandom = (max) => {
  // TODO: maybe implement: https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
  return Math.floor(Math.random() * Math.floor(max))
}

// Order the imported results, mapping the orignal name and assigning the webpack url value
export const import2Array = (r) => {
    return r.keys().map(item => r(item))
}

export const import2Object = (r) => {
    let images = {}
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item)
    })
    return images
}
