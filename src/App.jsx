import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import ChallengeCard from "./shared/ui/ChallengeCard";
import { CHALLENGE_MOCK_DATAS_1 } from "./shared/config/challengeConfig";
import WorldPage from "./pages/world";
import CreatePage from "./pages/create";
import LoginPage from "./pages/login";

function App() {
  return (
    <div className="flex h-dvh w-full justify-center bg-white">
      <div className="relative flex w-full max-w-[600px] flex-col bg-background">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/world" element={<WorldPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
