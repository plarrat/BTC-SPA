import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function JoueurUpdatePage() {
  const [formUpdate, setFormUpdate] = useState({
    id: '',
    prenom: '',
    nom: '',
    pseudo: '',
  })

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    let liste = localStorage.getItem('btc-spa-joueurs')
    liste = JSON.parse(liste)
    let joueur = liste.filter(joueur => joueur.id === Number(id))

    if (joueur.length === 0) {
      alert('Joueur non trouvé dans la base')
      navigate('/joueurs')
    } else {
      joueur = joueur[0]
      setFormUpdate(joueur)
    }
  }, [id, navigate])

  function update(e) {
    e.preventDefault()

    const id = Date.now()
    let tmpForm = { ...formUpdate }
    tmpForm.id = id
    setFormUpdate(tmpForm)

    let joueurs = localStorage.getItem('btc-spa-joueurs')
    if (joueurs === null) joueurs = '[]'
    joueurs = JSON.parse(joueurs)
    joueurs.push(tmpForm)
    localStorage.setItem('btc-spa-joueurs', JSON.stringify(joueurs))
    navigate('/joueurs')
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
