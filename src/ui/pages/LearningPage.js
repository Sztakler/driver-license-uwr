import PageTemplate from "../components/templates/page-template";
import LearningContent from "../components/organisms/learning-content";
import Navbar from "../components/organisms/navbar";
import Footer from "../components/organisms/footer";

export default function LearningPage() {
  return (
    <PageTemplate
      header={<Navbar />}
      content={<LearningContent />}
      footer={<Footer />}
    ></PageTemplate>
  );
}
