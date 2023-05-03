import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { Links } from '../../../ui/components/Links';
import { useContext } from 'preact/compat';
import { ApiContext } from '../../../engine/api/ApiContext';
import { BooleanFlag, SceneName } from '../../types';
import { Columns } from '../../../ui/components/Columns';
import { Column } from '../../../ui/components/Column';

export const EarthTempleCatacombs = () => {
  const api = useContext(ApiContext);
  const koboldExists = api.getBoolean(BooleanFlag.CATACOMBS_KOBOLD);

  const handleKillKobold = () => api.setBoolean(BooleanFlag.CATACOMBS_KOBOLD, false);

  return (
    <Scene title="Temple Catacombs">
      <Columns>
        <Column/>
        <Column>
          {koboldExists && (
            <>
              <p>
                There's a kobold here
              </p>
              <p>
                <Link onClick={handleKillKobold}>
                  Kill it
                </Link>
              </p>
            </>
          )}
          {!koboldExists && (
            <p>
              There's a dead kobold here
            </p>
          )}
          <Links>
            {!koboldExists && (
              <Link to={SceneName.EARTH_TEMPLE_INNER_SANCTUM}>
                Enter the inner sanctum
              </Link>
            )}
            <Link to={SceneName.INSIDE_EARTH_TEMPLE}>
              Exit
            </Link>
          </Links>
        </Column>
      </Columns>
    </Scene>
  );
}