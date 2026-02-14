import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import FAQ from "./Pages/FAQ";

import Blogs from "./Pages/Blogs";
import SoftGlamMastery from "./Pages/SoftGlamMastery";
import ClosetResetBlueprint from "./Pages/ClosetResetBlueprint";
import PerfumeLayeringDepth from "./Pages/PerfumeLayeringDepth";
import MorningFacePrecision from "./Pages/MorningFacePrecision";
import LightingAndMakeupTruth from "./Pages/LightingAndMakeupTruth";
import LuxuryHairSystem from "./Pages/LuxuryHairSystem";
import SignatureLookFramework from "./Pages/SignatureLookFramework";
import MinimalDarkSkinRefinement from "./Pages/MinimalDarkSkinRefinement";
import EffortlessDateNight from "./Pages/EffortlessDateNight";
import PsychologyOfPolish from "./Pages/PsychologyOfPolish";

const App = () => {
  return (
    <div className="bg-neutral-950 min-h-screen text-white">
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/soft-glam" element={<SoftGlamMastery />} />
        <Route path="/blogs/closet-reset" element={<ClosetResetBlueprint />} />
        <Route path="/blogs/perfume-layering" element={<PerfumeLayeringDepth />} />
        <Route path="/blogs/morning-face" element={<MorningFacePrecision />} />
        <Route path="/blogs/makeup-lighting" element={<LightingAndMakeupTruth />} />
        <Route path="/blogs/luxury-hair" element={<LuxuryHairSystem />} />
        <Route path="/blogs/signature-look" element={<SignatureLookFramework />} />
        <Route path="/blogs/minimal-dark-skin" element={<MinimalDarkSkinRefinement />} />
        <Route path="/blogs/date-night" element={<EffortlessDateNight />} />
        <Route path="/blogs/psychology-style" element={<PsychologyOfPolish />} />
      </Routes>
    </div>
  );
};

export default App;
