import './style.scss';

const Member = (props) => {
    return (
        <div className="member">
            <div className="member-image">
                <img src={props.image} alt=''/>
            </div>
            <div className="member-text">
                <h3 className='member-text-name'> {props.title} </h3>
                <p className='member-text-detail'>{props.description}</p>
            </div>
        </div>
    )
}

export default Member