import PageTemplate from "../components/templates/page-template";
import ExamContent from "../components/organisms/exam-content";
import Navbar from "../components/organisms/navbar";
import Footer from "../components/organisms/footer";

export default function HomePage() {
  return (
    <PageTemplate
      header={<Navbar />}
      content={<ExamContent />}
      footer={<Footer />}
    ></PageTemplate>
  );
}
