import './Brands.css';

import { ReactComponent as Paperz } from '../../assets/images/paperz.svg';
import { ReactComponent as Dorfus } from '../../assets/images/dorfus.svg';
import { ReactComponent as Martino } from '../../assets/images/martino.svg';
import { ReactComponent as Square } from '../../assets/images/square.svg';
import { ReactComponent as Gobona } from '../../assets/images/gobona.svg';

function Brands() {
  return (
    <div className="brand-container">
      <div className="row brand-row">
        <div className="col">
          <Paperz />
        </div>
        <div className="col">
          <Dorfus />
        </div>
        <div className="col">
          <Martino />
        </div>
        <div className="col">
          <Square />
        </div>
        <div className="col">
          <Gobona />
        </div>
      </div>
    </div>
  );
}

export default Brands;
