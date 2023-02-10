import PageTemplate from "../components/templates/page-template";
import HomeContent from "../components/organisms/home-content";
import Navbar from "../components/organisms/navbar";
import Footer from "../components/organisms/footer";

export default function HomePage() {
  return (
    <PageTemplate
      header={<Navbar />}
      content={<HomeContent />}
      footer={<Footer />}
    ></PageTemplate>
  );
}
