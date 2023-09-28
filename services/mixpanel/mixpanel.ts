import { LOCAL_STORAGE_VALUE } from '@/apis';

export enum TRACK_TYPE {
  PAGE_VIEWED = 'page_viewed',
  EVENT = 'event',
}

export function initMixpanel() {
  const dev = process.env.NODE_ENV === 'development';

  // mixpanel.init(process.env.NEXT_PUBLIC_MIX_PANEL_SECRET || "", {
  //   debug: false,
  // });
}

export function trackPage(origin: string, data: any = {}) {
  // const allowed = isTrackingAllowed();
  // if (allowed) {
  //   mixpanel.track(TRACK_TYPE.PAGE_VIEWED, {
  //     origin,
  //     ...data,
  //   });
  // }
}

export function trackEvent(event: string, data: any = {}) {
  // const allowed = isTrackingAllowed();
  // if (allowed) {
  //   mixpanel.track(TRACK_TYPE.EVENT, {
  //     event,
  //     location: window.location.href,
  //     ...data,
  //   });
  // }
}

export function isTrackingAllowed(): boolean {
  let cookieEnabled = isCookiesEnabled();

  if (!cookieEnabled) return false;

  const cookies = localStorage.getItem(LOCAL_STORAGE_VALUE.COOKIE_CONSENT);

  if (cookies) {
    const parse = JSON.parse(cookies);

    if (parse.tracking) {
      return true;
    }

    return false;
  }

  return true;
}

export function isCookiesEnabled(): boolean {
  let cookieEnabled = navigator.cookieEnabled;

  if (!cookieEnabled) {
    document.cookie = 'testcookie';
    cookieEnabled = document.cookie.indexOf('testcookie') != -1;
  }

  if (!cookieEnabled) return false;

  return true;
}
