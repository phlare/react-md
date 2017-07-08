import React from 'react';
import ExamplesPage from 'components/ExamplesPage';

import README from './README.md';

const examples = [];

const AccessibleFakeButtons = () => <ExamplesPage description={README} examples={examples} />;
export default AccessibleFakeButtons;