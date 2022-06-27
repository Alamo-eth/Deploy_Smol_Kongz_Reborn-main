import React from 'react'

const Join = () => {
  return (
    <div className='join-section'>
      <div className="container">
        <h2>Join the community</h2>
        <ul className="social-btns">
          <li><a target='_blank' href="https://twitter.com/SmolKongzNFT"><span className="twitter-icon"></span></a></li>
          <li><a target='_blank' href="https://www.twitch.tv/smolkongz"><span className="twitch-icon"></span></a></li>
          <li><a target='_blank' href="https://www.discord.gg/smolkongz"><span className="discord-icon"></span></a></li>
          <li><a target='_blank' href="https://www.youtube.com/channel/UCma4GEeKUq5FukZVdSEGDXg"><span className="youtube-icon"></span></a></li>
          {/* to add another buttom make sure edit the one below and make sure to edit in hero.js too */}
          {/* <li><a target='_blank' href="https://www.discord.gg/smolkongz"><span className="discord-icon"></span></a></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Join