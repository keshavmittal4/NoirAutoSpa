import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-noir-800 rounded-lg overflow-hidden">
          <motion.div
            className="flex justify-between items-center p-6 cursor-pointer"
            onClick={() => handleClick(index)}
            whileHover={{ backgroundColor: '#1f1f1f' }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-golden-400">{item.question}</h3>
            <motion.div
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-6 h-6 text-golden-400" />
            </motion.div>
          </motion.div>
          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.section
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
