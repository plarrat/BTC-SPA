import { Container, Row, Col, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function JoueurPage() {
  const [joueurs, setJoueurs] = useState([])

  useEffect(() => {
    let datas = localStorage.getItem('btc-spa-joueurs')
      ? localStorage.getItem('btc-spa-joueurs')
      : []
    datas = JSON.parse(datas)
    setJoueurs(datas)
  }, [])

  let displayJoueurs = joueurs.map((joueur, indice) => {
    return (
      <tr key={'joueurs-' + joueur.id}>
        <td>{indice + 1}</td>
        <td>{joueur.prenom}</td>
        <td>{joueur.nom}</td>
        <td>{joueur.pseudo}</td>
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
