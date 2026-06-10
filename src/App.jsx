import { useState } from 'react';
import './App.css';
import EntryForm from './components/EntryForm';
import InvitationCard from './components/InvitationCard';

function App() {
  const [guestInfo, setGuestInfo] = useState(null);

  const handleSubmit = (name, relation) => {
    setGuestInfo({ name, relation });
  };

  const handleReset = () => {
    setGuestInfo(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-cream to-orange-50">
      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-gradient-wedding opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-gradient-wedding opacity-10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {!guestInfo ? (
          <EntryForm onSubmit={handleSubmit} />
        ) : (
          <InvitationCard guestInfo={guestInfo} onEdit={handleReset} />
        )}
      </div>
    </div>
  );
}

export default App;
