const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

const app = require('../app').app

describe('Suite de test de teams', () => {
    it('Should return the team of the given user', (done) => {
        chai.request(app)
        .post('/auth/login')
        .set('content-type', 'application/json')
        .send({user: 'Aldito', password: '4321'})
        .end((err, res) => {
            chai.assert.equal(res.statusCode, 200)
            chai.request(app)
            .get('/teams')
            .set('Authorization', `JWT ${res.body.token}`)
            .end((err, res) => {
                //Tiene un equipo con Bulbasaur y Ralts
                //{trainer: Aldo, team: [{name: Bulbasaur, level: 1}, {name: Ralts, level: 1}]}
                chai.assert.equal(res.statusCode, 200)
                chai.assert.equal(res.body.trainer, 'Aldito')
                chai.assert.equal(res.body.team[0].name, 'Bulbasaur')
                chai.assert.equal(res.body.team[1].name, 'Ralts')
                done()
            })
        })
    })
})