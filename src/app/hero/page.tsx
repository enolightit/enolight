'use client';

import { ReactNode, useEffect } from 'react';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <div className="mb-20">
      <Title>Scale: 1.5 & Margin: 2px</Title>
      <Images />

      <Title>Scale: 1.2 & Margin: 1.5px</Title>
      <Images cardStyle={`${styles.card} !m-[1.5px]`} />

      <Title>Scale: 1.2 & Margin: 1px</Title>
      <Images cardStyle={`${styles.card} !m-[1px]`} />

      <Title>Scale: 1.5 & Margin: 1.5px</Title>
      <Images cardStyle={`${styles.card2}`} />

      <Title>Scale: 2 & Margin: 1.5px</Title>
      <Images cardStyle={`${styles.card3}`} />

      <Title>Auto Animation</Title>
      <Images cardStyle={`${styles.card} auto-animation`} />
    </div>
  );
}

type TitleProps = {
  children: ReactNode;
};
function Title({ children }: TitleProps) {
  return <h1 className="text-3xl px-3 pt-10 pb-4">{children}</h1>;
}

type ImagesProps = {
  cardStyle?: string;
  imageStyle?: string;
  containerStyle?: string;
};
function Images({ cardStyle, imageStyle, containerStyle }: ImagesProps) {
  useEffect(() => {
    // Only run if auto-animation class is present
    if (!cardStyle?.includes('auto-animation')) {
      return;
    }

    // Use the CSS module class name for card
    const elements = document.querySelectorAll(`.auto-animation`);
    if (!elements.length) {
      console.warn('No elements found with auto-animation class');
      return;
    }

    let currentIndex = 0;

    function toggleHover() {
      // Remove hovered class from all elements
      elements.forEach((el) => el.classList.remove(styles.hovered));

      // Add hovered class to current element
      elements[currentIndex]?.classList.add(styles.hovered);

      // Move to next element, loop back to start if at end
      currentIndex = (currentIndex + 1) % elements.length;
    }

    // Run toggleHover every 2 seconds
    const intervalId = setInterval(toggleHover, 2000);

    // Trigger immediately for first element
    toggleHover();

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [cardStyle]);

  return (
    <div className={styles.container}>
      <div className={cardStyle || styles.card}>
        <img src="/assets/img/hero-1.jpg" />
      </div>
      <div className={cardStyle || styles.card}>
        <img src="/assets/img/hero-2.jpg" />
      </div>
      <div className={cardStyle || styles.card}>
        <img src="/assets/img/hero-3.jpg" />
      </div>
      <div className={cardStyle || styles.card}>
        <img src="/assets/img/hero-1.jpg" />
      </div>
      <div className={cardStyle || styles.card}>
        <img src="/assets/img/hero-2.jpg" />
      </div>
    </div>
  );
}
