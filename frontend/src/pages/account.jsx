import Header from "../components/header";
import Footer from "../components/footer";
import AccountForm from "../components/accountform";
import "../styles/account.css";

function Account() {
  return (
    <>
      <Header />

      <main>
        <AccountForm />
      </main>

      <Footer />
    </>
  );
}

export default Account;