import clsx from "clsx";
import FooterBackground from "./footerBackground";
import { useLocation, useNavigate } from "react-router-dom";

export default function Tabbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  const goToWorld = () => navigate("/world");
  const goToMain = () => navigate("/");
  const goToCreate = () => navigate("/create");
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] z-bar">
      {/* 비율 유지용 래퍼 */}
      <div className="relative w-full aspect-[401/59]">
        <FooterBackground />

        {/* 중앙 버튼 */}
        <button
          className="absolute left-1/2 -translate-x-1/2 bottom-[60%] w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer"
          onClick={goToCreate}
        >
          <img src="/icons/plusIcon.svg" alt="추가 아이콘" />
        </button>

        {/* 아이콘들 */}
        <div className="absolute top-[35%] w-full flex justify-between px-12">
          <button
            className={clsx(pathname === "/world" && "opacity-20")}
            onClick={goToMain}
          >
            <img src="/icons/challengeIcon.svg" alt="챌린지 아이콘" />
          </button>
          <button
            className={clsx(pathname === "/" && "opacity-20")}
            onClick={goToWorld}
          >
            <img src="/icons/worldIcon.svg" alt="세계 아이콘" />
          </button>
        </div>
      </div>
    </div>
  );
}
