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
                <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                <p className="col-md-8 fs-4">
                  Using a series of utilities, you can create this jumbotron,
                  just like the one in previous versions of Bootstrap. Check out
                  the examples below for how you can remix and restyle it to
                  your liking.
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
