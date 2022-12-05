import './style.scss';

import aboutImage from '../../assets/images/groupe.jpg'

const Actu = () => {
    return (
        <div className='actu' id="actu">
            <div className="actu-image">
                <img src={aboutImage} alt='actu' />
            </div>
            <div className="actu-text">
                <h2>REJOINS NOUS SUR FACEBOOK</h2>
                <p>Ne rate aucun évenement en nous rejoignant sur les réseaux sociaux. News, photos, vidéos et dates des concerts</p>
                <button><a href='https://www.facebook.com/DCheadhigher' target='_blank'>NOUS SUIVRE</a></button>
            </div>
        </div>
    )
}

export default Actu;