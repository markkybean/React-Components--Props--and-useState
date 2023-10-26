import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import Header from './Header'
 import Counter from './Counter'
 import CountDisplay from './CountDisplay'
 import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Activity 13 - React Components, Props, and useState");
  const [copyright, setCopyright] = useState("Copyright 2023© Mark S. Santos. All rights reserved.");


  return (
    <div className="card shadow">
      <Header title={title}/>
      <Counter count={count} countStatus = {setCount} />
      <Footer copyright={copyright}/>

      
    </div>
  )
}

export default App
