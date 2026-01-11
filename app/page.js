import Header from './components/Header';
import Summary from './components/Summary';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Languages from './components/Languages';
import Footer from './components/Footer';
import DownloadCard from './components/DownloadCard';
import { cvData } from './data/cvData';

export default function Home() {
  return (
    <div className="min-h-screen">
      <DownloadCard />
      <main className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="rounded-lg p-8 shadow-sm sm:p-12">
          <Header name={cvData.name} contact={cvData.contact} />
          <Summary summary={cvData.summary} />
          <WorkExperience workHistory={cvData.workHistory} />
          {/* <Education education={cvData.education} />
          <Languages languages={cvData.languages} /> */}
          <Footer />
        </div>
      </main>
    </div>
  );
}

