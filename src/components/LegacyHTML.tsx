import React, { useEffect, useRef } from 'react';

interface LegacyHTMLProps {
  html: string;
  className?: string;
}

const LegacyHTML: React.FC<LegacyHTMLProps> = ({ html, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = html;

    const scripts = Array.from(container.getElementsByTagName('script'));
    scripts.forEach(oldScript => {
      const newScript = document.createElement('script');
      
      Array.from(oldScript.attributes).forEach(attr => {
        newScript.setAttribute(attr.name, attr.value);
      });
      
      if (oldScript.innerHTML) {
        newScript.innerHTML = oldScript.innerHTML;
      }
      
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });

  }, [html]);

  return <div ref={containerRef} className={className} />;
};

export default LegacyHTML; 