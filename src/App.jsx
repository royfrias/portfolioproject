import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import ContactMeForm from "./pages/ContactMeForm";
import Homepage from "./pages/Homepage";
import Hobbies from "./pages/Hobbies";
import Projects from "./pages/Projects";
import WorkHistory from "./pages/WorkHistory";
import PageLayout from "./pages/PageLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="contactme" element={<ContactMeForm />} />
        <Route path="hobbies" element={<Hobbies />} />
        <Route path="projects" element={<Projects />} />
        <Route path="workhistory" element={<WorkHistory />} />
        <Route path="pagelayout" element={<PageLayout />} />
        <Route path="contactme" element={<ContactMeForm />}>
          <Route path="form" element={<p>Form</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
