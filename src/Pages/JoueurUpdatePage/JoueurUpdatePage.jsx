import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function JoueurUpdatePage() {
  const [joueur, setJoueur] = useState({})
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
    let res = liste.filter(joueur => joueur.id === Number(id))

    if (res.length === 0) {
      alert('Joueur non trouvé dans la base')
      navigate('/joueurs')
    } else {
      setJoueur(res[0])
      setFormUpdate(res[0])
    }
  }, [id, navigate])

  function update(e) {
    e.preventDefault()
    let liste = localStorage.getItem('btc-spa-joueurs')
    liste = JSON.parse(liste)

    let indice = -1
    for (let i = 0; i < liste.length; i++)
      if (liste[i].id === Number(id)) indice = i

    if (indice === -1) {
      alert("Erreur lors de l'enregistrement")
      return null
    }

    liste[indice] = formUpdate
    localStorage.setItem('btc-spa-joueurs', JSON.stringify(liste))
    navigate('/joueurs')
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
