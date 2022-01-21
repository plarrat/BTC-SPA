import { Container, Row, Col, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { JoueursProvider } from './../../Providers/JoueursProvider'

export default function JoueurPage() {
  const [joueurs, setJoueurs] = useState([])
  const joueurProvider = new JoueursProvider()

  useEffect(() => {
    let datas = joueurProvider.getJoueurs()
    setJoueurs(datas)
  }, [])

  function remove(joueur) {
    let rep = window.confirm(
      `Etes-vous sur de vouloir supprimer le joueur ${joueur.prenom} ${joueur.nom}`
    )
    if (rep) {
      joueurProvider.remove(joueur)
      let datas = joueurProvider.getJoueurs()
      setJoueurs(datas)
    }
  }

  let displayJoueurs = joueurs.map((joueur, indice) => {
    return (
      <tr key={'joueurs-' + joueur.id}>
        <td>{indice + 1}</td>
        <td>{joueur.prenom}</td>
        <td>{joueur.nom}</td>
        <td>{joueur.pseudo}</td>
        <td>
          <Button as={Link} to={'/joueurs/' + joueur.id} variant="warning">
            Modifier
          </Button>
        </td>
        <td>
          <Button variant="danger" onClick={() => remove(joueur)}>
            Supprimer
          </Button>
        </td>
      </tr>
    )
  })
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
                  <th>Modifier</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
              <tbody>{displayJoueurs}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}
