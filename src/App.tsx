import { HashRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import Learning from './pages/Learning';
import BusinessEnglishDetail from './pages/BusinessEnglishDetail';
import Advanced from './pages/Advanced';
import League from './pages/League';
import My from './pages/My';
import MyRoom from './pages/MyRoom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/learning/english" element={<BusinessEnglishDetail />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/league" element={<League />} />
          <Route path="/my" element={<My />} />
          <Route path="/myroom" element={<MyRoom />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
