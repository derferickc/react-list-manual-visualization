import React from "react"
import Listview from './Listview'
import './App.css'
 
export default function App (props) {

  return (
    <div className="App">
      <section className="list-section">
        <Listview
          numRows={500}
          rowHeight={25}
        />
      </section>
    </div>
  )
}