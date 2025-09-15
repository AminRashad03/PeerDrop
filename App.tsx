
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import SendFlow from './components/SendFlow';
import ReceiveFlow from './components/ReceiveFlow';
import { LogoIcon } from './components/IconComponents';

export type View = 'home' | 'send' | 'receive';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  const renderView = () => {
    switch (currentView) {
      case 'send':
        return <SendFlow onBack={() => setCurrentView('home')} />;
      case 'receive':
        return <ReceiveFlow onBack={() => setCurrentView('home')} />;
      case 'home':
      default:
        return <HomePage onSend={() => setCurrentView('send')} onReceive={() => setCurrentView('receive')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4 font-sans selection:bg-cyan-500/20">
       <header className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <LogoIcon className="w-8 h-8 text-cyan-400" />
                <h1 className="text-xl sm:text-2xl font-bold tracking-wider">PeerDrop</h1>
            </div>
       </header>
       <main className="w-full max-w-2xl">
        {renderView()}
       </main>
        <footer className="absolute bottom-4 text-gray-500 text-xs text-center">
            <p>Secure P2P data transfer powered by WebRTC.</p>
        </footer>
    </div>
  );
};

export default App;
