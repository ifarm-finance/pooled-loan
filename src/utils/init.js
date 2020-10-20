import Web3 from 'web3';
import { config } from './config';

// Initialize contract & set global variables
export async function initContract() {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();

    window.userAddress = (
        await window.web3.eth.getAccounts()
    )[0];

    window.loanPoolFactory = new window.web3.eth.Contract(
        config.loanPoolFactoryAbi,
        config.loanPoolFactoryAddress,
        { from: window.userAddress }
    );

    window.ethInitialized = true;

    window.ethereum.on('accountsChanged', () => {
        window.location.reload();
    });
}

export async function initLoggedIn() {
    const accounts = await window.ethereum
        .request({ method: 'eth_accounts' });

    if (
        typeof window.ethereum !== 'undefined'
        && accounts > 0
    ) {
        await initContract();
    }
}
