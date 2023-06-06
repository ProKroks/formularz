import React, { useState } from 'react';
import './App.css';

const countries = [
  'Polska',
'Niemcy',
'Francja',
'Włochy',
'Albania',
'Algieria',
'Andora',
'Angola',
'Antigua i Barbuda',
'Arabia Saudyjska',
'Argentyna',
'Armenia',
'Australia',
'Austria',
'Azerbejdżan',
'Bahamy',
'Bahrajn',
'Bangladesz',
'Barbados',
'Belgia',
'Belize',
'Benin',
'Bhutan',
'Białoruś',
'Birma (Myanmar)',
'Boliwia',
'Bośnia i Hercegowina',
'Botswana',
'Brazylia',
'Brunei',
'Buganda',
'Burkina Faso',
'Burundi',
'Chile',
'Chiny',
'Chorwacja',
'Cypr',
'Czechy',
'Dania',
'Demokratyczna Republika Konga',
'Dominika',
'Dominikana',
'Drugie Cesarstwo Francuskie',
'Drugie Cesarstwo Meksykańskie',
'Drugie Cesarstwo Brazylii',
'Drugie Cesarstwo Niemieckie',
'Drugie Cesarstwo Włoskie',
'Drugie Cesarstwo Hiszpańskie',
'Drugie Cesarstwo Rosyjskie',
'Drugie Cesarstwo Austriackie',
'Drugie Cesarstwo Japońskie',
'Drugie Cesarstwo Chińskie',
'Egipt',
'Ekwinoksjalna Gwinea',
'Erytrea',
'Estonia',
'Eswatini',
'Etiopia',
'Fidżi',
'Filipiny',
'Finlandia',
'Francuskie Terytoria Południowe i Antarktyczne',
'Gabon',
'Gambia',
'Ghana',
'Grecja',
'Grenada',
'Gruzja',
'Gujana',
'Gwatemala',
'Gwinea',
'Gwinea Bissau',
'Gwinea Równikowa',
'Haiti',
'Hiszpania',
'Holandia',
'Honduras',
'Hongkong',
'Indie',
'Indonezja',
'Irak',
'Iran',
'Irlandia',
'Islandia',
'Izrael',
'Jamajka',
'Japonia',
'Jemen',
'Jordania',
'Kambodża',
'Kamerun',
'Kanada',
'Katar',
'Kazachstan',
'Kenia',
'Kirgistan',
'Kiribati',
'Kolumbia',
'Komory',
'Kongo',
'Korea Północna',
'Korea Południowa',
'Kosowo',
'Kostaryka',
'Kuba',
'Kuwejt',
'Laos',
'Lesotho',
'Liban',
'Liberia',
'Libia',
'Liechtenstein',
'Litwa',
'Luksemburg',
'Łotwa',
'Macedonia Północna',
'Madagaskar',
'Malawi',
'Malediwy',
'Malezja',
'Mali',
'Malta',
'Maroko',
'Mauretania',
'Mauritius',
'Meksyk',
'Mikronezja',
'Mołdawia',
'Monako',
'Mongolia',
'Mozambik',
'Namibia',
'Nauru',
'Nepal',
'Niger',
'Nigeria',
'Nikaragua',
'Norwegia',
'Nowa Zelandia',
'Oman',
'Pakistan',
'Palau',
'Panama',
'Papua-Nowa Gwinea',
'Paragwaj',
'Peru',
'Północne Cypryjskie Terytoria Okupowane',
'Portugalia',
'Republika Południowej Afryki',
'Republika Zielonego Przylądka',
'Republika Środkowoafrykańska',
'Republika Świata',
'Rosja',
'Rumunia',
'Rwanda',
'Saint Kitts i Nevis',
'Saint Lucia',
'Saint Vincent i Grenadyny',
'Salwador',
'Samoa',
'San Marino',
'Senegal',
'Serbia',
'Seszele',
'Sierra Leone',
'Singapur',
'Sint Eustatius',
'Sint Maarten',
'Słowacja',
'Słowenia',
'Somalia',
'Sri Lanka',
'Stany Zjednoczone',
'Sudan',
'Sudan Południowy',
'Surinam',
'Syria',
'Szwajcaria',
'Szwecja',
'Tadżykistan',
'Tajlandia',
'Tajwan',
'Tanzania',
'Timor Wschodni',
'Togo',
'Tonga',
'Tradycyjna Chińska Republika',
'Trinidad i Tobago',
'Tunezja',
'Turcja',
'Turkmenistan',
'Tuvalu',
'Uganda',
'Ukraina',
'Urugwaj',
'Uzbekistan',
'Vanuatu',
'Watykan',
'Wenezuela',
'Węgry',
'Wielka Brytania',
'Wietnam',
'Włochy',
'Wyspy Marshalla',
'Wyspy Salomona',
'Wyspy Świętego Tomasza i Książęca',
'Wyżynne Parki Narodowe',
'Wyspa Świętej Heleny',
'Zambia',
'Zimbabwe',
'Zjednoczone Emiraty Arabskie',
];

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryInput, setCountryInput] = useState('');
  const [countryOptions, setCountryOptions] = useState([]);

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

  const handleCountryInputChange = (event) => {
    const input = event.target.value;
    setCountryInput(input);

    const filteredOptions = countries.filter((country) =>
      country.toLowerCase().includes(input.toLowerCase())
    );
    setCountryOptions(filteredOptions);
  };

  const handleCountrySelection = (country) => {
    setCountryInput(country);
    setCountryOptions([]);
  };

  return (
    <div className="container"> 
      <div className="form-header">
        <h1>Formularz rejestracyjny na szkołę letnią</h1>
      </div>
      <div id="one" className="container-fluid bg-2 text-center">
        <h3 className="margin">Bootcamp</h3>
        <p>
          <br />
          Nasz bootcamp jest intensywnym programem szkoleniowym, który skupia się na nauce programowania HTML, CSS, JavaScript oraz React - popularnej biblioteki JavaScript do tworzenia interaktywnych interfejsów użytkownika. Podczas trwania bootcampu zapoznasz się z podstawami tych języków programowania i zdobędziesz umiejętności, które pozwolą Ci tworzyć wspaniałe strony internetowe, w tym strony z dynamicznymi formularzami.
          <br />
          <br />
          Podczas pierwszej części bootcampu skupimy się na nauce HTML i CSS, które są podstawowymi językami do tworzenia struktur i stylizacji stron internetowych. Nauczysz się, jak tworzyć semantyczne znaczniki HTML i jak używać CSS, aby nadać swoim stroną unikalny wygląd i układ.
          <br />
          <br />
          W drugiej części skoncentrujemy się na nauce JavaScript, który jest niezbędny do tworzenia interaktywnych i dynamicznych elementów na stronach internetowych. Nauczysz się podstaw programowania w JavaScript, manipulowania elementami strony, walidacji formularzy i zarządzania zdarzeniami.
          <br />
          <br />
          Ostatnia część będzie przeznaczona na naukę React. React to biblioteka JavaScript, która pozwala tworzyć interaktywne interfejsy użytkownika. Nauczysz się, jak tworzyć komponenty React, zarządzać stanem aplikacji i tworzyć dynamiczne formularze.
          <br />
          <br />
          Bootcamp odbędzie się na terenie Politechniki Łódzkiej w dniach 2.08.2023 - 23.08.2023, od poniedziałku do piątku w godzinach 17:00 - 20:00.
          <br />
          <br />
          Czas trwania kursu to łącznie 48 godzin, w tym:
          <br />
          HTML/CSS - 17 godzin
          <br />
          JavaScript - 15 godzin
          <br />
          React - 16 godzin
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
            required
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
          <input
            type="text"
            id="country"
            name="country"
            value={countryInput}
            onChange={handleCountryInputChange}
            required
          />
          {countryOptions.length > 0 && (
            <ul className="country-options">
              {countryOptions.map((option) => (
                <li key={option} onClick={() => handleCountrySelection(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}
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
