interface ThumbnailProps {
  thumbnailUrl: string;
  subject: string;
}

export default function Thumbnail(props: ThumbnailProps) {
  return (
    <figure className="relative overflow-hidden before:absolute before:content-[''] before:inset-0 before:top-[50%] before:bg-thumb-gradient">
      <img
        src={props.thumbnailUrl}
        alt={props.subject}
        width={900}
        height={367}
        draggable="false"
        className="h-[367px] object-cover"
      />

      <figcaption className="absolute bottom-0 p-6 text-white">
        <span className="text-xl">Live now:</span>
        <h2 className="text-6xl">{props.subject}</h2>
      </figcaption>
    </figure>
  );
}
