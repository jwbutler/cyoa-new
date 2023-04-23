import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';
import { Links } from '../../engine/components/Links';
import { useContext } from 'preact/compat';
import { ApiContext } from '../../engine/api/ApiContext';

export const TempleCatacombs = () => {
  const api = useContext(ApiContext);
  const koboldExists = api.getBoolean('catacombs_kobold');

  const handleKillKobold = () => api.setBoolean('catacombs_kobold', false);

  return (
    <Scene title="Temple Catacombs">
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
          <Link to="temple_inner_sanctum">
            Enter the inner sanctum
          </Link>
        )}
        <Link to="inside_temple">
          Exit
        </Link>
      </Links>
    </Scene>
  );
}