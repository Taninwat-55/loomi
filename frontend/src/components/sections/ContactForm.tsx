"use client";

import { Mail } from "lucide-react";

interface FieldProps {
  label: string;
  placeholder: string;
  type?: string;
  isTextArea?: boolean;
}

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const fields: FieldProps[] = [
    { label: "Förnamn", placeholder: "Ange förnamn" },
    { label: "Efternamn", placeholder: "Ange efternamn" },
    { label: "Telefonnummer", placeholder: "Ange nummer", type: "tel" },
    { label: "Email", placeholder: "Ange email", type: "email" },
    { label: "Företag", placeholder: "Ange företag" },
    {
      label: "Meddelande",
      placeholder: "Ditt meddelande...",
      isTextArea: true,
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Vänster: Text och Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <p className="text-5xl font-nerko text-[#282B4A] leading-tight font-bold">
              Vi svarar snabbare än tåget
            </p>
            <p className="text-xl text-[#282B4A] opacity-90 max-w-md leading-relaxed">
              Vi vet att din tid är värdefull. Skicka ditt meddelande, så
              återkommer vi med ett förslag på hur vi kan bygga ert digitala
              fundament tillsammans.
            </p>
          </div>

          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-2xl font-medium text-[#282B4A] decoration-1 underline-offset-8 block">
                Kontaktuppgifter
              </span>
            </div>

            <a
              href="mailto:loomi@gmail.com"
              className="flex items-center gap-3 text-xl font-bold text-[#282B4A] transition-all group"
            >
              <div className="bg-[#5A6D5A] p-2 rounded-full text-[#EEEBDA] transition-transform group-hover:scale-110">
                <Mail size={24} />
              </div>

              <span className="group-hover:underline transition-opacity">
                loomi@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* Höger: Formulär-kortet */}
        <div className="bg-[#5A6D5A] rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#282B4A]/5">
          <p className="text-3xl font-nerko text-[#EEEBDA] mb-8 underline tracking-wide decoration-1 underline-offset-4 font-medium">
            Redo för nästa stopp?
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fields.slice(0, 4).map((field) => (
                <FormInput key={field.label} {...field} />
              ))}
            </div>

            {fields.slice(4).map((field) => (
              <FormInput key={field.label} {...field} />
            ))}

            <button
              type="submit"
              className="w-full bg-[#EEEBDA] text-[18px] text-[#5A6D5A] font-medium py-5 rounded-xl hover:bg-[#b8c7a8] hover:scale-[1.02] active:scale-[0.98] transition-all mt-4 shadow-md tracking-widest text-sm"
            >
              Skicka meddelande
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const FormInput = ({
  label,
  placeholder,
  type = "text",
  isTextArea = false,
}: FieldProps) => {
  const baseClass =
    "w-full p-4 rounded-xl bg-[#EEEBDA] text-[#5A6D5A] outline-none focus:ring-2 focus:ring-[#C5D4B5] transition-all placeholder:text-[#5A6D5A] placeholder:opacity-40";

  return (
    <div className="space-y-2 flex flex-col">
      <span className="text-[#EEEBDA] font-medium ml-1 text-sm uppercase tracking-wider">
        {label}
      </span>
      {isTextArea ? (
        <textarea
          rows={4}
          placeholder={placeholder}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input type={type} placeholder={placeholder} className={baseClass} />
      )}
    </div>
  );
};
