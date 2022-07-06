const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app').app;
chai.use(chaiHttp);

//Describe se usa para expresar un nuevo tipo de pruba unitaria
describe('Suite de prueba e2e', () => {

    //it es el objeto que se debe poner a prueba, el cual espera un callback done
    it("Debe responder hello world", (done) => {
        //chai hace una request a la app en la ruta principal, la cual le manda una respuesta o un error
        chai.request(app)
        .get('/')
        .end((err, res) => {
            console.log('A')
            chai.assert.equal(res.text, 'Hello World!');
            done();
        });
        console.log('B')
    });

})