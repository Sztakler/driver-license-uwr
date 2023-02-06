import PageTemplate from "../components/templates/page-template/PageTemplate";
import HomeContent from "../components/organisms/HomeContent/HomeContent";
import Navbar from "../components/organisms/navbar/Navbar";
import Footer from "../components/organisms/footer/Footer";

export default function HomePage() {
  return (
    <PageTemplate
      header={<Navbar />}
      content={<HomeContent />}
      footer={<Footer />}
    ></PageTemplate>
  );
}
