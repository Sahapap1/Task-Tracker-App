import Navbar from './components/Nav.jsx'
import {Header, Filter} from './components/FilterBar.jsx'

import { Container } from 'react-bootstrap'

function App() {


  return (
    <>
      <Navbar />
      <Container className='pt-4 px-5' fluid style={{backgroundColor: "#EDF2F4"}}> 
        <Header />
        <Filter />
      </Container>
    </>
  )
}

export default App
