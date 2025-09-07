const expenseService = require('../services/expenseService');
const prisma = require('../lib/prisma');
jest.mock('../lib/prisma');

describe('expenseService', () => {
  beforeEach(() => { jest.clearAllMocks(); });

  it('findExpenseById should call prisma.expense.findUnique', async () => {
    prisma.expense.findUnique.mockResolvedValue({ id: 1 });
    const result = await expenseService.findExpenseById(1);
    expect(prisma.expense.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(result).toEqual({ id: 1 });
  });

  it('findExpenseByWalletId should call prisma.expense.findMany', async () => {
    prisma.expense.findMany.mockResolvedValue([{ id: 1 }]);
    const result = await expenseService.findExpenseByWalletId(2);
    expect(prisma.expense.findMany).toHaveBeenCalledWith({ where: { idWallet: 2 }, orderBy: { date: 'desc' } });
    expect(result).toEqual([{ id: 1 }]);
  });

  it('createExpense should call prisma.expense.create', async () => {
    const newExpense = { idWallet: 1, value: 100, description: 'test' };
    prisma.expense.create.mockResolvedValue(newExpense);
    const result = await expenseService.createExpense(newExpense);
    expect(prisma.expense.create).toHaveBeenCalledWith({ data: { idWallet: 1, value: 100, description: 'test' } });
    expect(result).toEqual(newExpense);
  });

  it('updateExpense should call prisma.expense.update', async () => {
    const expense = { id: 1, value: 200, description: 'update' };
    prisma.expense.update.mockResolvedValue(expense);
    const result = await expenseService.updateExpense(expense);
    expect(prisma.expense.update).toHaveBeenCalledWith({ data: { description: 'update', value: 200 }, where: { id: 1 } });
    expect(result).toEqual(expense);
  });

  it('deleteExpense should call prisma.expense.delete', async () => {
    prisma.expense.delete.mockResolvedValue({ id: 1 });
    const result = await expenseService.deleteExpense(1);
    expect(prisma.expense.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(result).toEqual({ id: 1 });
  });
});
