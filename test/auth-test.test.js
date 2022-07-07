const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

const app = require('../app').app

describe('Suite de pruebas de auth', () => {
    it('Should return 401 when no jwt token available', (done) => {
        //Cuando la llamada no tiene correctamente la llave
        chai.request(app)
        .get('/teams')
        .end((err, res) => {
            chai.assert.equal(res.statusCode, 401)
            done()
        })
    })

    it('Should return 200 and token for succesfull login', (done) => {
        chai.request(app)
        .post('/auth/login')
        .set('content-type', 'application/json')
        .send({user: 'Aldito', password: '4321'})
        .end((err, res) => {
            chai.assert.equal(res.statusCode, 200)
            chai.assert.isNotNull(res.body.token)
            done()
        })
    })

    it('Should return 200 when jwt token valid', (done) => {
        chai.request(app)
        .post('/auth/login')
        .set('content-type', 'application/json')
        .send({user: 'Aldito', password: '4321'})
        .end((err, res) => {
            chai.request(app)
            .get('/teams')
            .set('Authorization', `JWT ${res.body.token}`)
            .end((err, res) => {
                chai.assert.equal(res.statusCode, 200)
                done()
            })
        })
    })
})