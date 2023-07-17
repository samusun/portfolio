import betmagic from "./betmagic.svg";
import crypto from "./crypto.svg";
import calc from "./calc.svg";
import onboarding from "./onboarding.svg";
import nft from "./nft.svg";
import moveMore from "./moveMore.svg";

const projectList = [
  {
    span: 12,
    title: "Code for this Portfolio",
    link: "https://github.com/samusun/portfolio",
    codelink: undefined,
    image: undefined,
  },
  {
    span: 6,
    title: "MoveMore (In progress..)",
    link: "https://main.d3lovymiw54b4j.amplifyapp.com/",
    codelink: "https://github.com/samusun/ai-app",
    image: moveMore,
  },
  {
    span: 6,
    title: "Onboarding",
    link: "https://github.com/samusun/onboarding",
    codelink: "https://github.com/samusun/onboarding",
    // height: { SECONDARY_COL_HEIGHT },
    image: onboarding,
  },

  {
    span: 6,
    title: "Bet Magic",
    image: betmagic,
    link: "https://main.dv5hj122gcmv0.amplifyapp.com/#/",
    codelink: "https://github.com/samusun/BetMagic",
  },
  {
    span: 6,
    image: nft,
    title: "NFT Castle",
    link: "https://auth-development-d9fe8.firebaseapp.com/",
    codelink: "https://github.com/samusun/happyhacking",
  },
  {
    span: 6,
    title: "Loan Calculator",
    link: "/calc",
    image: calc,
    codelink: "https://github.com/samusun/loanCalculator",
  },
  {
    span: 6,
    image: crypto,
    title: "Crypto Hindsight",
    link: "https://main.d3h2uqsm3wm71v.amplifyapp.com/#/",
    codelink: "https://github.com/samusun/crypto-hindsight",
  },
];

export default projectList;
