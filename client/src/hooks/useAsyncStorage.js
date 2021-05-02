export const _storeKeys = async (key, items) => {
  try {
    return await sessionStorage.setItem(key, JSON.stringify(items))
  } catch {
    console.log('eror storing data')
  }
}

export const _loadKeys = async (key) => {
  try {
    return await sessionStorage.getItem(key)
  } catch {
    console.log('there is no item')
  }
}
