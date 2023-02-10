import PageTemplate from "../components/templates/page-template/PageTemplate";
import ContactContent from "../components/organisms/ContactContent/ContactContent";
import Navbar from "../components/organisms/navbar/Navbar";
import Footer from "../components/organisms/footer/Footer";

export default function ContactPage() {
  return (
    <PageTemplate
      header={<Navbar />}
      content={<ContactContent />}
      footer={<Footer />}
    ></PageTemplate>
  );
}
