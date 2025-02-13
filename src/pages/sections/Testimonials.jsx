import React, { useState } from "react";
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
        <div className="hs-accordion pb-3 active" id="hs-suggestify-question-one">
          <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="true" aria-controls="hs-suggestify-answer-one">
            What is Suggestify?
            <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>
          <div id="hs-suggestify-answer-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-suggestify-question-one">
            <p className="text-gray-600">
              Suggestify is a platform that provides personalized recommendations based on user preferences and interests, helping users discover new products, content, or experiences.
            </p>
          </div>
        </div>

        <div className="hs-accordion pt-6 pb-3" id="hs-suggestify-question-two">
          <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-suggestify-answer-two">
            How does Suggestify generate recommendations?
            <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>
          <div id="hs-suggestify-answer-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-suggestify-question-two">
            <p className="text-gray-600">
              Suggestify uses advanced algorithms, including collaborative filtering and content-based filtering, to analyze user behavior and preferences, providing tailored suggestions that are relevant and personalized.
            </p>
          </div>
        </div>

        <div className="hs-accordion pt-6 pb-3" id="hs-suggestify-question-three">
          <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-suggestify-answer-three">
            Is my data secure with Suggestify?
            <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>
          <div id="hs-suggestify-answer-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-suggestify-question-three">
            <p className="text-gray-600">
              Yes, Suggestify prioritizes user privacy and data security. We employ industry-standard security measures to protect user data and ensure that it is only used for generating personalized recommendations.
            </p>
          </div>
        </div>

        <div className="hs-accordion pt-6 pb-3" id="hs-suggestify-question-four">
          <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-suggestify-answer-four">
            Can I customize my recommendations on Suggestify?
            <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>
          <div id="hs-suggestify-answer-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-suggestify-question-four">
            <p className="text-gray-600">
              Absolutely! Suggestify allows users to customize their preferences, ensuring that the recommendations align closely with their tastes and interests.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Testimonials;
