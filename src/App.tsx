import { useCallback, useState } from "react";
import VolleyBall from "./components/VolleyBall";
import Logo from "./components/Logo";
import Reveal from "./components/Reveal";

const PLAYER = "Nguyễn Thành Phát";

const floaters = [
  { left: "6%", top: "14%", size: 46, delay: 0, dur: 7 },
  { left: "90%", top: "10%", size: 62, delay: 1.2, dur: 8 },
  { left: "3%", top: "46%", size: 70, delay: 2, dur: 9 },
  { left: "94%", top: "52%", size: 44, delay: 0.6, dur: 6.5 },
  { left: "8%", top: "80%", size: 56, delay: 1.8, dur: 7.5 },
  { left: "88%", top: "86%", size: 74, delay: 0.3, dur: 8.5 },
];

function Divider() {
  return (
    <Reveal className="flex items-center justify-center gap-3 sm:gap-4">
      <div className="divider-line w-full max-w-[220px] flex-1" />
      <VolleyBall mono className="h-8 w-8 shrink-0 anim-spin-slow sm:h-10 sm:w-10" />
      <div className="divider-line w-full max-w-[220px] flex-1" />
    </Reveal>
  );
}

function Signature() {
  return (
    <Reveal className="mx-auto w-44 sm:w-56">
      <svg viewBox="0 0 240 110" className="w-full" fill="none" stroke="#14306b" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path pathLength={600} className="sign-path" style={{ ["--len" as string]: 600 }} d="M18 88 C40 70 70 48 98 8 C92 50 84 78 86 94 C96 62 112 40 128 34 C120 56 122 76 134 80 C150 84 160 58 172 54 C170 70 176 76 190 72 C204 68 214 58 224 50" />
        <path pathLength={200} className="sign-path" style={{ ["--len" as string]: 200 }} d="M30 98 C80 90 160 96 226 84" strokeWidth="1.6" opacity=".7" />
      </svg>
    </Reveal>
  );
}

function NetIllustration() {
  const [spiking, setSpiking] = useState(false);
  const [count, setCount] = useState(0);
  const [bursts, setBursts] = useState<number[]>([]);

  const hit = useCallback(() => {
    setSpiking(false);
    requestAnimationFrame(() => setSpiking(true));
    setCount((c) => c + 1);
    const id = Date.now();
    setBursts((b) => [...b, id]);
    setTimeout(() => setBursts((b) => b.filter((x) => x !== id)), 900);
  }, []);

  return (
    <div className="relative w-full max-w-[330px]">
      {/* net */}
      <svg viewBox="0 0 330 190" className="absolute inset-0 h-full w-full anim-net" fill="none">
        <defs>
          <linearGradient id="netFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#14306b" stopOpacity=".05" />
            <stop offset=".5" stopColor="#14306b" stopOpacity=".7" />
            <stop offset="1" stopColor="#14306b" stopOpacity=".9" />
          </linearGradient>
        </defs>
        <g stroke="url(#netFade)" strokeWidth="1.2">
          {Array.from({ length: 12 }).map((_, i) => (
            <path key={`h${i}`} d={`M${60 + i * 6} ${20 + i * 10} L330 ${-8 + i * 12}`} opacity={0.35} />
          ))}
          {Array.from({ length: 14 }).map((_, i) => (
            <path key={`v${i}`} d={`M${130 + i * 15} ${10 - i * 1.5} L${100 + i * 17} 130`} opacity={0.35} />
          ))}
        </g>
        <path d="M40 40 L330 0" stroke="#14306b" strokeWidth="4" strokeLinecap="round" />
        {/* lightning */}
        <path d="M18 74 l14 -10 l-4 12 l12 -6" stroke="#2f6bd6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* ball */}
      <div className="relative z-10 pt-6">
        <button
          type="button"
          onClick={hit}
          aria-label="Đập bóng"
          className="group relative block h-28 w-28 cursor-pointer rounded-full outline-none sm:h-32 sm:w-32"
        >
          <span className={`block h-full w-full ${spiking ? "anim-spike" : ""}`} onAnimationEnd={() => setSpiking(false)}>
            <span className="block h-full w-full transition-transform duration-300 group-hover:scale-110 group-active:scale-90">
              <VolleyBall className="h-full w-full anim-spin-ball drop-shadow-[0_10px_14px_rgba(11,31,74,.35)]" />
            </span>
          </span>
          {bursts.map((id) => (
            <span key={id} className="pointer-events-none absolute inset-0">
              <span className="absolute inset-0 rounded-full border-2 border-[#f2b83b]" style={{ animation: "ripple .8s ease-out forwards" }} />
              {Array.from({ length: 10 }).map((_, i) => {
                const a = (i / 10) * Math.PI * 2;
                return (
                  <span
                    key={i}
                    className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full"
                    style={{
                      background: i % 2 ? "#f2b83b" : "#2f6bd6",
                      ["--tx" as string]: `${Math.cos(a) * 70}px`,
                      ["--ty" as string]: `${Math.sin(a) * 70}px`,
                      animation: "burst .8s ease-out forwards",
                    }}
                  />
                );
              })}
            </span>
          ))}
        </button>
        <div className="mt-3 -rotate-6 pl-2 font-hand text-xl font-bold leading-6 text-navy sm:text-2xl sm:leading-7">
          Cùng nhau
          <br />
          vì một đội bóng mạnh!
        </div>
        <p className="mt-2 pl-2 text-[11px] italic text-navy/60">
          {count === 0 ? "👆 Chạm vào quả bóng để đập bóng!" : `Bạn đã đập ${count} cú! 🔥`}
        </p>
      </div>
    </div>
  );
}

