export enum VISITOR_ROUTES {
  SIGNUP = '/signup',
}

export enum GLOBAL_ROUTES {
  LANDING = '/',
  REFER = '/r',
  REFER_PATH = '/r/[referrer]',
  FAQ = '/faq',
  TERMS_AND_CONDITIONS = '/terms-and-conditions',
  PRIVACY_POLICIES = '/privacy-policies',
  NOT_FOUND_ERROR = '/404',
  SERVER_ERROR = '/500',
  EVENT_DETAILS = '/e/',
  EVENT_DETAILS_PATH = '/e/[eventid]',
  EXPLORE = '/explore',
  CHANGELOG = '/changelog',

  // GAMING
  GAMEVIEW = '/g/',
  GAMEVIEW_PATH = '/g/[gameid]',
  GAMEDETAILS = '/gamedetails/',
  GAMEDETAILS_PATH = '/gamedetails/[gameid]',

  // COMMUNITY
  COMMUNITY = '/c/',
  COMMUNITY_PATH = '/c/[communityid]',
}

export enum PRIVATE_ROUTES {
  PROFILE = '/profile',
  CLAIM = '/claim',
  REFERRAL = '/referral',
  LEADERBOARD = '/leaderboard',
}

export enum API_ROUTES {
  DISCORD_CONNECT = '/api/user/socials/link/discord/start',
  RIOT_CONNECT = '/api/user/games/link/riot/start',
  TWITTER_CONNECT = '/api/user/socials/link/twitter/start',
  DISCORD_AUTOMATION_CONNECT = '/api/community/automation/link/discord/start',
  TWITCH_CONNECT = '/api/user/socials/link/twitch/start',
  STEAM_CONNECT = '/api/user/games/link/steam/start',
}
