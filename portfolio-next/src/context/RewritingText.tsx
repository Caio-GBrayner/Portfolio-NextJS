// components/RewritingText.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface RewritingTextProps {
  texts: string[];
  typingDelay?: number;
  erasingDelay?: number;
  pauseBetweenSentences?: number;
  loop?: boolean;
}

const RewritingText: React.FC<RewritingTextProps> = ({
  texts = ['Hello, I am Caio', 'Olá, eu sou Caio', 'I am a Web Developer'], 
  typingDelay = 0.08,
  erasingDelay = 0.04,
  pauseBetweenSentences = 1.5,
  loop = true,
}) => {
const [currentTextIndex, setCurrentTextIndex] = useState(0);
const [displayedText, setDisplayedText] = useState('');
const [isTyping, setIsTyping] = useState(true);

useEffect(() => {
let timeout: NodeJS.Timeout;

const currentFullText = texts[currentTextIndex];

if (isTyping) {
    if (displayedText.length < currentFullText.length) {
    timeout = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
    }, typingDelay * 1000);
    } else {
    timeout = setTimeout(() => {
        setIsTyping(false);
    }, pauseBetweenSentences * 1000);
    }
} else {
    if (displayedText.length > 0) {
    timeout = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
    }, erasingDelay * 1000);
    } else {
    const nextIndex = (currentTextIndex + 1) % texts.length;
    if (!loop && nextIndex === 0) {
        return;
    }
    setCurrentTextIndex(nextIndex);
    setIsTyping(true);
    }
}

return () => clearTimeout(timeout);
}, [displayedText, isTyping, currentTextIndex, texts, typingDelay, erasingDelay, pauseBetweenSentences, loop]);

return (
<motion.p>
    {displayedText}
</motion.p>
);
};

export default RewritingText;