import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
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
      </div>
      <div id="one" className="container-fluid bg-2 text-center">
        <h3 className="margin">Bootcamp</h3>
        <p>
        <br></br>
        Nasz bootcamp jest intensywnym programem szkoleniowym, który skupia się na nauce programowania HTML, CSS, JavaScript oraz React - popularnej biblioteki JavaScript do tworzenia interaktywnych interfejsów użytkownika. Podczas trwania bootcampu zapoznasz się z podstawami tych języków programowania i zdobędziesz umiejętności, które pozwolą Ci tworzyć wspaniałe strony internetowe, w tym strony z dynamicznymi formularzami.
        <br></br>
        <br></br>
        Podczas pierwszej części bootcampu skupimy się na nauce HTML i CSS, które są podstawowymi językami do tworzenia struktur i stylizacji stron internetowych. Nauczysz się, jak tworzyć semantyczne znaczniki HTML i jak używać CSS, aby nadać swoim stroną unikalny wygląd i układ.
        <br></br>
        <br></br>
        W drugiej części skoncentrujemy się na nauce JavaScript, który jest niezbędny do tworzenia interaktywnych i dynamicznych elementów na stronach internetowych. Nauczysz się podstaw programowania w JavaScript, manipulowania elementami strony, walidacji formularzy i zarządzania zdarzeniami.
        <br></br>
        <br></br>
        Ostatnia część będzie przeznaczona na nauke JavaScript, a następnie React. React to biblioteka JavaScript, która pozwala tworzyć interaktywne interfejsy użytkownika. Nauczysz się, jak tworzyć komponenty React, zarządzać stanem aplikacji i tworzyć dynamiczne formularze.
        <br></br>
        <br></br>
        Bootcamp odbywać się będzie na terenie Politechniki Łódzkiej w dniach 2.08.2023 - 23.08.2023, od poniedziałku do piątku w godzinach 17:00 - 20:00.
        <br></br>
        <br></br>
        Czas trwania kursu, łącznie to 48h, w tym:
        <br></br>
        HTML/CSS - 17h
        <br></br>
        JS - 15h
        <br></br>
        React - 16h
    </p>
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
      <footer className="contact-info">
         <h3>Kontakt</h3>
        <p>Telefon: +48 221 666 212</p>
        <p>Email: Bootcamp@gmail.com</p>
        <h2>IT Bootcamp &copy; 2023</h2>
      </footer>
    </div>
  );
};

export default App;




