import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value.replace(/[^0-9]/g, '');
    let formattedPhoneNumber = '';

    if (inputPhoneNumber.length > 0) {
      formattedPhoneNumber += inputPhoneNumber.slice(0, 3);

      if (inputPhoneNumber.length > 3) {
        formattedPhoneNumber += '-' + inputPhoneNumber.slice(3, 6);
      }

      if (inputPhoneNumber.length > 6) {
        formattedPhoneNumber += '-' + inputPhoneNumber.slice(6, 9);
      }
    }

    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <div className="container"> 
      <div className="form-header">
        <h1>Formularz rejestracyjny na szkołę letnią</h1>
        <button onClick={handleOpenDialog} className="dialog-button">
          Info
        </button>
      </div>
      <form action="#" method="post">
        <div className="form-group">
          <label htmlFor="name">Imię i nazwisko:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adres e-mail:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="tel">Numer telefonu:</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="xxx-xxx-xxx"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Wiek:</label>
          <input type="number" id="age" name="age" min="18" max="28" required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Płeć:</label>
          <select id="gender" name="gender" required>
            <option value="">Wybierz</option>
            <option value="male">Mężczyzna</option>
            <option value="female">Kobieta</option>
            <option value="other">Inna</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="school">Nazwa szkoły:</label>
          <input type="text" id="school" name="school" required />
        </div>
        <div className="form-group">
          <label htmlFor="city">Miasto:</label>
          <input type="text" id="city" name="city" required />
        </div>
        <div className="form-group">
          <label htmlFor="country">Kraj:</label>
          <input type="text" id="country" name="country" required />
        </div>
        <div className="form-group">
          <button type="submit">Zapisz się</button>
          <button type="reset">Resetuj</button>
        </div>
      </form>
      {dialogOpen && (
        <dialog open className="dialog">
          <form method="dialog">
            <p>Nasz bootcamp</p>
            <button onClick={handleCloseDialog}>Zamknij</button>
          </form>
        </dialog>
      )}

      <footer className="contact-info">
        <p>Kontakt:</p>
        <p>Email: kontakt@example.com</p>
        <p>Numer telefonu: 123-456-789</p>
      </footer>
    </div>
  );
};

export default App;



