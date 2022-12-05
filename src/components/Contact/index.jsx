import './style.scss'

const Contact = () => {
    return (
        <div className='contact' id="contact">
            <h2>CONTACTE NOUS</h2>
            <form
                name='contact'
                method='POST'
                data-netlify='true'
                data-netlify-recaptcha='true'
                onSubmit='submit'
                >
                <input type='hidden' name='form-name' value='contact' />
                <input type="text" name='name' placeholder="Prénom, Nom" required />
                <input type="email" name='email' placeholder="E-mail" required />
                <textarea name="message" placeholder="Ton message ......"></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default Contact;
