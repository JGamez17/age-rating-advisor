// components/ui/FAQ.jsx
import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const FAQ = ({ items = [] }) => {
  // Default FAQ items if none are provided
  const defaultItems = [
    {
      question: "Is PlayGuard free to use?",
      answer: "Yes, PlayGuard offers a free version with basic features. We also have premium plans with additional functionality for families needing more comprehensive protection."
    },
    {
      question: "How does the trust filter work?",
      answer: "Our trust algorithm analyzes multiple factors including parent reviews, expert ratings, and safety certifications to provide reliable app recommendations."
    },
    {
      question: "Can I monitor multiple children?",
      answer: "Absolutely! PlayGuard supports adding multiple child profiles with customized settings for each family member."
    }
  ];

  const faqItems = items.length > 0 ? items : defaultItems;

  return (
    <Accordion.Root 
      type="multiple"
      className="w-full space-y-3"
    >
      {faqItems.map((item, index) => (
        <Accordion.Item 
          key={index}
          value={`item-${index}`}
          className="border border-gray-200 rounded-xl overflow-hidden"
        >
          <Accordion.Header>
            <Accordion.Trigger
              className="flex w-full items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="text-base font-bold text-gray-900">
                {item.question}
              </span>
              <ChevronDownIcon 
                className="text-gray-500 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)]"
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>
          
          <Accordion.Content className="overflow-hidden bg-gray-50 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="p-5 pt-0 text-gray-600">
              {item.answer}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default FAQ;