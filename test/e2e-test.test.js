const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app').app;
chai.use(chaiHttp);

describe('Suite de prueba e2e', () => {

    it("Debe responder hello world", (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            console.log('A')
            chai.assert.equal(res.text, 'Hello World!');
            done();
        }))
        console.log('B')
    })

})