import React from 'react';

import PageTemplate from '../components/templates/page-template';
import ExamContent from '../components/organisms/contents/Exam';
import Navbar from '../components/organisms/navbar';
import Footer from '../components/organisms/footer';

export default function HomePage() {
  return (
    <PageTemplate
      header={<Navbar />}
      content={<ExamContent />}
      footer={<Footer />}
    />
  );
}
