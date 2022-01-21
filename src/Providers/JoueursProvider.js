export class JoueursProvider {
  joueurs
  constructor() {
    this.joueurs = this.getJoueurs()
  }

  save() {
    localStorage.setItem('btc-spa-joueurs', JSON.stringify(this.joueurs))
  }

  getJoueurs() {
    let datas = localStorage.getItem('btc-spa-joueurs')
    datas = JSON.parse(datas)
    return datas
  }

  add(joueur) {
    const id = Date.now()
    let tmp = { ...joueur }
    tmp.id = id
    this.joueurs.push(tmp)
    this.save()
  }

  update(joueur) {
    const { id } = joueur
    let indice = -1
    for (let i = 0; i < this.joueurs.length; i++)
      if (this.joueurs[i].id === Number(id)) indice = i

    if (indice === -1) return false
    this.joueurs[indice] = joueur
    this.save()
    return true
  }

  remove(joueur) {
    let indice = -1
    for (let i = 0; i < this.joueurs.length; i++)
      if (this.joueurs[i].id === Number(joueur.id)) indice = i

    if (indice === -1) return false

    this.joueurs.splice(indice, 1)
    this.save()
    return true
  }

  getJoueurById(id) {
    let res = this.joueurs.filter(joueur => joueur.id === Number(id))
    return res.length === 0 ? false : res[0]
  }
}
