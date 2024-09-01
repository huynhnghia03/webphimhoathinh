'use client';

import { useEffect } from 'react';

const GlobalEffects = () => {
  useEffect(() => {
    // Chặn phím F12, Ctrl+Shift+I và Ctrl+U
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === 'F12' || // F12
        (event.ctrlKey && event.shiftKey && event.key === 'I') || // Ctrl+Shift+I
        (event.ctrlKey && event.key === 'U') // Ctrl+U
      ) {
        event.preventDefault();
        return false;
      }
    };

    // Chặn chuột phải (Right-click)
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    // Phát hiện khi DevTools mở
    const detectDevTools = () => {
      const threshold = 160; // Thiết lập ngưỡng cho chiều rộng cửa sổ devtools
      const devtools = /./;
      devtools.toString = () => 'devtools';
      console.log('%c', devtools);

      if (window.outerWidth - window.innerWidth > threshold) {
        alert('DevTools đang mở! Vui lòng đóng DevTools để tiếp tục.');
        window.location.href = '/'; // Chuyển hướng hoặc hành động khác
      }
    };

    // Gắn các sự kiện
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);
    const interval = setInterval(detectDevTools, 1000);

    // Cleanup khi component bị hủy
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
      clearInterval(interval);
    };
  }, []);

  return null; // Không cần render gì cả
};

export default GlobalEffects;
