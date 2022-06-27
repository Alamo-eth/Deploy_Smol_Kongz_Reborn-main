import Web3 from 'web3/dist/web3.min.js'
import { walletAddress } from './../atoms/walletAddress'
import { useRecoilState } from 'recoil'

export async function ConnectWallet() {
	const [address, setAddress] = useRecoilState(walletAddress)
	try {
		if (window.ethereum) {
			let web3 = new Web3(window.ethereum)
			await window.ethereum.send('eth_requestAccounts')
			let accounts = await web3.eth.getAccounts()
			const account = accounts[0]
			console.log(account)
			setAddress(account)
			console.log(`Address: ${address}`)
		}
	} catch (error) {
		console.log(`Something went wrong`)
	}
}
