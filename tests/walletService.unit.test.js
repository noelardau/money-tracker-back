const walletService = require('../services/walletService');
const prisma = require('../lib/prisma');
jest.mock('../lib/prisma');

describe('walletService', () => {
  beforeEach(() => { jest.clearAllMocks(); });

  it('findWalletById should call prisma.wallet.findUnique', async () => {
    prisma.wallet.findUnique.mockResolvedValue({ id: 1 });
    const result = await walletService.findWalletById(1);
    expect(prisma.wallet.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(result).toEqual({ id: 1 });
  });

  it('findWalletByUserId should call prisma.wallet.findMany', async () => {
    prisma.wallet.findMany.mockResolvedValue([{ id: 1 }]);
    const result = await walletService.findWalletByUserId(2);
    expect(prisma.wallet.findMany).toHaveBeenCalledWith({ where: { idUser: 2 } });
    expect(result).toEqual([{ id: 1 }]);
  });

  it('createWallet should call prisma.wallet.create', async () => {
    const newWallet = { idUser: 1, name: 'test', devise: 'Ar', solde: 100 };
    prisma.wallet.create.mockResolvedValue(newWallet);
    const result = await walletService.createWallet(newWallet);
    expect(prisma.wallet.create).toHaveBeenCalledWith({ data: newWallet });
    expect(result).toEqual(newWallet);
  });

  it('updateWallet should call prisma.wallet.update', async () => {
    const wallet = { id: 1, name: 'test', devise: 'Ar' };
    prisma.wallet.update.mockResolvedValue(wallet);
    const result = await walletService.updateWallet(wallet);
    expect(prisma.wallet.update).toHaveBeenCalledWith({ data: { name: wallet.name, devise: wallet.devise }, where: { id: wallet.id } });
    expect(result).toEqual(wallet);
  });

  it('deleteWallet should call prisma.wallet.delete', async () => {
    prisma.wallet.delete.mockResolvedValue({ id: 1 });
    const result = await walletService.deleteWallet(1);
    expect(prisma.wallet.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(result).toEqual({ id: 1 });
  });

  it('soldeUp should increment solde', async () => {
    prisma.wallet.update.mockResolvedValue({ id: 1, solde: 200 });
    const result = await walletService.soldeUp({ value: 100, idWallet: 1 });
    expect(prisma.wallet.update).toHaveBeenCalledWith({ data: { solde: { increment: 100 } }, where: { id: 1 } });
    expect(result).toEqual({ id: 1, solde: 200 });
  });

  it('soldeDown should decrement solde', async () => {
    prisma.wallet.update.mockResolvedValue({ id: 1, solde: 0 });
    const result = await walletService.soldeDown({ value: 100, idWallet: 1 });
    expect(prisma.wallet.update).toHaveBeenCalledWith({ data: { solde: { decrement: 100 } }, where: { id: 1 } });
    expect(result).toEqual({ id: 1, solde: 0 });
  });
});
