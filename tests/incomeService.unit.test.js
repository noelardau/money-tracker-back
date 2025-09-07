const incomeService = require('../services/incomeService');
const prisma = require('../lib/prisma');
jest.mock('../lib/prisma');

describe('incomeService', () => {
  beforeEach(() => { jest.clearAllMocks(); });

  it('findIncomeById should call prisma.income.findUnique', async () => {
    prisma.income.findUnique.mockResolvedValue({ id: 1 });
    const result = await incomeService.findIncomeById(1);
    expect(prisma.income.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(result).toEqual({ id: 1 });
  });

  it('findIncomeByWalletId should call prisma.income.findMany', async () => {
    prisma.income.findMany.mockResolvedValue([{ id: 1 }]);
    const result = await incomeService.findIncomeByWalletId(2);
    expect(prisma.income.findMany).toHaveBeenCalledWith({ where: { idWallet: 2 } });
    expect(result).toEqual([{ id: 1 }]);
  });

  it('createIncome should call prisma.income.create', async () => {
    const newIncome = { idWallet: 1, value: 100, description: 'test' };
    prisma.income.create.mockResolvedValue(newIncome);
    const result = await incomeService.createIncome(newIncome);
    expect(prisma.income.create).toHaveBeenCalledWith({ data: newIncome });
    expect(result).toEqual(newIncome);
  });

  it('updateIncome should call prisma.income.update', async () => {
    const income = { id: 1, value: 200, description: 'update' };
    prisma.income.update.mockResolvedValue(income);
    const result = await incomeService.updateIncome(income);
    expect(prisma.income.update).toHaveBeenCalledWith({ data: { description: 'update', value: 200 }, where: { id: 1 } });
    expect(result).toEqual(income);
  });

  it('deleteIncome should call prisma.income.delete', async () => {
    prisma.income.delete.mockResolvedValue({ id: 1 });
    const result = await incomeService.deleteIncome(1);
    expect(prisma.income.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(result).toEqual({ id: 1 });
  });
});
