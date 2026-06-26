import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { pumlExamples } from './utils/pumlExamples';

function App() {
  const [code, setCode] = useState<string>(pumlExamples.sequence);

  return (
    <div>
      <h1>Aiuda - PlantUML Renderer</h1>
      <div>
        <button onClick={() => setCode(pumlExamples.sequence)}>Sequence</button>
        <button onClick={() => setCode(pumlExamples.class)}>Class</button>
        <button onClick={() => setCode(pumlExamples.usecase)}>Usecase</button>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h2>Editor</h2>
          <Editor code={code} onChange={setCode} />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Preview</h2>
          <Preview code={code} />
        </div>
      </div>
    </div>
  );
}

export default App;
