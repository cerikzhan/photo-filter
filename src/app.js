import { Header } from './components/header/header';
import { Main } from './components/main/main';

export function App(parentNode) {
  Header(parentNode);
  // eslint-disable-next-line no-unused-vars
  const main = new Main(parentNode);
}
