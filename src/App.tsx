import React from 'react'
import './App.css'
// import FunctionalComponent from './components/FunctionalComponent'
import FormComponent from './components/FormComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookList from './components/BookList'
// import MainComponent from './components/MainComponent'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          {/* <MainComponent title='Main Page' subTitle="I'm the payoff of the title" /> */}
          {/* the error comes from the fact that MainComponent currently */}
          {/* is not expecting to receive any prop! */}
          {/* <MainComponent title='Footer Component' /> */}
          {/* <FunctionalComponent title='Main Page' subTitle="I'm the payoff of the title" /> */}
          <Routes>
            <Route path='/' element={<BookList />} />
            <Route path='/form' element={<FormComponent />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
