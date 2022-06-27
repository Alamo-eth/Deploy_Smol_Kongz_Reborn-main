import React from 'react'
import './App.css'
import About from './Components/about'
import Collection from './Components/collection'
import Hero from './Components/hero'
import Questions from './Components/questions'
import Teams from './Components/teams'
import Join from './Components/join'
import Roadmap from './Components/roadmap'
import Factions from './Components/factions'
import { Buffer } from "buffer/";
window.Buffer = window.Buffer || Buffer;

function App() {
	return (
		<>
			<Hero />
			{/* <Factions/> */}
			<About />
			<Roadmap />
			<Collection />
			<Questions />
			<Teams />
			<Join />
		</>
	)
}

export default App

// to redeploy,
// git add .
// git commit -m 'xxx'
// git push