function Wave() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 overflow-hidden sm:h-32">
      <svg className="wave-track slow absolute bottom-0 h-full" viewBox="0 0 2400 120" preserveAspectRatio="none">
        <path d="M0 60 C200 20 400 100 600 60 S1000 20 1200 60 S1600 100 1800 60 S2200 20 2400 60 V120 H0Z" fill="#f2b83b" opacity=".35" />
      </svg>
      <svg className="wave-track absolute bottom-0 h-[80%]" viewBox="0 0 2400 120" preserveAspectRatio="none">
        <path d="M0 70 C200 30 400 110 600 70 S1000 30 1200 70 S1600 110 1800 70 S2200 30 2400 70 V120 H0Z" fill="#14306b" opacity=".18" />
      </svg>
    </div>
  );
}

export default function App() {
  return (
    <div className="stage-bg relative min-h-screen overflow-x-hidden pb-16 pt-8 sm:pt-12">
      {/* ===== Background effects ===== */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {floaters.map((f, i) => (
          <div
            key={i}
            className={`absolute opacity-25 anim-float ${i > 3 ? "hidden sm:block" : ""}`}
            style={{ left: f.left, top: f.top, width: f.size, height: f.size, animationDelay: `${f.delay}s`, animationDuration: `${f.dur}s` }}
          >
            <VolleyBall className="h-full w-full anim-spin-ball" />
          </div>
        ))}
        {/* ball flying across the screen */}
        <div className="fly-wrap absolute bottom-[8%] left-0">
          <div className="fly-inner">
            <VolleyBall className="h-10 w-10 anim-spin-ball opacity-70 drop-shadow-lg sm:h-14 sm:w-14" />
          </div>
        </div>
        {/* decorative court lines */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-3xl px-3 sm:px-6">
        {/* ===== Logo hero ===== */}
        <header className="mb-6 flex flex-col items-center text-center sm:mb-8">
          <div className="anim-pop">
            <Logo className="h-44 w-44 sm:h-56 sm:w-56" />
          </div>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ffe28a] sm:text-xs">
            Thư triệu tập • Volleyball Team
          </p>
        </header>

        {/* ===== Letter ===== */}
        <article className="paper relative overflow-hidden rounded-xl p-3 sm:rounded-2xl sm:p-5">
          {/* watermark ball */}
          <div className="pointer-events-none absolute left-1/2 top-[48%] -z-0 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 opacity-[0.045]">
            <VolleyBall mono className="h-full w-full anim-spin-slow" />
          </div>

          <div className="paper-border relative rounded-lg px-5 pb-20 pt-8 sm:px-12 sm:pb-24 sm:pt-12">
            {/* corner ornaments */}
            {["left-2 top-2", "right-2 top-2 rotate-90", "bottom-2 right-2 rotate-180", "bottom-2 left-2 -rotate-90"].map((pos) => (
              <svg key={pos} viewBox="0 0 40 40" className={`absolute h-8 w-8 sm:h-10 sm:w-10 ${pos}`} fill="none" stroke="#f2b83b" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 36 V10 Q4 4 10 4 H36" />
                <path d="M12 36 V16 Q12 12 16 12 H36" strokeWidth="1.2" />
                <circle cx="4" cy="4" r="2.5" fill="#f2b83b" />
              </svg>
            ))}

            {/* Team name */}
            <Reveal className="text-center">
              <h2 className="font-display text-base font-extrabold uppercase tracking-wide text-navy sm:text-2xl">
                Đội tuyển bóng chuyền 11TN2
              </h2>
            </Reveal>
            <div className="mt-3">
              <Divider />
            </div>

            {/* Title */}
            <Reveal className="mt-6 text-center sm:mt-8" delay={100}>
              <h1 className="font-display text-[2.1rem] font-black uppercase leading-tight tracking-tight text-navy sm:text-6xl">
                Bức thư dự tuyển
              </h1>
              <h3 className="mt-1 font-display text-xl font-extrabold leading-snug text-navy sm:text-4xl">
                Cầu thủ <span className="shimmer-text">{PLAYER}</span>
              </h3>
            </Reveal>
            <div className="mt-4 sm:mt-5">
              <Divider />
            </div>

            {/* Body */}
            <div className="mt-8 space-y-5 text-[15.5px] leading-[1.75] text-navy-deep sm:mt-10 sm:space-y-6 sm:text-[19px] sm:leading-[1.8]">
              <Reveal as="p" className="font-medium italic">
                Thân gửi: Dự tuyển cấp lớp.
              </Reveal>

              <Reveal as="p" className="indent-6 text-justify sm:indent-10">
                Chúng tôi – tập thể Đội tuyển bóng chuyền 11TN2 – xin được trân trọng gửi đến ban tuyển chọn cấp lớp bức thư này để đề cử bạn{" "}
                <span className="hl-name">{PLAYER}</span> tham gia dự tuyển đội bóng chuyền của lớp.
              </Reveal>

              <Reveal as="p" className="indent-6 text-justify sm:indent-10">
                Chúng tôi thấy <span className="hl-name">{PLAYER}</span> là một người có tinh thần thể thao cao, luôn nghiêm túc trong tập luyện, có ý chí kiên trì và không ngại khó khăn. Bạn sở hữu thể lực tốt, khả năng bật nhảy và phản xạ nhanh, đặc biệt là có kỹ thuật xử lý bóng tốt, cùng với tinh thần đồng đội, sẵn sàng hỗ trợ các thành viên khác trong mọi tình huống.
              </Reveal>

              <Reveal as="p" className="indent-6 text-justify sm:indent-10">
                Không chỉ có kỹ năng chơi bóng, <span className="hl-name">{PLAYER}</span> còn là người có thái độ tích cực, hòa đồng, luôn mang lại năng lượng tốt cho tập thể. Chúng tôi tin rằng bạn sẽ là một mảnh ghép quan trọng, góp phần làm nên sức mạnh cho đội tuyển bóng chuyền 11TN2.
              </Reveal>

              <Reveal as="p" className="indent-6 text-justify sm:indent-10">
                Vì vậy, chúng tôi rất mong ban tuyển chọn cấp lớp xem xét và tạo điều kiện để <span className="hl-name">{PLAYER}</span> được tham gia dự tuyển.
              </Reveal>

              <Reveal as="p" className="indent-6 sm:indent-10">
                Xin chân thành cảm ơn!
              </Reveal>
            </div>

            {/* Footer: net + signature */}
            <div className="mt-8 flex flex-col-reverse items-center gap-8 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
              <Reveal className="flex w-full justify-center sm:w-auto sm:justify-start">
                <NetIllustration />
              </Reveal>

              <Reveal className="w-full max-w-[300px] text-center sm:w-auto sm:max-w-none" delay={150}>
                <p className="font-display text-lg font-bold text-navy sm:text-xl">HLV trưởng</p>
                <p className="font-display text-lg font-bold text-navy sm:text-xl">Nguyễn Văn Kiên</p>
                <Signature />
                <div className="mx-auto mt-1 h-px w-full bg-navy/60" />
                <p className="mt-2 text-[13px] italic text-navy sm:text-sm">
                  {PLAYER} đánh ở vị trí biên 2
                </p>
              </Reveal>
            </div>
          </div>

          <Wave />
        </article>

        <p className="mt-6 text-center text-xs text-white/60">
          🏐 Đội tuyển bóng chuyền 11TN2 — Cùng nhau vì một đội bóng mạnh!
        </p>
      </main>
    </div>
  );
}
