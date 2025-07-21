import LogoMarket from '../../../logo/marketplace.svg'
import UserMarket from '../../../logo/user.svg'
export const Header = () => {
    return(
        <header>
            <nav>
            <ul>
                <li>
                    <img src={LogoMarket} alt="logoMarket"/>
                    <p className="logo-text">NFT Marketplace</p>
                </li>
               <li>
                <div className="nft-menu">
                <div className="menu"></div>
                <div className="menu"></div>
                <div className="menu"></div>
                </div>
               </li>
               <li className="hide">Marketplace</li>
               <li className="hide">Rankings</li>
               <li className="hide">Connect a wallet</li>
               <li className="hide">
                <button className="btnSign">
                    <img src={UserMarket} alt="logo-market"/>
                    <p className="text-button">Sign Up</p>
                </button>
               </li>
            </ul>
            </nav>
        </header>
    )
}