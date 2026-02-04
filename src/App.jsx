import { useState } from 'react'
import ValueChainCollapse from './components/ValueChainCollapse'
import AnnualEffect from './components/AnnualEffect'

function App() {
  const [view, setView] = useState('value-chain')

  return (
    <div>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(10, 10, 20, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
      }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: '18px',
          color: '#e2e8f0',
        }}>
          The Great Compression
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setView('value-chain')}
            style={{
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: view === 'value-chain' ? 600 : 400,
              background: view === 'value-chain' ? 'rgba(255,255,255,0.08)' : 'transparent',
              border: view === 'value-chain' ? '1px solid rgba(255,255,255,0.12)' : '1px solid transparent',
              borderRadius: '8px',
              color: view === 'value-chain' ? '#e2e8f0' : '#64708a',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Value Chains
          </button>
          <button
            onClick={() => setView('annual-effect')}
            style={{
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: view === 'annual-effect' ? 600 : 400,
              background: view === 'annual-effect' ? 'rgba(255,255,255,0.08)' : 'transparent',
              border: view === 'annual-effect' ? '1px solid rgba(255,255,255,0.12)' : '1px solid transparent',
              borderRadius: '8px',
              color: view === 'annual-effect' ? '#e2e8f0' : '#64708a',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Annual Effect
          </button>
        </div>
      </nav>

      {/* Content with top padding for fixed nav */}
      <main style={{ paddingTop: '60px' }}>
        {view === 'value-chain' && <ValueChainCollapse />}
        {view === 'annual-effect' && <AnnualEffect />}
      </main>
    </div>
  )
}

export default App
