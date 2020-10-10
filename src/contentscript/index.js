import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'


const Main = () => {
  return <div>hi</div>
}

const app = document.createElement('div')
document.body.appendChild(app)

app.id = 'anytime-root'

ReactDOM.render(<Main />, app)
