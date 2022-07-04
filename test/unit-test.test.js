const assert = require('chai').assert

function callfunction(a,b) {
    return a+b;
}

describe('Suite de Prueba para el curso', () =>{
    it('should return 2', () => {
        let variable = callfunction(1,1);
        assert.equal(variable, 2)
    })
})
