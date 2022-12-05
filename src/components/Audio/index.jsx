import ReactPlayer from 'react-player';

import './style.scss';

const Audio = (props) => {
    return (
        <div className="audio-player-container">
            <ReactPlayer
                url={props.url}
                className='audio-player'
                controls
                width='calc(200px + 20vw)'
                height='80px'
            />
        </div>
    )
}

export default Audio