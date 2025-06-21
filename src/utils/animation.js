import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Register plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

/**
 * Creates a diagonal trajectory animation for cards
 * @param {Object} params - Animation parameters
 * @param {Array} params.cards - Array of card elements to animate
 * @param {Element} params.container - Container element
 * @param {Element} params.targetSection - Target section where cards will end up
 * @param {Number} params.duration - Animation duration (default: 1)
 * @param {Boolean} params.markers - Show debug markers (default: false)
 */
export const createDiagonalCardsAnimation = (params) => {
  const { 
    cards, 
    container, 
    targetSection, 
    duration = 1, 
    markers = false 
  } = params;
  
  if (!cards || !cards.length || !container || !targetSection) {
    console.error('Missing required parameters for diagonal cards animation');
    return;
  }

  // Calculate the target position (below the "WHO WE ARE" section)
  const targetRect = targetSection.getBoundingClientRect();
  const targetY = window.scrollY + targetRect.bottom + 40; // 40px below section
  
  // Calculate horizontal spacing for final position
  const containerWidth = window.innerWidth * 0.9; // 90% of viewport width
  const cardWidth = containerWidth / cards.length - 20; // Equal width with small gap

  // Create the timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: `bottom+=${window.innerHeight * 0.5} center`,
      scrub: 0.5,
      pin: true,
      anticipatePin: 1,
      markers: markers,
    }
  });

  // Animate each card
  cards.forEach((card, index) => {
    const cardRect = card.getBoundingClientRect();
    
    // Calculate final horizontal position
    const spacing = (containerWidth - (cardWidth * cards.length)) / (cards.length + 1);
    const finalX = spacing * (index + 1) + cardWidth * index;
    
    const deltaX = finalX - cardRect.left;
    const deltaY = targetY - window.scrollY - cardRect.top;

    if (index === 0) {
      // First card goes straight down
      tl.to(card, {
        x: deltaX,
        y: deltaY,
        duration: duration,
        ease: "power2.inOut",
      }, 0);
    } else {
      // Other cards follow diagonal curves
      const controlPoint = {
        x: deltaX * 0.3 * index,
        y: deltaY * 0.6
      };

      tl.to(card, {
        motionPath: {
          path: [
            { x: 0, y: 0 },
            controlPoint,
            { x: deltaX, y: deltaY }
          ],
          curviness: 1.5,
          autoRotate: false
        },
        duration: duration,
        ease: "power2.inOut",
      }, 0);
    }

    // Add slight rotation
    tl.to(card, {
      rotation: index % 2 === 0 ? 2 : -2,
      duration: duration * 0.5,
    }, 0);

    // Return to neutral rotation
    tl.to(card, {
      rotation: 0,
      duration: duration * 0.5,
    }, duration * 0.5);
  });

  // Handle resize
  const resizeHandler = () => {
    ScrollTrigger.refresh();
  };

  window.addEventListener('resize', resizeHandler);

  // Return cleanup function
  return () => {
    window.removeEventListener('resize', resizeHandler);
    tl.scrollTrigger && tl.scrollTrigger.kill();
    tl.kill();
  };
};
