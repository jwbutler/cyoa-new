import { useContext, useState } from 'preact/compat';
import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { Links } from '../../../ui/components/Links';
import { ApiContext } from '../../../engine/api/ApiContext';
import { Column } from '../../../ui/components/Column';
import { Columns } from '../../../ui/components/Columns';
import { Image } from '../../../ui/components/Image';
import { BooleanFlag, QuestName, SceneName } from '../../types';
import earth_priest_png from '../../images/earth_priest_shaded.png';

type DialogOption =
  | 'none'
  | 'greeting'
  | 'wall_of_text'
  | 'nope'
;

export const InnerSanctum = () => {
  const api = useContext(ApiContext);
  const [dialogOption, setDialogOption] = useState<DialogOption>('none');
  const joinedEarthCult = api.getBoolean(BooleanFlag.JOINED_EARTH_CULT);

  const renderContent = () => {
    if (joinedEarthCult) {
      return (<p>Please save the world!</p>);
    }

    switch (dialogOption) {
      case 'none':
        return (
          <>
            <p>
              There's an earth priest here
            </p>
            <p>
              <Link onClick={() => setDialogOption('greeting')}>
                Talk to him
              </Link>
            </p>
          </>
        );
      case 'greeting':
        return (
          <>
            <p>
              Who enters this holy place to seek the wisdom of the earth?
            </p>
            <p>
              Are you the one who will save our world from the coming of the heavenly host?
            </p>
            <ul>
              <li>
                <Link onClick={() => setDialogOption('wall_of_text')}>
                  "Yeah"
                </Link>
              </li>
              <li>
                <Link onClick={() => setDialogOption('wall_of_text')}>
                  "...Maybe?"
                </Link>
              </li>
              <li>
                <Link onClick={() => setDialogOption('nope')}>
                  "Nope"
                </Link>
              </li>
            </ul>
          </>
        );
      case 'nope':
        return (
          <p>
            The earth priest frowns at you in disapproval.
          </p>
        );
      case 'wall_of_text':
        return (
          <>
            <p>{earthPriestWallOfText}</p>
            <p>
              <Link onClick={() => api.setBoolean(BooleanFlag.JOINED_EARTH_CULT, true)}>
                Join the Earth Cult!
              </Link>
            </p>
          </>
        );
    }
  };

  return (
    <Scene title="Temple Inner Sanctum">
      <Columns>
        <Column>
          <Image src={earth_priest_png} />
        </Column>
        <Column>
          {renderContent()}
          <Links>
            <Link to={SceneName.TEMPLE_CATACOMBS}>
              Exit
            </Link>
          </Links>
        </Column>
      </Columns>

    </Scene>
  );
}

const earthPriestWallOfText = (
  <>
    <p>
      Know now that you stand at the entrance to the holiest place of my order, the gateway to the places below.
      In the old times, our people worshiped the demons of the earth. We priests made offerings to keep the favor
      of the demons, and mankind thrived in this land.
    </p>
    <p>
      Then there came a messenger from the sky. The Messenger performed many wonders, and told the people of the
      coming of the heavenly race.
    </p>
    <p>
      Those who took up the Messenger's cause were rewarded with great gifts. The Messenger armed them with
      weapons against which none could stand.
    </p>
    <p>
      The priests of the earth fought back with all our power, but we failed to raise the demons to our side when
      we most needed. Defeated, we scattered across the countryside and went into hiding.
    </p>
    <p>
      Now the people toil under the messenger's rule, preparing the land for the coming of the heavenly race.
    </p>
    <p>
      The secrets to summon the power of the demons can still be found here, if you are pure of heart and master
      of your own thoughts. Bind the demons of the earth to your will and you may yet overcome the heavenly race
      and save mankind.
    </p>
  </>
);