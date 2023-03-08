import './App.css'
import FirstPage from './components/FirstPage'
import AboutMePage from './components/AboutMePage'
import MyResumePage from './components/MyResumePage'
import ContactMePage from './components/ContactMePage'
import FooterPage from './components/FooterPage'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FirstPage/>
      <AboutMePage/>
      <MyResumePage/>
      <ContactMePage/>
      <FooterPage/>
    </div>
  )
}

export default App
