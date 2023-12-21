type ImagePaths = {
  [key: string]: string;
};

interface Images {
  logo: string;
  landing: ImagePaths;
  badges: ImagePaths;
  games: ImagePaths;
  messanger: ImagePaths;
  friends: ImagePaths;
  about: ImagePaths;
  xbg: ImagePaths;
}

export const Images: Images = {
  logo: '/images/logo.svg',

  landing: {
    teambds: '/images/landing/teambds.jpg',
    teambdsLogo: '/images/landing/Team_BDSlogo_square.png',
    fox: '/images/landing/fox.png',
    unknown: '/images/landing/unknown.png',
    bubbles_bot_right: '/images/landing/bubbles_bot_right.png',
    bubbles_right: '/images/landing/bubbles_right.png',
    discovery1: '/images/landing/discovery1.png',
    discovery2: '/images/landing/discovery2.png',
    discovery3: '/images/landing/discovery3.png',
    discovery4: '/images/landing/discovery4.png',
    avatar: '/images/landing/avatar.png',
    sphere: '/images/landing/sphere.png',
    sphere2: '/images/landing/sphere2.png',
    sphere3: '/images/landing/sphere3.png',
    sphere4: '/images/landing/sphere4.png',
    sphere5: '/images/landing/sphere5.png',
    sphere6: '/images/landing/sphere6.png',
    sphere7: '/images/landing/sphere7.png',
    sphere8: '/images/landing/sphere8.png',
    sphere9: '/images/landing/sphere9.png',
    sphere10: '/images/landing/sphere10.png',
    xborgx: '/images/landing/xborg-x.png',
    sphere_blur: '/images/landing/sphere_blur.png',
    bubble_blur1: '/images/landing/bubble-blur-1.png',
    bubble_blur2: '/images/landing/bubble-blur-2.png',
    bubble_cr1: '/images/landing/bubble-cr-1.png',
    bubble_cl1: '/images/landing/bubble-cl-1.png',
    nextgen_gaming_bg: '/images/landing/next-gen-gaming-bg.jpg',
    token_blur: '/images/landing/coin_blur.png',
    token_blur1: '/images/landing/token-l-blur.png',
    token_blur2: '/images/landing/token-l-blur2.png',
    token_blur3: '/images/landing/token-l-blur3.png',
    token_blur4: '/images/landing/token-l-blur4.png',
    token_blur5: '/images/landing/token-l-blur5.png',
    token_blur6: '/images/landing/token-l-blur6.png',
    token_blur7: '/images/landing/token-l-blur7.png',
    token_blur8: '/images/landing/token-l-blur8.png',
    token_blur9: '/images/landing/token-l-blur9.png',
    token_blur10: '/images/landing/token-l-blur10.png',
    token_blur11: '/images/landing/token-l-blur11.png',
    prometheus: '/images/landing/prometheus.png',
    token: '/images/landing/token.png',
    launchingcoin: '/images/landing/launchingcoin.png',
    tokenizedesports: '/images/landing/tokenized-esports.png',
    circle: '/images/landing/circle.png',
    roadmap: '/images/landing/roadmap.png',
  },

  badges: {
    valorant: '/images/badges/valorant.png',
    lol: '/images/badges/lol.png',
    dota2: '/images/badges/dota2.png',
  },

  games: {
    rocketleague: '/images/games/rocketleague.png',
    lol: '/images/games/lol.png',
  },

  messanger: {
    messanger1: '/images/landing/messanger-1.png',
    messanger2: '/images/landing/messanger-2.png',
  },

  friends: {
    swissborg: '/images/friends/swissborg.svg',
    polygon: '/images/friends/polygon.svg',
    myria: '/images/friends/myria.svg',
    brave: '/images/friends/brave.svg',
    ultra: '/images/friends/ultra.svg',
    bds: '/images/friends/bds.svg',
    mante: '/images/friends/mante.svg',
    zilliqa: '/images/friends/zilliqa.svg',
    games: '/images/friends/games.svg',
    communitygaming: '/images/friends/communitygaming.svg',
  },

  xbg: {
    animatedLine: '/images/xbg/animated-line.png',
    heroData: '/images/xbg/hero-data.png',
    heroBubbles: '/images/xbg/hero-bubbles.png',
    backgroundBubbles: '/images/xbg/background-bubbles.png',
    bubbles_bot_left: '/images/xbg/bubbles_bot_left.png',
    empoweringPlayersBg: '/images/xbg/empowering-players-bg.png',
    discovery5: '/images/xbg/discovery5.png',
    discovery6: '/images/xbg/discovery6.png',
    discovery7: '/images/xbg/discovery7.png',
    discovery8: '/images/xbg/discovery8.png',
    discovery9: '/images/xbg/discovery9.png',
    sphere11: '/images/xbg/sphere11.png',
    roadmapVertical: '/images/xbg/roadmap-vertical.png',
    plus: '/images/xbg/plus.svg',
    smoke: '/images/xbg/smoke.png',
    community: '/images/xbg/community.svg',
  },

  about: {
    spheres: '/images/about/Spheres.png',
    arrowDown: '/images/about/common/arrow-down.svg',
    chevronDown: '/images/about/common/chevron-down.svg',
    chevronRight: '/images/about/common/chevron-right.svg',
    cross: '/images/about/common/cross.svg',
    icon1: '/images/about/common/icon-1.svg',
    icon2: '/images/about/common/icon-2.svg',
    icon3: '/images/about/common/icon-3.svg',
    swissBorg: '/images/about/common/swiss-borg-icon.svg',
    swissBorgLogo: '/images/about/partnerBrands/swiss-borg.svg',
    polygonLogo: '/images/about/partnerBrands/polygon.svg',
    myriaLogo: '/images/about/partnerBrands/myria.svg',
    braveLogo: '/images/about/partnerBrands/brave.svg',
    immutableLogo: '/images/about/partnerBrands/immutable.svg',
    heroicLogo: '/images/about/partnerBrands/heroic.svg',
    teamLiquidLogo: '/images/about/partnerBrands/team-liquid.svg',
    tezosLogo: '/images/about/partnerBrands/tezos.svg',
    plrLogo: '/images/about/partnerBrands/plr.svg',
    ultraLogo: '/images/about/partnerBrands/ultra.svg',
    mantleLogo: '/images/about/partnerBrands/mantle.svg',
    zilliqaLogo: '/images/about/partnerBrands/zilliqa.svg',
    ethereumLogo: '/images/about/partnerBrands/ethereum.svg',
    eslLogo: '/images/about/partnerBrands/esl.svg',
    shieldLogo: '/images/about/partnerBrands/shield.svg',
    aaveLogo: '/images/about/partnerBrands/aave.svg',
    faceitLogo: '/images/about/partnerBrands/faceit.svg',
    oneM: '/images/about/1m.png',
    twnt: '/images/about/20.png',
    fourK: '/images/about/400k.png',
    aboutImage1: '/images/about/aboutImage1.png',
    aboutImage2: '/images/about/aboutImage2.png',
    aboutImage3: '/images/about/aboutImage3.png',
    aboutImage4: '/images/about/aboutImage4.png',
    aboutImage5: '/images/about/aboutImage5.png',
    aboutImage6: '/images/about/aboutImage6.png',
    prometheus: '/images/about/prometheus',
    spheres2: '/images/about/Spheres2.png',
    spheres3: '/images/about/Spheres3.png',
    spheres4: '/images/about/Spheres4.png',
    spheres5: '/images/about/spheres5.png',
    x3dIcon: '/images/about/x3dIcon.png',
  },
};
