import React from 'react'
import './App.css'
import FunctionalComponent from './components/FunctionalComponent'
// import MainComponent from './components/MainComponent'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <MainComponent title='Main Page' subTitle="I'm the payoff of the title" /> */}
        {/* the error comes from the fact that MainComponent currently */}
        {/* is not expecting to receive any prop! */}
        {/* <MainComponent title='Footer Component' /> */}
        <FunctionalComponent title='Main Page' subTitle="I'm the payoff of the title" />
      </header>
    </div>
  )
}

export default App
