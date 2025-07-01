import React, { useState } from 'react';

function App() {
  const parts1 = ['Brin', 'Mel', 'Crys', 'Plum', 'Griv', 'Koo', 'Puri', 'Maran', 'Zel', 'Tor', 'Fen', 'Nir', 'Dra', 'Vel', 'Sar', 'Lun', 'Kor'];
  const parts2 = ['dle', 'lofy', 'tilly', 'ble', 'vly', 'ma', 'yada', 'dhu', 'zar', 'dan', 'len', 'mir', 'nor', 'sha', 'quil', 'thon'];
  const parts3 = ['Spark', 'Stone', 'Mark', 'Quest', 'Peak', 'Patti', 'Tone', 'Kuppan', 'Drake', 'Fall', 'Shire', 'Vale', ''];

  const specials = ['$', '#', '!', '%', '^', '&', '*'];
  const numbers = '0123456789';

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecials, setIncludeSpecials] = useState(true);
  const [useThreeParts, setUseThreeParts] = useState(true);

  const generatePassword = () => {
    const p1 = parts1[Math.floor(Math.random() * parts1.length)];
    const p2 = parts2[Math.floor(Math.random() * parts2.length)];
    const p3 = useThreeParts ? parts3[Math.floor(Math.random() * parts3.length)] : '';

    let base = p1 + p2 + p3;

    let remainingLength = length - base.length;
    let extra = '';

    let chars = '';
    if (includeNumbers) chars += numbers;
    if (includeSpecials) chars += specials.join('');

    while (extra.length < remainingLength && chars.length > 0) {
      const r = Math.floor(Math.random() * chars.length);
      extra += chars[r];
    }

    setPassword(base + extra);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('✅ Password copied!');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #6a5acd, #8a79f7)',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 500,
          width: '100%',
          padding: '2rem',
          borderRadius: '12px',
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          fontFamily: 'Segoe UI, sans-serif',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>🔐Password Generator</h1>

        <div style={{ marginTop: '1rem' }}>
          <label><strong>Password Length: {length}</strong></label>
          <input
            type="range"
            min="8"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
        </div>

        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            style={{ marginRight: '0.5rem' }}
          />
          Include Numbers
        </label><br />

        <label>
          <input
            type="checkbox"
            checked={includeSpecials}
            onChange={(e) => setIncludeSpecials(e.target.checked)}
            style={{ marginRight: '0.5rem' }}
          />
          Include Special Characters
        </label><br />

        <label>
          <input
            type="checkbox"
            checked={useThreeParts}
            onChange={(e) => setUseThreeParts(e.target.checked)}
            style={{ marginRight: '0.5rem' }}
          />
          Use 3-Word Structure (more fantasy feel)
        </label>

        <button
          onClick={generatePassword}
          style={{
            marginTop: '1rem',
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#6a5acd',
            color: '#fff',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Generate Password
        </button>

        {password && (
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <div
              style={{
                backgroundColor: '#f0f0ff',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '1.2rem',
                fontFamily: 'monospace',
                wordBreak: 'break-word',
                marginBottom: '0.5rem',
              }}
            >
              {password}
            </div>
            <button
              onClick={copyToClipboard}
              style={{
                backgroundColor: '#4caf50',
                color: 'white',
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                marginRight: '0.5rem',
              }}
            >
              📋 Copy
            </button>
            <button
              onClick={() => setPassword('')}
              style={{
                backgroundColor: '#f44336',
                color: 'white',
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              ❌ Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
