import { Container, Row } from 'react-bootstrap'

export default function HomePage() {
  return (
    <div className="App">
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
                <a
                  className="btn-primary btn btn-lg"
                  href="https://reactrouter.com/"
                >
                  Documentation React Router
                </a>
              </Container>
            </div>
          </Row>
        </Container>
      </main>
    </div>
  )
}
