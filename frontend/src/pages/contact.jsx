import Header from "../components/header";
import Footer from "../components/footer";
import ContactForm from "../components/contactform";
import "../styles/contact.css";

function Contact() {
  return (
    <>
      <Header />

      <main>
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}

export default Contact;