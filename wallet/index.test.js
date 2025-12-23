const Wallet = require('./index');
const { verifySignature } = require('../util');

describe('WALLET', () => {
    let wallet;
    let wallet2;

    beforeEach(() => {
        wallet = new Wallet();
        wallet2 = new Wallet();
    });

    it('has a `balance`', () => {
    });
    
    it('has a `publicKey`', () => {
        console.log(wallet.publicKey);
        expect(wallet).toHaveProperty('publicKey');
    });

    describe('signing data', () => {
        const data = 'foo-bar';

        it('verifies a signature', () => {
            expect(
                verifySignature({
                    publicKey: wallet.publicKey,
                    data,
                    signature: wallet.sign(data)
                })
            ).toBe(true);
        });

        it('does not verify an invalid signature', () => {
            expect(
                verifySignature({
                    publicKey: new Wallet().publicKey,
                    data,
                    signature: new Wallet().sign(data)
                })
            ).toBe(false);
        });
        it('does not verify an invalid signature from other address', () => {
            expect(
                verifySignature({
                    publicKey: wallet2.publicKey,
                    data,
                    signature: wallet.sign(data)
                })
            ).toBe(false);
        });
    });
});