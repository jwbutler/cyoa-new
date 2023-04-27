import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { ApiContext } from '../../../engine/api/ApiContext';
import { useContext } from 'preact/compat';
import { ComponentChild } from 'preact';
import { Links } from '../../../ui/components/Links';
import { Column, Columns } from '../../../ui/components/Columns';
import { Image } from '../../../ui/components/Image';
import tavern_with_farmer_png from '../../images/tavern_with_farmer.png';

const questName = 'farmer_kobolds';

export const TavernFarmer = () => {
  const api = useContext(ApiContext);
  const hasAcceptedQuest = (): boolean => api.player.quests.includes(questName);

  let content: ComponentChild;
  if (hasAcceptedQuest()) {
    content = (
      <p>
        Good luck killing all those kobolds!
      </p>
    );
  } else {
    content = (
      <>
        <p>
          "I'm telling you, my cow's guts were completely ripped out! I was finding bits and pieces of them nearly all the way back to the old church.
        </p>
        <p>
          Third time in the last month!
        </p>
        <p>
          Whatever it was, it sure can eat quick. I came running the moment I heard the ruckus, but it had gotten what it came for by the time I reached the scene.
        </p>
        <p>
          Seems the only way to stop this is to go find the dang thing where it sleeps.  Sure am glad you agreed to the job - you really are a swell kid!
        </p>
        <p>
          Here's your advance on the job - go get yourself whatever you need to get started.
        </p>
        <p>
          Come find me back here when you've cleaned out the old catacomb of whatever it is that's down there, and there's 20 more gold coins waiting for you.
        </p>
        <p>
          Good luck!"
        </p>
        <Links>
          <Link
            onClick={() => api.acceptQuest(questName)}
          >
            Accept Quest
          </Link>
        </Links>
      </>
    );
  }

  return (
    <Scene title="Tavern">
      <Columns>
        <Column>
          <Image src={tavern_with_farmer_png} />
        </Column>
        <Column>
          {content}
          <Links>
            <Link to="tavern">
              Back
            </Link>
          </Links>
        </Column>
      </Columns>
    </Scene>
  );
};