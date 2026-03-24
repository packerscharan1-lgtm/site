import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimation = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const slideInFromLeft = (selector: string, delay = 0) => {
    if (!elementRef.current) return;
    gsap.fromTo(
      elementRef.current.querySelectorAll(selector),
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay,
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 70%',
          end: 'top 50%',
          scrub: false,
        },
      }
    );
  };

  const dropIn = (selector: string, delay = 0) => {
    if (!elementRef.current) return;
    gsap.fromTo(
      elementRef.current.querySelectorAll(selector),
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 70%',
          end: 'top 50%',
          scrub: false,
        },
      }
    );
  };

  const popOut = (selector: string, stagger = 0.1) => {
    if (!elementRef.current) return;
    gsap.fromTo(
      elementRef.current.querySelectorAll(selector),
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger,
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 70%',
          end: 'top 50%',
          scrub: false,
        },
      }
    );
  };

  const slideInFromBottom = (selector: string, delay = 0) => {
    if (!elementRef.current) return;
    gsap.fromTo(
      elementRef.current.querySelectorAll(selector),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 70%',
          end: 'top 50%',
          scrub: false,
        },
      }
    );
  };

  const slideInFromRight = (selector: string, stagger = 0.1) => {
    if (!elementRef.current) return;
    gsap.fromTo(
      elementRef.current.querySelectorAll(selector),
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger,
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 70%',
          end: 'top 50%',
          scrub: false,
        },
      }
    );
  };

  const fadeIn = (selector: string, stagger = 0.1) => {
    if (!elementRef.current) return;
    gsap.fromTo(
      elementRef.current.querySelectorAll(selector),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.6,
        stagger,
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 70%',
          end: 'top 50%',
          scrub: false,
        },
      }
    );
  };

  return {
    elementRef,
    slideInFromLeft,
    dropIn,
    popOut,
    slideInFromBottom,
    slideInFromRight,
    fadeIn,
  };
};
