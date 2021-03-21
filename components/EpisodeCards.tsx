import { FunctionComponent } from "react";
import EpisodeCard from "./EpisodeCard";
import { Episode } from "lib/interfaces";

interface EpisodeCardsProps {
  episodes: Episode[];
  onMore?(): void;
}

const EpisodeCards: FunctionComponent<EpisodeCardsProps> = ({ episodes, onMore }) => {
  return (
    <div className="episode-cards">
      <div className="episode-cards__inner">
        <ul className="episode-cards__list">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} {...episode} />
          ))}
        </ul>
        {/* <button onClick={onMore} className="episode-cards__more-btn">
          more
        </button> */}
      </div>
    </div>
  );
};

export default EpisodeCards;
