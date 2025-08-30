let {createExpense} = require("../services/expenseService")


describe("register a new expense", ()=>{

    it("should return a new expense", async()=>{

        let newExpense = await createExpense({
            idWallet: 2,
            desciption: "test ito",
            value:100,
            date: Date.now()
        })

        expect(newExpense).toBe(expect.objectContaining({
            desciption: expect.any(String),
            idWallet: expect.any(Number),
            value: expect.any(Number),
            date: expect.any(Date)
        }))


    })




})