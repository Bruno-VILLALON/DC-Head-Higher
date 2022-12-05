import './style.scss'

const Contact = () => {
    return (
        <div className='contact' id="contact">
            <h2>CONTACTE NOUS</h2>
            <form>
                <input type="text" placeholder="Prénom, Nom" required />
                <input type="email" placeholder="E-mail" required />
                <textarea name="message" placeholder="Ton message ......"></textarea>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    )
}

export default Contact;