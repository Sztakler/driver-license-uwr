import PageTemplate from "../components/templates/page-template/PageTemplate";
import LearningContent from "../components/organisms/LearningContent/LearningContent";
import Navbar from "../components/organisms/navbar/Navbar";
import Footer from "../components/organisms/footer/Footer";

export default function LearningPage() {
  return (
    <PageTemplate
      header={<Navbar />}
      content={<LearningContent />}
      footer={<Footer />}
    ></PageTemplate>
  );
}
