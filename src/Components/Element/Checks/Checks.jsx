import './Checks.css';
import { useState } from 'react';

const Checks = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('English');

  const handleCityChange = (e) => setCity(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handleLanguageChange = (e) => setLanguage(e.target.value);

  return (
    <div className="Element-container">
      <div className="form-and-switches">
        {/* Elements */}
        <div className="form-elements" style={{ flex: '70%' }}>
          <h2>Form</h2>
          <form>
            <label>
              First Name
              <input type="text" name="firstName" />
            </label>
            <label>
              Last Name
              <input type="text" name="lastName" />
            </label>
            <label>
              Last Name Again
              <input type="text" name="lastNameAgain" />
            </label>
            <label>
              Email Address
              <input type="text" name="email" />
            </label>
            <label>
              Address
              <input type="text" name="address" />
            </label>
            <label>
              City
              <div className="city-select">
                
                <input type="text" value={city} onClick={() => {/* Show dropdown */}} readOnly />
                <select onChange={handleCityChange}>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                  <option>Houston</option>
                  <option>Phoenix</option>
                  <option>Philadelphia</option>
                  <option>San Antonio</option>
                  <option>San Diego</option>
                </select>
              </div>
            </label>
            <label>
              Country
              <div className="country-select">
                
                <input type="text" value={country} onClick={() => {/* Show dropdown */}} readOnly />
                <select onChange={handleCountryChange}>
                  <option>USA</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>Brazil</option>
                  <option>Argentina</option>
                  <option>Chile</option>
                  <option>Colombia</option>
                  <option>Peru</option>
                </select>
              </div>
            </label>
            <label>
              Message
              <textarea name="message" />
            </label>
            <label>
              Primary Color
              <input  name="primaryColor" />
            </label>
            <label>
              Accent Color
              <input  name="accentColor" />
            </label>
            <label>
              Secondary Color
              <input  name="secondaryColor" />
            </label>
          </form>
        </div>

        {/* Switches */}
        <div className="form-switches" style={{ flex: '30%' }}>
          <h2>Switches</h2>
          <div className="switch-group">
            <label className='sswwitch'>
              Sample Switch
              <input type="checkbox" className="switch" />
              <span className="slider red"></span>
            </label>
            <label className='sswwitch'>
              Primary Color Switch
              <input type="checkbox" className="switch" />
              <span className="slider red"></span>
            </label>
            <label className='sswwitch'>
              Confirm Color Switch
              <input type="checkbox" className="switch" />
              <span className="slider red"></span>
            </label>
          </div>

          <div className="select-box" style={{ marginTop: '50px' }}>
            <h2>Select Box</h2>
            <select value={language} onChange={handleLanguageChange}>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Chinese</option>
              <option>Japanese</option>
              <option>Korean</option>
              <option>Italian</option>
            </select>
          </div>

          <div className="checkbox-group" style={{ marginTop: '50px' }}>
            <h2>Check Box</h2>
            <label className='sswwitch'>
              Sample Checkbox
              <input type="checkbox" className="checkbox red" />
            </label>
            <label className='sswwitch'>
              Primary Color Checkbox
              <input type="checkbox" className="checkbox red" />
            </label>
            <label className='sswwitch'>
              Confirm Color Checkbox
              <input type="checkbox" className="checkbox stop-icon" />
            </label>
            <label className='sswwitch'>
              Disabled Checkbox
              <input type="checkbox" className="checkbox black" disabled checked />
            </label>
            <label className='sswwitch'>
              Disabled Checkbox Active
              <input type="checkbox" className="checkbox dim stop-icon" disabled />
            </label>
          </div>

          <div className="radio-group" style={{ marginTop: '50px' }}>
            <h2>Radios</h2>
            <label className='sswwitch'>
              Sample Radio
              <input type="radio" name="radio" className="radio pink" checked />
            </label>
            <label className='sswwitch'>
              Primary Color Radio
              <input type="radio" name="radio" className="radio black" />
            </label>
            <label className='sswwitch'>
              Confirm Color Radio
              <input type="radio" name="radio" className="radio pink" />
            </label>
            <label className='sswwitch'>
              Disabled Radio
              <input type="radio" name="radio" className="radio pink" disabled />
            </label>
            <div>
            <label className='sswwitch'>
              Disabled Radio Active
              <input type="radio" name="radio" className="radio pink" disabled />
            </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checks;
