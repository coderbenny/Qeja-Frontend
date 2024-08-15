import React from "react";
import DefaultAccordion from "../ui/DefaultAccordion";

function FAQ() {
  const faqs = [
    {
      id: 1,
      title:
        "How do I register as a property owner, roommate, or rental seeker on Qeja?",
      content:
        "To register on Qeja, click on the learn more button on the homepage. You will be directed to a signup page and prompted to select your details and choose your role: Property Owner, Roommate, or Rental Seeker. Fill out the registration form with your details, and once submitted, you'll receive a confirmation showing that your registration is successful.",
    },
    {
      id: 2,
      title: "How can property owners manage their property listings on Qeja?",
      content:
        "Property owners can manage their listings through their dashboard. After logging in, navigate to the dashboard section where you can add new properties, edit details of existing properties, or delete listings that are no longer available. You can also upload photos and provide detailed descriptions to attract potential renters or roommates.",
    },
    {
      id: 3,
      title: "Can I communicate directly with other users on Qeja?",
      content:
        "Yes, Qeja provides a messaging system that allows users to communicate directly.Roommates and rental seekers can send and receive messages to Property owners and vice versa through the platform. Property owners have a dedicated dashboard to view recent messages and chat with interested parties.",
    },
    {
      id: 4,
      title:
        "How does Qeja ensure the compatibility of roommates and rental seekers?",
      content:
        "While Qeja does not use matchmaking algorithms, it allows users to specify their preferences and lifestyle factors during registration. This information is displayed on profiles and property listings, helping users to find compatible roommates or rental options based on criteria such as budget, location, smoking preferences, pet-friendliness, and cleanliness.",
    },
    {
      id: 5,
      title: "Is my personal information secure on Qeja?",
      content:
        "Yes, Qeja takes your privacy and security seriously. We use secure servers and encryption to protect your data. Personal information is only shared with other users as necessary to facilitate the housing search process.",
    },
  ];

  return (
    <div className="p-3 bg-slate-950 h-[100vh]">
      <h3 className="mb-4 text-2xl tracking-widest text-center text-white mt-5 font-bold">
        Frequently Asked Questions
      </h3>

      {faqs &&
        faqs.map((faq, index) => <DefaultAccordion key={index} faq={faq} />)}
    </div>
  );
}

export default FAQ;
