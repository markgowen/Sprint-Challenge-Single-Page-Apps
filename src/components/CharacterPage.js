import React from "react";
import CharacterList from './CharacterList'

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <CharacterList />
        />
      </header>
    </section>
  );
}
