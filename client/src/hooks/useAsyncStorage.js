export const _storeKeys = async (key, items) => {
  try {
    return await localStorage.setItem(key, JSON.stringify(items))
  } catch {
    console.log('eror storing data')
  }
}

export const _loadKeys = async (key) => {
  try {
    return await localStorage.getItem(key)
  } catch {
    console.log('there is no item')
  }
}
