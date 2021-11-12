import React from 'react'

// redux
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Store, Persistor } from './src/Store/Store'

import Root from './root'

export default function App(props) {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <Root />
      </PersistGate>
    </Provider>

  )
}
