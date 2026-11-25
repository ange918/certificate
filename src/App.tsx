import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Shell } from "./components/Shell";
import { GovernmentPage } from "./pages/GovernmentPage";
import { HomePage } from "./pages/HomePage";
import { InstitutionsPage } from "./pages/InstitutionsPage";
import { ReportPage } from "./pages/ReportPage";
import { SearchPage } from "./pages/SearchPage";
import { ServicesPage } from "./pages/ServicesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SourcesPage } from "./pages/SourcesPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<HomePage />} />
          <Route path="gouvernement" element={<GovernmentPage />} />
          <Route path="institutions" element={<InstitutionsPage />} />
          <Route path="demarches" element={<ServicesPage />} />
          <Route path="signaler" element={<ReportPage />} />
          <Route path="recherche" element={<SearchPage />} />
          <Route path="sources" element={<SourcesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
