import Heading from './components/Typography/Heading';

function App() {
  return (
    <div>
      <Heading level={1} className="text-red-300">H1 Heading</Heading>
      <Heading level={3} className="text-red-500">H3 Tailwind Heading</Heading>
    </div>
  );
}

export default App;
