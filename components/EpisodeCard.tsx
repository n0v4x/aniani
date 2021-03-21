import { FunctionComponent } from "react";
import Link from "next/link";
import { Episode } from "lib/interfaces";
import { Play } from "react-feather";

interface EpisodeCardProps extends Episode {}

const EpisodeCard: FunctionComponent<EpisodeCardProps> = ({ id, name, img, type, episode }) => {
  return (
    <li className="episode-card">
      <div className="episode-card__inner">
        <div className="episode-card__top">
          <div className="episode-card__image-wrapper">
            <div className="episode-card__image-overlay"></div>
            <img className="episode-card__image" src={img} alt={name} />
          </div>
          <Link href="/episode/[id]" as={`/episode/${id}`}>
            <a className="episode-card__play-btn">
              <Play className="episode-card__play-btn-icon" />
            </a>
          </Link>
        </div>
        <div className="episode-card__bottom">
          <div className="episode-card__bottom-inner">
            <p className="episode-card__episode-and-type">
              {episode} / {type}
            </p>
            <h3 className="episode-card__name">{name}</h3>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EpisodeCard;
