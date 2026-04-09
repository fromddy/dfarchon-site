const MARQUEE_TEXT =
  "FULLY ONCHAIN GAMES — DARK FOREST LIVES — ZK FOG OF WAR — ONCHAIN REALITY — DECENTRALIZATION - PRIVACY — COMMUNITY OWNED — NO OFF-SWITCH — ";

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {MARQUEE_TEXT}
        {MARQUEE_TEXT}
      </div>
    </div>
  );
}
