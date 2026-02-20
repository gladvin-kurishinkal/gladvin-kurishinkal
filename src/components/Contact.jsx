const Contact = () => {
    return (
        <section id="contact" className="section" style={{ textAlign: 'center', marginBottom: '100px' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <h2 className="title">Get In Touch</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '50px', fontSize: '1.2rem' }}>
                    Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll get back to you!
                </p>
                <a href="mailto:gladvinkurishinkal@gmail.com" className="btn">Say Hello</a>
            </div>
        </section>
    );
};

export default Contact;
