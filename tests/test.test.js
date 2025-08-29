

function test(n,m){
    return n+m
}


describe("test de calcul", ()=>{
    it("renvoie 5", ()=>{
        let result = test(2,3)

        expect(result).toBe(5)

        
    } )
})