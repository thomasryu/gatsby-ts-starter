import { injectGlobal } from 'react-emotion'
import { reset } from './reset'

class StyleHelper {
  public static reset = () => {
    injectGlobal`
      ${reset}
    `
  }
}

export { StyleHelper }
