import React from "react";
const terms = [
  "Graphics Design",
  "Branding",
  "Competitor Analysis",
  "User flow ",
  "UI Design",
  "High Fidelity prototypes",
  "Ux research",
  "Mockups",
  "Wireframes"
];
function Keywords() {
  return (
    <div className="flex flex-wrap md:gap-10 gap-5 py-10">
      {terms.map((term) => (
        <div className="text-2xl md:text-4xl p-4  md:p-6 lg:p-8 rounded-[30px] text-white font-poppins-light bg-black ">{term}</div>
      ))}
    </div>
  );
}

export default Keywords;
