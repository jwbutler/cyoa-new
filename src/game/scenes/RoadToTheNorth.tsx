import { useContext } from 'preact/compat';
import { ApiContext } from '../../engine/api/ApiContext';
import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';
import { Links } from '../../engine/components/Links';

type Props = Readonly<{}>;

export const RoadToTheNorth = ({}: Props) => {
  const api = useContext(ApiContext);

  return (
    <Scene title="Road to the North">
      <p>
        To the north, you see the ancient earth temple.
      </p>
      <p>
        To the south, you can see the town.
      </p>
      <Links>
        <Link to="outside_temple">Approach the temple</Link>
        <Link to="outside_town">Head back to town</Link>
      </Links>
    </Scene>
  );
};