import React, { useEffect } from 'react'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { fetchDataAsync, selectData } from './features/example/exampleSlice'

function App() {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectData)

  useEffect(() => {
    dispatch(fetchDataAsync())
  }, [])

  const showNotification = () => {
    dispatch(fetchDataAsync())
  }

  return (
    <>
      <ReactNotification />

      <div className="App">
        <h1>Data: {data?.title}</h1>
        <button onClick={showNotification}>Get data</button>
      </div>
    </>
  )
}

export default App
