const RELOAD_KEY = 'chunk-reload'

const CHUNK_LOAD_ERROR =
  /Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed/i

const reloadedForThisPage = (() => {
  if (typeof window === 'undefined') return false
  try {
    return sessionStorage.getItem(RELOAD_KEY) === '1'
  } catch {
    return false
  }
})()

const isStaleChunkError = (error: unknown) =>
  error instanceof TypeError && CHUNK_LOAD_ERROR.test(error.message)

const markReload = () => {
  try {
    sessionStorage.setItem(RELOAD_KEY, '1')
    return true
  } catch {
    return false
  }
}

const clearReloadMark = () => {
  try {
    sessionStorage.removeItem(RELOAD_KEY)
  } catch {
    // ストレージを使えない環境では印を消せない。再読み込みもしない。
  }
}

export const importOrReload = async <T>(importer: () => Promise<T>): Promise<T> => {
  try {
    const imported = await importer()
    if (reloadedForThisPage) clearReloadMark()
    return imported
  } catch (error) {
    if (typeof window === 'undefined' || reloadedForThisPage || !isStaleChunkError(error)) {
      throw error
    }
    if (!markReload()) throw error

    window.location.reload()
    return new Promise(() => {})
  }
}
