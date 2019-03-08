import React from 'react';
import { LANGUAGES } from '../utilities/constants';

interface Props {
  language: string;
}

function LanguageSelector({ language }: Props) {
  return (
    <div>
      <ul>
        {Object.keys(LANGUAGES).map(lang => (
          <li key={lang}>{lang}: {LANGUAGES[lang]}</li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSelector;
