import React, { useState } from 'react'
import styles from './../../styles/MintRight.module.css'
import { walletAddress } from './../../atoms/walletAddress'
import { useRecoilState } from 'recoil'
import Web3 from 'web3/dist/web3.min.js'
import { ConnectWallet } from '../../utils/ConnectWallet'
import Mint from '../Pages/Mint'
import merkle from '../../utils/Merkle.js'

const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"BaseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CurrentPhase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"MaxPublicMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"MerkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"SupplyArray","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"UnitPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"WhitelistMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"devMintSmolKongz","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mintSmolKongz","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_root","type":"bytes32"},{"internalType":"uint256","name":"_phase","type":"uint256"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"phase","type":"uint256"}],"name":"setPhase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"togglePublicSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const ADDRESS = '0x7c4Ba0fD433D6CCe82F96d671E9CeeE2F16D0D5F'

const MintRight = () => {
	const [amount, setAmount] = useState(1)
	const [address, setAddress] = useRecoilState(walletAddress)

	const [Contract, setContract] = useState(null)  

	async function ConnectWallet() {
		try {
			if (window.ethereum) {
				let web3 = new Web3(window.ethereum)
				await window.ethereum.send('eth_requestAccounts')
				let accounts = await web3.eth.getAccounts()
				const account = accounts[0]
				console.log(account)
				setAddress(account)
				console.log(ABI)
				let contract = new web3.eth.Contract(ABI, ADDRESS)
				setContract(contract) 
			}
		} catch (error) {
			console.log(error)
			console.log(`Something went wrong`)
		}
	}

	async function mint() {
		console.log(Contract)
		if (window.ethereum) {
			var _mintAmount = amount
			var mintRate = Number(await Contract.methods.UnitPrice(0).call())
			console.log(mintRate)
			console.log(merkle)
			var proof = merkle.getProof(address,_mintAmount,0);
			console.log(proof)
			console.log(merkle.getMerkleRoot(0))
			merkle.run()
			var totalAmount = mintRate * _mintAmount
			console.log(_mintAmount)
			Contract.methods
				.mintSmolKongz(proof, _mintAmount)
				.send({ from: address, value: String(totalAmount) })
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.connectButton}>
				{address ? (
					<>
						<p
							style={
								address && {
									borderColor: 'green',
									color: 'green',
									cursor: 'auto',
									userSelect: 'none',
								}
							}
						>
							Connected
						</p>
					</>
				) : (
					<p
						style={{
							userSelect: 'none',
						}}
						onClick={ConnectWallet}
					>
						Connect Wallet
					</p>
				)}
			</div>
			<div className={styles.btnContainer}>
				<div>
				<p className={styles.amount}>
						Amount <span>(max 1)</span>
					</p>

					<p className={styles.amount}>
						OG Kongz <span>(max 2)</span>
					</p>
					<div className={styles.buttons}>
						<div>
							<span>{amount}</span>
						</div>
						<div>
							<span
								style={{
									cursor: 'pointer',
									userSelect: 'none',
								}}
								onClick={() => setAmount(2)}
							>
								+
							</span>
						</div>
						<div>
							<span
								style={{
									cursor: 'pointer',
									userSelect: 'none',
								}}
								onClick={() =>
									amount > 1 ? setAmount(amount - 1) : setAmount(amount)
								}
							>
								-
							</span>
						</div>
					</div>
				</div>
				<div className={styles.buttonClaim}>
					<p onClick={mint}>Claim</p>
				</div>
			</div>
		</div>
	)
}

export default MintRight
