/* eslint-disable max-len */
import { useEffect, useState } from 'react';

const useNotification = () => {
  const [permission, setPermission]: any = useState(permissionType.DEFAULT);

  useEffect(() => {
    initPermission();
  }, []);

  const initPermission = () => {
    if (!('Notification' in window)) {
      setPermission(permissionType.NOT_SUPPORT);
    } else {
      setPermission(Notification.permission);
    }
  };

  const _askPermission = () => {
    if (permission === permissionType.NOT_SUPPORT) {
      alert('Your Browser Not Support Browser Notification');
    } else {
      if(canUsePromise()) {
        Notification.requestPermission().then((permission) => {
          handlePermissionValue(permission);
        });
      } else {
        Notification.requestPermission((permission) => {
          handlePermissionValue(permission);
        });
      }
    }
  };

  const canUsePromise = () => {
    try {
      Notification.requestPermission().then();
    } catch(e) {
      return false;
    }
    return true;
  };

  const handlePermissionValue = (permission) => {
    setPermission(permission);
    if (permission === permissionType.DENIED)
      alert('Aplikasi hanya dapat bekerja jika notifikasi menyala');
  };

  const _showNotification = async (title = 'Sudah Masuk Waktu Shalat', option: any) => {
    try {
      if (permission === permissionType.GRANTED) {
        const options: NotificationOptions = {
          body: option.body || 'Ayo segera shalat.',
          icon: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          silent: true,
          sound: './sounds/mecca.mp3', // not support all browser -_-
          ...option,
        };
        const result = await new Notification(title, options);
        return { data: result, success: true, };
      } else {
        throw { message:'Notifikasi Tidak Diizinkan', success:false, };
      }
    } catch (error) {
      return error;
    }
  };

  return {
    _askPermission,
    _showNotification,
    isGranted: permission === permissionType.GRANTED,
    permission,
  };

};

export default useNotification;

enum permissionType {
  DEFAULT = 'default',
  DENIED = 'denied',
  GRANTED = 'granted',
  NOT_SUPPORT = 'browser_not_support',
}

type NotificationDirection = 'auto' | 'ltr' | 'rtl';
type NotificationPermission = permissionType.DEFAULT |
  permissionType.DENIED |
  permissionType.GRANTED |
  permissionType.NOT_SUPPORT;

interface NotificationOptions {
  dir?: NotificationDirection;
  lang?: string;
  body?: string;
  tag?: string;
  image?: string;
  icon?: string;
  badge?: string;
  sound?: string;
  vibrate?: number | number[],
  timestamp?: number,
  renotify?: boolean;
  silent?: boolean;
  requireInteraction?: boolean;
  data?: any;
  actions?: NotificationAction[]
}

interface NotificationAction {
  action: string;
  title: string;
  icon?: string;
}

// reference
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions
// https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.notificationoptions.html
// https://stackoverflow.com/questions/34617674/typescript-and-chrome-notification
// https://developers.google.com/web/fundamentals/push-notifications/display-a-notification
