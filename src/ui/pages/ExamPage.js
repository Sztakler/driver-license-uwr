import PageTemplate from "../components/templates/page-template/PageTemplate";
import ExamContent from "../components/organisms/ExamContent/ExamContent";
import Navbar from "../components/organisms/navbar/Navbar";
import Footer from "../components/organisms/footer/Footer";

export default function HomePage() {
  return (
    <PageTemplate
      header={<Navbar />}
      content={<ExamContent />}
      footer={<Footer />}
    ></PageTemplate>
  );
}
