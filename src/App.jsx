import './App.css'
import { Header } from './components/Header'
import { Chart } from './components/Chart'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <Chart />
        <Footer />
      </div>
    </>
  )
}

export default App
