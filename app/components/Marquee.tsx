import { siteContent } from "../content/site";

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {siteContent.footer.marqueeText}
        {siteContent.footer.marqueeText}
      </div>
    </div>
  );
}
