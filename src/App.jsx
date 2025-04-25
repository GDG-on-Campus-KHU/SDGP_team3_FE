import { Route, Routes } from "react-router-dom";
import { Btn } from "./shared/ui/button";
import Header from "./shared/ui/header";
import Main from "./pages/main";

function App() {
  return (
    <div className="flex h-dvh w-full justify-center">
      <div className="relative flex w-full max-w-[600px] flex-col bg-background">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<p>챌린지 생성 페이지</p>} />
          <Route path="/world" element={<p>나의 세계 페이지</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
