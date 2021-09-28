import { FiPlusSquare } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { Container } from './styles';

interface Props {
  openModal: () => void
}

export const Header = ({ openModal }: Props): JSX.Element => {    
    return (
      <Container>
        <header>
          <img src={logo} alt="GoRestaurant" />
          <nav>
            <div>
              <button
                type="button"
                onClick={openModal}
              >
                <div className="text">Novo Prato</div>
                <div className="icon">
                  <FiPlusSquare size={24} />
                </div>
              </button>
            </div>
          </nav>
        </header>
      </Container>
    )
};