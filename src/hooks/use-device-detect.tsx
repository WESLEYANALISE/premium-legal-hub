
import { useState, useEffect } from 'react';

export const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || '';
      
      // Verificação de dispositivo móvel
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isMobileDevice = mobileRegex.test(userAgent);
      setIsMobile(isMobileDevice);
      
      // Verificação específica de Android
      const isAndroidDevice = /Android/i.test(userAgent);
      setIsAndroid(isAndroidDevice);
      
      // Verificação específica de iOS
      const isIOSDevice = /iPhone|iPad|iPod/i.test(userAgent);
      setIsIOS(isIOSDevice);
    };

    checkDevice();
  }, []);

  return { isMobile, isAndroid, isIOS };
};
