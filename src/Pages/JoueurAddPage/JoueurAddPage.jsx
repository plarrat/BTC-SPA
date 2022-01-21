import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { JoueursProvider } from './../../Providers/JoueursProvider'

export default function JoueurAddPage() {
  const [formAdd, setFormAdd] = useState({
    id: '',
    prenom: '',
    nom: '',
    pseudo: '',
  })

  const joueursProvider = new JoueursProvider()
  const navigate = useNavigate()

  function add(e) {
    e.preventDefault()
    joueursProvider.add(formAdd)
    navigate('/joueurs')
  }

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
            <Form onSubmit={e => add(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter prenom"
                  value={formAdd.prenom}
                  onChange={e => {
                    let tmp = { ...formAdd }
                    tmp.prenom = e.target.value
                    setFormAdd(tmp)
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter nom"
                  value={formAdd.nom}
                  onChange={e => {
                    let tmp = { ...formAdd }
                    tmp.nom = e.target.value
                    setFormAdd(tmp)
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Pseudo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter pseudo"
                  value={formAdd.pseudo}
                  onChange={e => {
                    let tmp = { ...formAdd }
                    tmp.pseudo = e.target.value
                    setFormAdd(tmp)
                  }}
                  required
                />
              </Form.Group>

              <hr />

              <Button variant="light" as={Link} to="/joueurs">
                Retour
              </Button>

              <Button
                variant="outline-secondary"
                className="float-end mx-2"
                type="reset"
              >
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
