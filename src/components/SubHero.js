import Words from "./Words";
import Video from "./Video";

export default function SubHero({ title, intro, video, poster }) {
  return (
    <section className="subhero">
      <div className="wrap">
        <div className="subhero__top">
          <h1 className="display h1"><Words text={title} /></h1>
          <p className="lead fadein" style={{ animationDelay: "1.7s" }}>{intro}</p>
        </div>
        <div className="frame subhero__media fadein" style={{ animationDelay: "1.5s" }}>
          <Video src={video} poster={poster} />
        </div>
      </div>
    </section>
  );
}
