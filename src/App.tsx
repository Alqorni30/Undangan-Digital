import './App.css'
import Gallery from './components/Gallery'
import Gift from './components/Gift'
import Header from './components/Header'
import Komentar from './components/Komentar'
import MainContent from './components/MainContent'
import MainEvent from './components/MainEvent'
import MainInfo from './components/MainInfo'
import Maps from './components/Maps'


function App() {

  return (
    <>
      <Header/>
      <MainContent/>
      <MainInfo/>
      <MainEvent/>
      <Maps/>
      <Gallery/>
      <Gift/>
      <Komentar/>
    </>
  )
}

export default App
