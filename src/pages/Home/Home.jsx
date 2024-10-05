import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitileCards from '../../components/TitileCards/TitileCards'
function Home() {
  return (
    <div className="home">
        <Navbar/>
        <div className="hero">
            <img src={hero_banner} className='banner-img'/>
            <div className="hero-caption">
                <img src={hero_title} className='caption-img'/>
                <p>
                    Discovering his ties to secret ancient order,a young
                    man living in morden Istanbul embarks on a quest to save the city from an immoral enemy.
                </p>
                <div className="hero_btns">
                    <button className='btn dark-btn'><img src={play_icon}/>Play</button>
                    <button className='btn'><img src={info_icon}/>More Info</button>
                </div>
                <TitileCards/>
            </div>
        </div>
    </div>
  )
}

export default Home;