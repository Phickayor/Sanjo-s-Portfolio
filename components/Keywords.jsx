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
    <div className="flex flex-wrap gap-10 py-10">
      {terms.map((term) => (
        <div className="text-4xl p-8 rounded-[30px] text-white font-poppins-light bg-black ">{term}</div>
      ))}
    </div>
  );
}

export default Keywords;
