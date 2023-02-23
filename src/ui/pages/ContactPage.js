import PageTemplate from "../components/templates/page-template";
import ContactContent from "../components/organisms/contact-content";
import Navbar from "../components/organisms/navbar";
import Footer from "../components/organisms/footer";

export default function ContactPage() {
  return (
    <PageTemplate
      header={<Navbar />}
      content={<ContactContent />}
      footer={<Footer />}
    ></PageTemplate>
  );
}
