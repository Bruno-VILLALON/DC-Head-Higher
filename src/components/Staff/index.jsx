import './style.scss'

import Member from "../Member";

import fimage1 from '../../assets/images/Eddy.jpg'
import fimage2 from '../../assets/images/Angelo.jpg'
import fimage3 from '../../assets/images/Loic.jpg'
import fimage4 from '../../assets/images/Bruno.jpg'

const Staff = () => {
    return (
        <div id='staff'>
            <h2>STAFF</h2>
            <div className="members">
                <div className='members-duo'>
                    < Member image={fimage1} title='Eddy' description='chant et guitare' />
                    < Member image={fimage2} title='Angelo' description='batterie' />
                </div>
                <div className='members-duo'>
                    < Member image={fimage3} title='Loïc' description='guitare et solo' />
                    < Member image={fimage4} title='Bruno' description='basse' />
                </div>
                
            </div>
        </div>
    )
}

export default Staff;