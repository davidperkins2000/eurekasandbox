import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

// createRoot(document.getElementById('root')).render(<App />)
// createRoot(document.getElementById('logotype')).render(<App />)

const logoRoot = createRoot(document.getElementById('logoRoot'))
logoRoot.render(<App />)

const heroRoot = createRoot(document.getElementById('heroRoot'))
heroRoot.render(<App />)

