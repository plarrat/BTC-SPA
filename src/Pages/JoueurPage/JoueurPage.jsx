import { Container, Row, Col, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function JoueurPage() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Gestion des joueurs</h1>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="mb-3">
              <Button as={Link} to="/joueurs/add">
                Ajouter un joueur
              </Button>
            </div>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Prénom</th>
                  <th>Nom</th>
                  <th>Pseudo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}
