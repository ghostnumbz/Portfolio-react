export function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  progressBars.forEach(bar => {
    const position = (bar as HTMLElement).getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (position < screenPosition) {
      const width = (bar as HTMLElement).dataset.width || '0%';
      (bar as HTMLElement).style.width = width;
    } else {
      (bar as HTMLElement).style.width = '0%';
    }
  });
}

// Add this to get TypeScript support for the custom animation classes
declare global {
  interface HTMLElement {
    dataset: {
      width?: string;
      [key: string]: string | undefined;
    };
  }
}
