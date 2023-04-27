import { useContext, useState } from 'preact/compat';
import { Scene } from '../../ui/components/Scene';
import { Link } from '../../ui/components/Link';
import { Links } from '../../ui/components/Links';
import { ApiContext } from '../../engine/api/ApiContext';

export const InnerSanctum = () => {
  const api = useContext(ApiContext);
  const [startedDialogue, setStartedDialogue] = useState(false);
  const acceptedQuest = api.player.quests.includes('earth_priest');

  return ( 
    <Scene title="Temple Inner Sanctum">
      {!startedDialogue && (
        <>
          <p>
            There's an earth priest here
          </p>
          <p>
            <Link onClick={() => setStartedDialogue(true)}>
              Talk to him
            </Link>
          </p>
        </>
      )}
      {startedDialogue && !acceptedQuest && (
        <>
          <p>
          Who enters this holy place to seek the wisdom of the earth?
          </p>
          <p>
            Are you the one who will save our world from the coming of the heavenly host?
          </p>
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
            of your own thoughts.  Bind the demons of the earth to your will and you may yet overcome the heavenly race
            and save mankind.
          </p>
          <p>
            <Link onClick={() => api.acceptQuest('earth_priest')}>
              Accept Quest
            </Link>
          </p>
        </>
      )}
      {startedDialogue && acceptedQuest && (
        <p>Please save the world!</p>
      )}
      <Links>
        <Link to="temple_catacombs">
          Exit
        </Link>
      </Links>
    </Scene>
  );
}