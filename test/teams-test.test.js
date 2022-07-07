const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

const app = require('../app').app

describe('Suite de test de teams', () => {
    it('Should return the team of the given user', (done) => {
        let team = [{name: 'Bulbasaur'}, {name: 'Ralts'}, {name: 'Chikorita'}]
        chai.request(app)
        .post('/auth/login')
        .set('content-type', 'application/json')
        .send({user: 'Aldito', password: '4321'})
        .end((err, res) => {
            let token = res.body.token
            chai.assert.equal(res.statusCode, 200)
            chai.request(app)
            .put('/teams')
            .send({team: team
        })
            .set('Authorization', `JWT ${token}`)
            .end((err, res) => {
                chai.request(app)
                .get('/teams')
                .set('Authorization', `JWT ${token}`)
                .end((err, res) => {
                    //Tiene un equipo con Bulbasaur y Ralts
                    //{trainer: Aldo, team: [{name: Bulbasaur, level: 1}, {name: Ralts, level: 1}]}
                    chai.assert.equal(res.statusCode, 200)
                    chai.assert.equal(res.body.trainer, 'Aldito')
                    chai.assert.equal(res.body.team[0].name, team[0].name)
                    chai.assert.equal(res.body.team[1].name, team[1].name)
                    done()
                })
            })
            
        })
    })

    it('Should return the pokedex number', (done) => {
        let pokemonName = 'Bulbasaur'
        chai.request(app)
        .post('/auth/login')
        .set('content-type', 'application/json')
        .send({user: 'Manubasepi', password: '1234'})
        .end((err, res) => {
            let token = res.body.token
            chai.assert.equal(res.statusCode, 200)
            chai.request(app)
            .post('/teams/pokemons')
            .send({name: pokemonName})
            .set('Authorization', `JWT ${token}`)
            .end((err, res) => {
                chai.request(app)
                .get('/teams')
                .set('Authorization', `JWT ${token}`)
                .end((err, res) => {
                    //Tiene un equipo con Bulbasaur y Ralts
                    //{trainer: Aldo, team: [{name: Bulbasaur, level: 1}, {name: Ralts, level: 1}]}
                    chai.assert.equal(res.statusCode, 200)
                    chai.assert.equal(res.body.trainer, 'Manubasepi')
                    chai.assert.equal(res.body.team[0].name, pokemonName)
                    chai.assert.equal(res.body.team[0].pokedexNumber, 1)
                    done()
                })
            })
            
        })
    })
})