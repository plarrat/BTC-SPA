import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { JoueursProvider } from './../../Providers/JoueursProvider'

export default function JoueurUpdatePage() {
  const [joueur, setJoueur] = useState({})
  const [formUpdate, setFormUpdate] = useState({
    id: '',
    prenom: '',
    nom: '',
    pseudo: '',
  })
  const joueursProvider = new JoueursProvider()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    let tmpJoueur = joueursProvider.getJoueurById(id)

    if (!tmpJoueur) {
      alert('Joueur non trouvé dans la base')
      navigate('/joueurs')
    } else {
      setJoueur(tmpJoueur)
      setFormUpdate(tmpJoueur)
    }
  }, [id, navigate])

  function update(e) {
    e.preventDefault()
    let res = joueursProvider.update(formUpdate)
    if (res) navigate('/joueurs')
    else alert("Erreur lors de l'enregistrement")
  }

  function reset() {
    setFormUpdate(joueur)
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Modifier un joueur</h1>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form onSubmit={e => update(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter prenom"
                  value={formUpdate.prenom}
                  onChange={e => {
                    let tmp = { ...formUpdate }
                    tmp.prenom = e.target.value
                    setFormUpdate(tmp)
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter nom"
                  value={formUpdate.nom}
                  onChange={e => {
                    let tmp = { ...formUpdate }
                    tmp.nom = e.target.value
                    setFormUpdate(tmp)
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Pseudo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter pseudo"
                  value={formUpdate.pseudo}
                  onChange={e => {
                    let tmp = { ...formUpdate }
                    tmp.pseudo = e.target.value
                    setFormUpdate(tmp)
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
                onClick={reset}
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
