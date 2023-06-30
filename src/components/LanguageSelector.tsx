import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select onChange={handleChangeLanguage}>
      <option value="en">English</option>
      <option value="pl">Polish</option>
    </select>
  );
};

export default LanguageSelector;