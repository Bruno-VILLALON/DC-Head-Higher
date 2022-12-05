import ReactPlayer from 'react-player';

import './style.scss';

const Video = () => {
    return (
        <div className="player-container">
            <ReactPlayer
                url='https://www.youtube.com/watch?v=doHA6XN9h58'
                className='player'
                controls
                width='calc(200px + 20vw)'
                height='calc(50% + 15vh)'
            />
        </div>
    )
}

export default Video

