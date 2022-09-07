import './scss/App.scss'

import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import AppLayout from './layouts/AppLayout'

function App() {
  return (
    <div className='app'>
      <div className='app__container'>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            {publicRoutes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}></Route>
            ))}
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
