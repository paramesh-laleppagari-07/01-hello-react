import React, { useState } from "react";

export default function ComplexState() {
  const [profile, setProfile] = useState({
    name: "Paramesh",
    address: { city: "Nandyal", state: "AP" },
    skills: ["HTML", "CSS"],
  });

  // update nested field immutably
  const updateCity = newCity =>
    setProfile(prev => ({
      ...prev,
      address: { ...prev.address, city: newCity },
    }));

  const addSkill = skill =>
    setProfile(prev => ({ ...prev, skills: [...prev.skills, skill] }));

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {profile.name}</p>
      <p>City: {profile.address.city}</p>
      <p>Skills: {profile.skills.join(", ")}</p>
      <button onClick={() => updateCity("Hyderabad")}>Move to Hyderabad</button>
      <button onClick={() => addSkill("React")}>Add React Skill</button>
    </div>
  );
}
