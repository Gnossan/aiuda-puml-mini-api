import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { pumlExamples } from './utils/pumlExamples';
import { generatePlantUML } from './utils/aiGenerate';

function App() {
  const [code, setCode] = useState<string>(pumlExamples.sequence);
  const [prompt, setPrompt] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    try {
      const result = await generatePlantUML(prompt);
      setCode(result);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div>
      <h1>Aiuda - PlantUML Renderer</h1>
      <div>
        <button onClick={() => setCode(pumlExamples.sequence)}>Sequence</button>
        <button onClick={() => setCode(pumlExamples.class)}>Class</button>
        <button onClick={() => setCode(pumlExamples.usecase)}>Usecase</button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter prompt to generate PlantUML"
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={handleGenerate} disabled={isGenerating}>
          {isGenerating ? 'Generating...' : 'Generate Diagram'}
        </button>
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
