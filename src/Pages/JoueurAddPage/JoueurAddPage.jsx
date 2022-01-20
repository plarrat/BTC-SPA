import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function JoueurAddPage() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Ajouter un joueur</h1>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" placeholder="Enter prenom" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Enter prenom" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Pseudo</Form.Label>
                <Form.Control type="text" placeholder="Enter prenom" />
              </Form.Group>
              <Button variant="light">Retour</Button>
              <Button variant="outline-secondary" className="float-end mx-2">
                Annuler
              </Button>

              <Button variant="success" type="submit" className="float-end">
                Enregistrer
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
