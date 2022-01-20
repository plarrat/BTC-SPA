import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function JoueurPage() {
  const { nom } = useParams()

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Gestion des joueurs - {nom}</h1>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              possimus odio numquam ab ullam impedit hic, culpa provident
              debitis quibusdam facilis illum consequuntur labore sint adipisci!
              Unde fugit neque quisquam.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
