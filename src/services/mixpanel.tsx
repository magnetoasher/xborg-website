import mixpanel from "mixpanel-browser";

export class MixpanelTracking {
  private static _instance: MixpanelTracking;

  public static getInstance(): MixpanelTracking {
    if (MixpanelTracking._instance == null) {
      return (MixpanelTracking._instance = new MixpanelTracking());
    }
    return this._instance;
  }

  public constructor() {
    if (MixpanelTracking._instance) {
      throw new Error(
        "Error: Instance creation of MixpanelTracking is not allowed. Use Mixpanel.getInstance instead. "
      );
    }
    mixpanel.init(process.env.REACT_APP_MIX_PANEL_SECRET || "", {
      debug: true,
    });
  }
  public track(name: string, data: object = {}) {
    mixpanel.track(name, data);
  }

  public trackEvent(action: string, data: object) {
    this.track(action, data);
  }
}
