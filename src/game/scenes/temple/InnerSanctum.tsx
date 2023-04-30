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
  | 'wall_of_text_1'
  | 'wall_of_text_2'
  | 'wall_of_text_3'
  | 'wall_of_text_4'
  | 'nope'
;

export const InnerSanctum = () => {
  const api = useContext(ApiContext);
  const [_dialogOption, setDialogOption] = useState<DialogOption>('none');
  const dialogOption = _dialogOption!;
  const joinedEarthCult = api.getBoolean(BooleanFlag.JOINED_EARTH_CULT);

  const handleJoinCult = () => {
    api.completeQuest(QuestName.FARMER_KOBOLDS);
    api.setBoolean(BooleanFlag.JOINED_EARTH_CULT, true);
    api.setBoolean(BooleanFlag.TOWN_ON_FIRE, true);
  };

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
                <Link onClick={() => setDialogOption('wall_of_text_1')}>
                  "Yeah"
                </Link>
              </li>
              <li>
                <Link onClick={() => setDialogOption('wall_of_text_1')}>
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
      case 'wall_of_text_1':
        return (
          <>
            <p>
              "Know now that you stand at the entrance to the holiest place of my order,
              the gateway to the places below.
            </p>
            <p>
              In the old times, our people worshipped the demons of the earth.
              We priests made offerings to keep the favor of the demons,
              and mankind thrived in this land."
            </p>
            <p>
              <Link onClick={() => setDialogOption('wall_of_text_2')}>
                "So what happened?"
              </Link>
            </p>
          </>
        );
      case 'wall_of_text_2':
        return (
          <>
            <p>
              "Then there came a messenger from the sky.
              The Messenger performed many wonders, and told the people of the
              coming of the heavenly race.
            </p>
            <p>
              Those who took up the Messenger's cause were rewarded with great gifts.
              The Messenger armed them with weapons against which none could stand."
            </p>
            <p>
              <Link onClick={() => setDialogOption('wall_of_text_3')}>
                "That must have been rough..."
              </Link>
            </p>
          </>
        );
      case 'wall_of_text_3':
        return (
          <>
            <p>
              "The priests of the earth fought back with all our power,
              but we failed to raise the demons to our side when we most needed them.
              Defeated, we scattered across the countryside and went into hiding.
            </p>
            <p>
              Now the people toil under the Messenger's rule,
              preparing the land for the coming of the heavenly race."
            </p>
            <p>
              <Link onClick={() => setDialogOption('wall_of_text_4')}>
                "What can we do about this?"
              </Link>
            </p>
          </>
        );
      case 'wall_of_text_4':
        return (
          <>
            <p>
              "The secrets to summon the power of the demons can still be found here,
              if you are pure of heart and master of your own thoughts.
              Bind the demons of the earth to your will and you may yet
              overcome the heavenly race and save mankind.
            </p>
            <p>
              If you are willing, I will initiate you into the mysteries of the Earth Cult,
              so that you might draw upon the power of the demons to defeat the forces of the Heavens.
              Will you take on this quest?"
            </p>
            <ul>
              <li>
                <Link onClick={handleJoinCult}>
                  "Yes!"
                </Link>
              </li>
              <li>
                <Link onClick={handleJoinCult}>
                  "... Do I really have a choice?"
                </Link>
              </li>
            </ul>
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
};