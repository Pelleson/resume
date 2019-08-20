import 'babel-polyfill';
import { addDecorator, configure } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';

import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import svLocaleData from 'react-intl/locale-data/sv';

addLocaleData(enLocaleData);
addLocaleData(svLocaleData);

const svMessages = require(`../src/translations/sv`).default;
const enMessages = require(`../src/translations/en`).default;
const messages = { sv: svMessages, en: enMessages };
const getMessages = (locale) => messages[locale];
setIntlConfig({
  locales: ['en', 'sv'],
  defaultLocale: 'en',
  getMessages
});
addDecorator(withIntl);

// automatically import all files ending in *.stories.js

const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
