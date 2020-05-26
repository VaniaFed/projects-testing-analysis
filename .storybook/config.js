import { configure } from '@storybook/react';
import '../src/common/style-guide/global.scss';

function loadStories() {
    require('components/button/button.stories');
}

configure(loadStories, module);
