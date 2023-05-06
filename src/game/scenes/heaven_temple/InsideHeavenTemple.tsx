import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { Links } from '../../../ui/components/Links';
import { BooleanFlag, SceneName } from '../../types';
import { Column } from '../../../ui/components/Column';
import { Columns } from '../../../ui/components/Columns';
import { ApiContext } from '../../../engine/api/ApiContext';
import { useContext } from 'preact/compat';

export const InsideHeavenTemple = () => {
  const api = useContext(ApiContext);
  const heavenPriestessExists = api.getBoolean(BooleanFlag.HEAVEN_PRIESTESS);

  const renderContent = () => {
    return (
      <>
        {heavenPriestessExists && (
          <>
            <p>
              There's a heaven priestess here
            </p>
            <p>
              <Link onClick={() => api.setBoolean(BooleanFlag.HEAVEN_PRIESTESS, false)}>
                Kill her
              </Link>
            </p>
          </>
        )}
        {!heavenPriestessExists && (
          <p>
            There's a dead heaven priestess here
          </p>
        )}
      </>
    );
  };

  return (
    <Scene title="Inside Heaven Temple">
      <Columns>
        <Column />
        <Column>
          {renderContent()}
          <Links>
            <Link to={SceneName.ROAD_TO_THE_EAST}>
              Exit
            </Link>
          </Links>
        </Column>
      </Columns>
    </Scene>
  );
};