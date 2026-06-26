import React from 'react';

type EditorProps = {
  code: string;
  onChange: (code: string) => void;
};

const Editor = ({ code, onChange }: EditorProps) => {
  return (
    <textarea
      value={code}
      onChange={(e) => onChange(e.target.value)}
      rows={20}
      style={{ width: '100%', fontFamily: 'monospace' }}
    />
  );
};

export default Editor;
