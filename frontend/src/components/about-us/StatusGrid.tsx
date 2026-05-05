export const StatsGrid = () => {
  const points = [
    { num: "01", title: "Ingen startsträcka", text: "Tack vare våra år av gemensamma projekt vet vi exakt vem som gör vad. Vi jobbar parallellt istället för efter varandra." },
    { num: "02", title: "Färsk spetskompetens", text: "Vi är utbildade i de senaste teknikerna inom prestanda, UX och tillgänglighet. Ni får lösningar som följer 2026 års standard." },
    { num: "03", title: "Prestigelös energi", text: "Som nyexaminerade är vi hungriga på att visa vad vi går för. Vi är flexibla, snabbfotade och brinner för att bygga fundament." }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 text-[#282B4A]">
      {points.map((p) => (
        <div key={p.num} className="space-y-5 max-w-xl">
          <div className="flex items-center gap-4">
            <span className="text-6xl font-nerko text-[#5A6D5A]">
              {p.num}
            </span>
            <h4 className="text-2xl font-medium border-b-2 border-[#282B4A] pb-1 tracking-tight">
              {p.title}
            </h4>
          </div>
          <p className="text-[19px] opacity-80 leading-relaxed font-medium">
            {p.text}
          </p>
        </div>
      ))}
    </section>
  );
};