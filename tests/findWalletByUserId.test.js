let { findWalletByUserId} = require("../services/walletService")


describe("test if i get the right wallet ", ()=>{

    it("return an array of wallet if all things is good", async()=>{

        let wallet = await findWalletByUserId(2)

        expect(wallet).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                idUser: expect.any(Number),
                solde: expect.any(Number),
                name: expect.any(String)
            })
        ]) || [])


    })


    it("return an error if the idUser is not defined", async ()=>{

        let wallets = await findWalletByUserId()
        
        

        expect(wallets).toStrictEqual(new Error("idUser is required"))

    })

 it("return an error if the idUser is <= 0", async ()=>{

        let wallets = await findWalletByUserId(-1)
       
        

        expect(wallets).toStrictEqual(new Error("The idUser is must > 0"))

    })


})