import './style.scss';

import Video from "../Video";
import Audio from '../Audio';

const Listen = () => {
    return (
        <div className='listen' id='listen'>
            <div className="listen-title">
                <h2>DECOUVRE NOTRE <span>UNIVERS</span> MUSICAL</h2>
            </div>
            <div className='listen-players'>
                <div className='listen-players-video'>
                    < Video />
                </div>
                <div className='listen-players-audio'>
                    <div className='listen-players-audio-individual'>
                        < Audio url='https://soundcloud.com/dcheadhigher/laisse-moi?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' />
                    </div>
                    <div className='listen-players-audio-individual'>
                        < Audio url='https://soundcloud.com/dcheadhigher/retiens-moi?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'/>
                    </div>
                    <div className='listen-players-audio-individual'>
                        < Audio url='https://soundcloud.com/dcheadhigher/chaque-seconde?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' />
                    </div>
                    <div className='listen-players-audio-individual'>
                        < Audio url='https://soundcloud.com/dcheadhigher/jai-voulu?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' />
                    </div>

                </div>
    </div>
        </div>
    )
}

export default Listen;