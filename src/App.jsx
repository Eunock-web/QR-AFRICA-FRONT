import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Create from './components/pages/Create'
import Lien from './components/pages/Lien'
import Card from './components/utils/Card'
import NavBar from './components/header/NavBar'
import Contact from './components/pages/Contact.Jsx'
import Sms from './components/pages/Sms'
import Email from './components/pages/Email'
import Texte from './components/pages/Texte'
import Paiement from './components/pages/Paiement'
import Wifis from './components/pages/Wifis'
import Aperçu from './components/utils/Aperçu'
import Profil from './components/pages/Profil'

function App() {
  return (
    <div className="">
      <NavBar />
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Wifis /> */}
      <Profil />
    </div>
  )
}

export default App
