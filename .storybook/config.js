import { configure } from '@storybook/react';
import '../src/common/style-guide/global.scss';

function loadStories() {
    require('components/button/button.stories');
    require('pages/projects-page/projects-list/project-item/project-item.stories');
}

configure(loadStories, module);
