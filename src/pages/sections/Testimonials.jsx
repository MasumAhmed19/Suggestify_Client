import React, { useState } from "react";
import FAQSection from "../HomePage/FAQSection";
// import 'preline/dist/preline.min.css';

const Testimonials = () => {


  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid md:grid-cols-5 gap-10">
    <div className="md:col-span-2">
      <div className="max-w-xs">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Frequently<br />asked questions</h2>
        <p className="mt-1 hidden md:block text-gray-600">Answers to the most frequently asked questions about Suggestify.</p>
      </div>
    </div>

    <div className="md:col-span-3">
      <div className="hs-accordion-group divide-y divide-gray-200">
        <FAQSection />
      </div>
    </div>
  </div>
</div>

  );
};

export default Testimonials;
