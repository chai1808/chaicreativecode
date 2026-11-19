import { ViteReactSSG } from 'vite-react-ssg/single-page'

import './datadog'
import './gsapSetup'
import './i18n'
import './assets/css/common.scss'

import App from './App'

export const createRoot = ViteReactSSG(<App />)
