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

const App = () => {
  return (
    <>
    <Router>
    <Header/>
    <main>
      <Container className='py-3'>
        <Route path='/' component={Home} exact />
        <Route path='/About' component={About} />
        <Route path='/Contact'  component={Contact_us} />
        <Route path='/Gallery'  component={Gallery} />
     </Container>
     </main>
     </Router>
    </>
  )
}

export default App
