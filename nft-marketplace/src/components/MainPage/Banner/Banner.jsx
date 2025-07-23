import { useState, useEffect } from "react";
import RocketStart from '../../../logo/RocketStart.svg'
export const Banner = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("https://687e703eefe65e520086b53d.mockapi.io/randomPhotos")
                const data = await res.json()
                const randomId = Math.floor(Math.random() * data.length) + 1
                const findInfo = data.find(info => Number(info.id) === randomId)
                setInfo(findInfo)
            } catch (error) {
                console.error("Error", error)
            }
        }
        fetchUser()
    }, [])
    return (
        <div className="banner">
            <p className="banner-text">Discover digital art & Collect NFTs</p>
            <p className="banner-description">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
            <div className="banner-card">
                <img src={info.avatar} alt={info.description} className="card-image" />
                <p className="card-description">{info.description}</p>
                <div className="user-container">
                    <img src={info.userAvatar} alt="user" className="user-image" />
                    <p className="user-text">{info.user}</p>
                </div>
            </div>
            <button className="banner-button">
                <img src={RocketStart} alt="logo-start" />
                <p className="text-start">Get Started</p>
            </button>
            <div className="banner-rating">
                <p className="rating-text"><span className="rating-span">240k+</span>Total Sale</p>
                <p className="rating-text"><span className="rating-span">100k+</span>Auctions</p>
                <p className="rating-text"><span className="rating-span">100k+</span>Artists</p>
            </div>
        </div>
    )
}