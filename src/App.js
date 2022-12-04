import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Alert from './components/layout/Alert'
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import NotFound from './pages/NotFound'
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'
import NavBar1 from './components/NavBar1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Footer1 from './components/Footer1'
import Footer2 from './components/Footer2'
import Footer3 from './components/Footer3'

// NOTE: Alert is only used on the '/' route moving to that route we can prevent
// content shift when alert shows by hiding and unhiding the Alert rather than
// conditionally rendering

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            {/* <Navbar /> */}
            <NavBar1 />
<Page3/>
            <main className='container mx-auto px-3 pb-12'>
              <Routes>
                <Route
                  path='/'
                  element={
                    <>
                      <Alert />
                      <Home />
                    </>
                  }
                />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </main>

            <Footer3 />
          </div>


        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
