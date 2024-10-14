import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className='secTitle'>Contact</h1>
        <form action='https://formspree.io/f/mwpkklaw' method='post'>
            <div className='formArea'>
                <label htmlForm="name" hidden>
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required                
                />
            </div>
            <div className='formArea'>
                <label htmlForm="email" hidden>
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required                
                />
            </div>
            <div className='formArea'>
                <label htmlForm="message" hidden>
                    Message
                </label>
                <textarea
                 name="message"
                 id="message"
                 placeholder="Message"
                 required>
                </textarea>
            </div>
            <input className="btn" type="submit" value="Send Message" />
        </form>
    </section>
  );
}

export default Contact;