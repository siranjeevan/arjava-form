import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainScreen from './MainScreen'
import { DataProvider } from './ContextAPI/ContextAPI'
import ButtonClick from './ScreenShot/ScreenShot'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <ButtonClick /> 
        <div style={{ position: 'absolute', top: '-9999px', left: '-9999px', opacity: 0 }}>
          <MainScreen />
        </div>
    </DataProvider>
  </StrictMode>
)
