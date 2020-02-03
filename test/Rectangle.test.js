const assert = require('assert');
const Rectangle = require('../Rectangle');


describe('isSquare', ()=> {
    const rec = new Rectangle(4,5);
    it('is a function accepting zero argument', () => {
        assert.strictEqual(typeof rec.isSquare, 'function');
        assert.strictEqual(rec.isSquare.length, 0);
    });
    
    it('is a function that returns an boolean', () => {
        assert.strictEqual(typeof rec.isSquare(), 'boolean');
    })
    
    const recSquare = new Rectangle(5,5)
    it('should be a Square', () => {
        assert.strictEqual(recSquare.isSquare(),true)
    })

    it('should not be a Square, it s false', () => {
        assert.strictEqual(rec.isSquare(), false);
    })

    const recPeri = new Rectangle(13,7);

    it('should be the same Area', ()=> {
        assert.strictEqual(recPeri.getArea(), 91);
    })

    it('should be the same Perimeter', () => {
        assert.strictEqual(recPeri.getPerimeter(), 40)
    })

    
    
})