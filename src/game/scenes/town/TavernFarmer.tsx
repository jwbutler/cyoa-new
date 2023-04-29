import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { ApiContext } from '../../../engine/api/ApiContext';
import { useContext, useState } from 'preact/compat';
import { ComponentChild } from 'preact';
import { Links } from '../../../ui/components/Links';
import { Columns } from '../../../ui/components/Columns';
import { Image } from '../../../ui/components/Image';
import tavern_with_farmer_png from '../../images/tavern_with_farmer.png';
import { BooleanFlag, QuestName, SceneName } from '../../types';
import { Column } from '../../../ui/components/Column';

type DialogOption =
  | 'first'
  | 'second'
  | 'third'
;

export const TavernFarmer = () => {
  const api = useContext(ApiContext);
  const hasAcceptedQuest = (): boolean => api.player.quests.includes(QuestName.FARMER_KOBOLDS);
  const [dialogOption, setDialogOption] = useState<DialogOption>('first');

  const renderContent = () => {
    if (hasAcceptedQuest()) {
      return (
        <p>
          Good luck killing all those kobolds!
        </p>
      );
    } else {
      switch (dialogOption) {
        case 'first':
          return (
            <>
              <p>
                "...I'm telling you, my cow's guts were completely ripped out!
                I was finding bits and pieces of them nearly all the way back to the old church.
              </p>
              <p>
                Third time in the last month!"
              </p>
              <Links>
                <Link onClick={() => setDialogOption('second')}>
                  "Wait, what killed your cow?"
                </Link>
              </Links>
            </>
          );
        case 'second':
          return (
            <>
              <p>
                "Whatever it was, it sure can eat quick.
                I came running the moment I heard the ruckus, but it had gotten what it came for by the time I reached the scene.
              </p>
              <p>
                Seems the only way to stop this is to go find the dang thing where it sleeps.
                Sure am glad you agreed to the job - you really are a swell kid!"
              </p>
              <Links>
                <Link
                  onClick={() => {
                    api.acceptQuest(QuestName.FARMER_KOBOLDS);
                    api.addGold(20);
                    api.setBoolean(BooleanFlag.UNLOCKED_TEMPLE, true);
                    setDialogOption('third');
                  }}
                >
                  "I agreed to what...?"
                </Link>
              </Links>
            </>
          );
        case 'third':
          return (
            <>
              <p>
                "Here's your advance on the job - go get yourself whatever you need to get started.
              </p>
              <p>
                Come find me back here when you've cleaned out the old catacomb of whatever it is that's down there, and there's 20 more gold coins waiting for you.
              </p>
              <p>
                Good luck!"
              </p>
            </>
          );
      }
    }
  };

  return (
    <Scene title="Tavern">
      <Columns>
        <Column>
          <Image src={tavern_with_farmer_png} />
        </Column>
        <Column>
          {renderContent()}
          <Links>
            <Link to={SceneName.TAVERN}>
              Back
            </Link>
          </Links>
        </Column>
      </Columns>
    </Scene>
  );
};