import { h } from 'harmaja';
import * as L from 'lonna';

interface State {
  first: string;
  second: string;
}

const state: L.Atom<State> = L.atom<State>({
  first: 'Hello',
  second: 'World'
})

const App = ({ appState = state }) => {
  const greeting = L.view(appState, 'first');
  const target = L.view(appState, 'second');

  target.subscribe((value) => console.log('Target value changed', value))

  return (
    <div>
      <h1>Harmaja</h1>
      <button onClick={() => target.set('creator')}>Click me!</button>
      <h2>{greeting}</h2>
      <h2>{target}</h2>
    </div>
  )
};

export default App;