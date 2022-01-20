import AppNavbar from './Components/AppNavbar/AppNavbar'

import { Container, Row, Button } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="mb-5">
        <AppNavbar></AppNavbar>
      </header>
      <main>
        <Container>
          <Row>
            <div className="p-5 mb-4 bg-light rounded-3">
              <Container fluid className="py-5">
                <h1 className="display-5 fw-bold">
                  BTC Single Page Application
                </h1>
                <p className="col-md-8 fs-4">
                  TP permettant de mettre en pratique l'utilisation de plusieurs
                  pages sous ReactJs via l'utilisation de React Router
                </p>
                <Button className="btn-lg" type="button">
                  Example button
                </Button>
              </Container>
            </div>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default App
