import { timelineContent, type TimelineCategory } from "../content/timeline";

function CategoryMarker({ category }: { category: TimelineCategory }) {
  const cat = timelineContent.categories.find(
    (entry) => entry.key === category
  )!;
  if (cat.shape === "diamond") {
    return <div className={`h-3 w-3 ${cat.color} shrink-0 rotate-45`} />;
  }
  if (cat.shape === "circle-outline") {
    return (
      <div className="h-3 w-3 shrink-0 rounded-full border-2 border-white" />
    );
  }
  return <div className={`h-3 w-3 rounded-full ${cat.color} shrink-0`} />;
}

export default function Timeline() {
  return (
    <div>
      <h1
        className="mb-6 text-6xl font-bold tracking-widest uppercase md:text-7xl"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {timelineContent.title}
      </h1>
      <p className="mb-10 max-w-2xl text-sm text-gray-400 md:text-base">
        {timelineContent.intro}
      </p>

      {/* Category legend */}
      <div className="mb-12 flex flex-wrap gap-6">
        {timelineContent.categories.map((cat) => (
          <div
            key={cat.key}
            className="flex items-center gap-2 text-xs tracking-wide uppercase"
          >
            <CategoryMarker category={cat.key} />
            <span
              className={
                cat.key === "grant" ? "text-yellow-400" : "text-gray-300"
              }
            >
              {cat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="border-4 border-gray-800 bg-gray-950 p-6 md:p-10">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-[5px] w-[2px] bg-gray-700" />

          <div className="space-y-12">
            {timelineContent.events.map((event, i) => (
              <div key={i} className="relative pl-10">
                {/* Marker */}
                <div className="absolute top-1 left-0">
                  <CategoryMarker category={event.category} />
                </div>

                {/* Date */}
                <div className="mb-2 inline-block border-b border-gray-800 pb-2 font-mono text-xs text-green-400">
                  {event.date}
                </div>

                {/* Title */}
                <h3
                  className="mb-2 text-xl font-bold text-white md:text-2xl"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {event.title}
                </h3>

                {/* Description */}
                <p className="max-w-2xl text-sm leading-relaxed text-gray-400">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
