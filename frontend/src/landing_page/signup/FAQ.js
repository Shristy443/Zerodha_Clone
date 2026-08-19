import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is a Zerodha account",
      answer:
        "A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally."
    },
    {
      question: "What documents are required to open a demat account?",
      answer:
        "You generally need your PAN card, Aadhaar card and bank account details to open a demat account."
    },
    {
      question: "Is Zerodha account opening free?",
      answer:
        "Yes, Zerodha offers free online account opening for eligible customers."
    },
    {
      question: "Are there any AMC (Account Maintenance Charges) for a demat account?",
      answer:
        "Demat accounts may have annual maintenance charges depending on the type of account."
    },
    {
      question: "Can I open a demat account without a bank account?",
      answer:
        "A bank account is generally required to complete the trading and demat account setup."
    },
    {
      question: "What is a Basic Services Demat Account (BSDA)?",
      answer:
        "BSDA is a simplified demat account designed for investors with smaller holdings."
    },
    {
      question: "Can I open a demat and trading account using the mobile app?",
      answer:
        "Yes, you can complete the account opening process through the mobile application."
    }
  ];

  return (
    <div className="faq-container">
      <h2>FAQs</h2>

      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>

          <div
            className="faq-question"
            onClick={() =>
              setOpenIndex(openIndex === index ? -1 : index)
            }
          >
            <span>{faq.question}</span>

            <span className="faq-icon">
              {openIndex === index ? "⌃" : "⌄"}
            </span>
          </div>

          {openIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}

        </div>
      ))}
    </div>
  );
}

export default FAQ;