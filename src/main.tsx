import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { api } from './api'
import { ApiProvider } from '@reduxjs/toolkit/query/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </Provider>
)

