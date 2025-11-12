const isPositive = require('./index')

describe("Valor Positivo", ()=>{
    test('Deve retornar true para o teste', ()=>{
        expect(isPositive(25)).toBe(true);
    })
});

describe("Valor Zero", ()=>{
    test('Deve retornar false para o teste', ()=>{
        expect(isPositive(0)).toBe(false);
    })
});

describe("Valor Negativo", ()=>{
    test('Deve retornar false e um erro de valor inválido para o teste', ()=>{
        expect(() => isPositive(-7)).toThrow("Valor Inválido");
    })
});

describe("Valor inválido", ()=>{
    test('Deve retornar false e um erro de tipo inválido para o teste', ()=>{
        expect(() => isPositive("Raphael")).toThrow("A Entrada deve ser um número");
    })
});

