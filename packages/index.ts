import {App, Plugin} from 'vue';

import {ButtonPlugin} from './read-viewer';

const MyKitPlugin: Plugin = {
    install(app: App) {
        ButtonPlugin.install?.(app);
    },
};

export default MyKitPlugin;

export * from './read-viewer';

