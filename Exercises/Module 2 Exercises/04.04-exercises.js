// Exercise 1: Controlled Country Picker


// Use the COUNTRIES constant to dynamically generate the set of <option> elements.
// In order to map over an object, you'll need to use something like Object.keys() or Object.entries()
// There should be a "blank" option, selected by default. It shouldn't default to the first country in the list.
// The indicator at the bottom should update when the user changes their selected country.
// No warnings in the dev console



const COUNTRIES = {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AG: "Antigua and Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia and Herzegovina",
    BW: "Botswana",
    BV: "Bouvet Island",
    BR: "Brazil",
    IO: "Brit. Indian Ocean",
    VG: "British Virgin Islands",
    BN: "Brunei Darussalam",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    CV: "Cape Verde",
    KY: "Cayman Islands",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CX: "Christmas Island",
    CC: "Cocos Islands",
    CO: "Colombia",
    KM: "Comoros",
    CG: "Congo",
    CK: "Cook Islands",
    CR: "Costa Rica",
    CI: "Cote D’Ivoire",
    HR: "Croatia",
    CU: "Cuba",
    CW: "Curaçao",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Ethiopia",
    FK: "Falkland Islands",
    FO: "Faroe Islands",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana",
    PF: "French Polynesia",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    VA: "Holy See/ Vatican City",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran",
    IQ: "Iraq",
    IE: "Ireland",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JP: "Japan",
    JE: "Jersey",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Lao People’s DR",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libyan Arab Jamahiriya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macao",
    MK: "Macedonia",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Micronesia",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    AN: "Netherlands Antilles",
    NC: "New Caledonia",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk Island",
    KP: "North Korea",
    MP: "Northern Mariana Islands",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestinian Territory",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippines",
    PN: "Pitcairn",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    RE: "Reunion",
    RO: "Romania",
    RU: "Russian Federation",
    RW: "Rwanda",
    GS: "S. Georgia/ Sandwich Islands",
    SH: "Saint Helena",
    KN: "Saint Kitts and Nevis",
    LC: "Saint Lucia",
    PM: "Saint Pierre and Miquelon",
    VC: "Saint Vincent/ Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome and Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    KR: "South Korea",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SJ: "Svalbard and Jan Mayen",
    SZ: "Swaziland",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syrian Arab Republic",
    TW: "Taiwan",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "Timor-Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad and Tobago",
    TN: "Tunisia",
    TR: "Turkey",
    TM: "Turkmenistan",
    TC: "Turks and Caicos Islands",
    TV: "Tuvalu",
    VI: "U.S. Virgin Islands",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    US: "United States",
    UM: "United States (M.O.I.)",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    WF: "Wallis and Futuna",
    EH: "Western Sahara",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
  };


  import React from 'react';

  import { COUNTRIES } from './data';
  
  /*
    “COUNTRIES” is a dictionary-like object
    with the following shape:
  
    {
      AF: "Afghanistan",
      AL: "Albania",
      DZ: "Algeria",
    }
  */
  
  const countryNames = Object.entries(COUNTRIES);
  
  function App() {
    const [
      country,
      setCountry,
    ] = React.useState('');
  
    return (
      <form>
        <fieldset>
          <legend>Shipping Info</legend>
          <label htmlFor="country">
            Country:
          </label>
          <select
            id="country"
            name="country"
            value={country}
            onChange={event => {
                setCountry(event.target.value)
            }}
          >
                      <option value="">— Select Country — </option>
  
            {
              countryNames.map(([code, country]) => {
                return (
                  <option value={code} key={code}>{country}</option>
                )
              })
            }
          </select>
        </fieldset>
  
        <p className="country-display">
          Selected country: {COUNTRIES[country]}
        </p>
  
        <button>Submit</button>
      </form>
    );
  }
  
  export default App;

  // Exercise 2: Two Factor Authentication


//   The input's value should be held in React state.
// When the user submits their code, a window.alert should let them know whether it's correct or not, by comparing their submitted value with the CORRECT_CODE constant.
// A <form> tag should be used.



import React from 'react';

const CORRECT_CODE = '123456';

function TwoFactor() {

  const [state, setState] = React.useState('');

  function preventThing(e) {
    e.preventDefault();

   const correctCode = state === CORRECT_CODE;
   window.alert(correctCode ? 'Correct!' : 'Not Correct')
  }
    
  return (
    <form onSubmit={preventThing}>
      <label htmlFor="auth-code">
        Enter authorization code:
      </label>
      <div className="row">
        <input
          id="auth-code"
          type="text"
          value={state}
          required={true}
          maxLength={6}
          onChange={ (e) => {
            setState(e.target.value);
          }}
        />
        <button>Validate</button>
      </div>
    </form>
  );
}

export default TwoFactor;


// Exercise #3 - Generative Art


import React from 'react';

import GenerativeArt from './GenerativeArt';

function App() {
  const [numOfLines, setNumOfLines] = React.useState(5);

  /*
    Accepted values:
      - basic
      - monochrome
      - froot-loops
      - spooky
  */
  const [colorTheme, setColorTheme] = React.useState('basic');

  /*
    Accepted values:
      - circles
      - polygons
  */
  const [shape, setShape] = React.useState('circles');
  
  return (
    <>
      <GenerativeArt
        numOfLines={numOfLines}
        colorTheme={colorTheme}
        shape={shape}
      />
      
      <form>
        <fieldset>
          <legend>Controls</legend>
          <div className="row">
            <div className="col">
              <label
                htmlFor="num-of-lines"
                className="control-heading"
              >
                Number of Lines:
              </label>
              <input
                id="num-of-lines"
                type="range"
                min="1"
                max="15"
                onChange={ (e) => {
                  setNumOfLines(e.target.value)
                }}
              />
          	</div>
          </div>
          <div className="row">
            <div className="col">
              <label
                className="control-heading"
                htmlFor="color-theme"
              >
                Color Theme:
              </label>
              <select id="color-theme" onChange={ (e) =>{
              setColorTheme(e.target.value)
              }}>
                <option value="basic">
                  Basic
                </option>
                <option value="monochrome">
                  Monochrome
                </option>
                <option value="froot-loops">
                  Froot Loops
                </option>
                <option value="spooky">
                  Spooky Night
                </option>
              </select>
            </div>
            <div className="col">
              <div className="control-heading">
                Shape:
              </div>
              <div className="radio-wrapper">
                <div className="radio-option">
                  <input 
                    name="shape" 
                    type="radio"
                    value="circles"
                    checked={shape === 'circles'}
                    onChange={
                    (e) => {
                      setShape(e.target.value);
                    }
                  }/>
                  <label>
                    Circles
                  </label>
                </div>
                <div className="radio-option">
                  <input 
                    name="shape" 
                    type="radio" 
                    value="polygons"
                    checked={shape === 'polygons'}
                    onChange={
                    (e) => {
                      setShape(e.target.value);
                    }
                  } />
                  <label>
                    Polygons
                  </label>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;


