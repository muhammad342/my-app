import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home'
import './index.css'
import About from './pages/About';
import Contact_us from './pages/Contact_us';
import Header from './Components/Header';
import Gallery from './pages/Gallery'
import { BrowserRouter as  Router , Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer';
import Blog from './pages/Blog';
import Buttons from './Components/button'

const App = () => {
  return (
    <>
    <Router>
    <Header/>
    <Buttons/>
    <main>
      <Container className='py-3'>
      <Route path='/' component={Home} exact />
        <Route path='/Home' component={Home}  />
        <Route path='/About' component={About} />
        <Route path='/Contact'  component={Contact_us} />
        <Route path='/Gallery'  component={Gallery} />
        <Route path='/Blog'  component={Blog} />
     </Container>
     </main>
     <Footer/>
     </Router>
    </>
  )
}

export default App
