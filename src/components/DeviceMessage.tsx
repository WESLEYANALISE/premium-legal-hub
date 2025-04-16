
import React from 'react';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { SmartphoneIcon, TabletIcon, MonitorIcon } from 'lucide-react';

const DeviceMessage = () => {
  const { isMobile, isAndroid, isIOS } = useDeviceDetect();
  
  let Icon = MonitorIcon;
  let message = "Acesse pelo seu celular para uma experiência completa";
  
  if (isAndroid) {
    Icon = SmartphoneIcon;
    message = "Você será redirecionado para a Google Play Store";
  } else if (isIOS) {
    Icon = TabletIcon;
    message = "Você será redirecionado para a App Store";
  }
  
  if (!isMobile) {
    return (
      <section className="py-8 px-4 md:px-8 lg:px-12 bg-muted">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4">
            <Icon className="text-law-red w-6 h-6" />
            <p className="text-gray-300">
              {message}
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  return null;
};

export default DeviceMessage;
