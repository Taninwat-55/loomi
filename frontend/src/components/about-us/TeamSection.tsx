const team = [
  {
    name: "Hedvig",
    role: "UX Designer / Grundare",
    bio: "Fokuserar på att skapa användarupplevelser som känns naturliga."
  },
  {
    name: "Ice",
    role: "UX Designer / Grundare",
    bio: "Fokuserar på att skapa användarupplevelser som känns naturliga."
  },
  {
    name: "Milad",
    role: "UX Designer / Grundare",
    bio: "Fokuserar på att skapa användarupplevelser som känns naturliga."
  }
];

export const TeamSection = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-nerko mb-16 text-[#282B4A]">Ansiktena bakom Loomi</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {team.map((member, index) => (
          <div key={index} className="group">
            <div className="space-y-2">
              <h3 className=" text-[26px] font-bold text-[#282B4A] tracking-tight">
                {member.name}
              </h3>
              <p className="text-[#5A6D5A] font-medium uppercase text-[20px] tracking-wider">
                {member.role}
              </p>
              <p className="text-[#282B4A] text-[20px] leading-relaxed pt-2">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};