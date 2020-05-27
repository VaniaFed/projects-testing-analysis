const path = require('path');

module.exports = {
    resolve: {
        alias: {
            components: path.resolve(__dirname, '../src/components/'),
            containers: path.resolve(__dirname, '../src/containers/'),
            layouts: path.resolve(__dirname, '../src/layouts/'),
            src: path.resolve(__dirname, '../src/'),
            static: path.resolve(__dirname, '../static/'),
            actions: path.resolve(__dirname, '../src/actions'),
            reducers: path.resolve(__dirname, '../src/reducers/'),
            selectors: path.resolve(__dirname, '../src/selectors/'),
            utils: path.resolve(__dirname, '../src/utils/'),
            types: path.resolve(__dirname, '../src/types/'),
            common: path.resolve(__dirname, '../src/common/'),
            sagas: path.resolve(__dirname, '../src/sagas/'),
            pages: path.resolve(__dirname, '../src/pages/'),
            lib: path.resolve(__dirname, '../src/lib/'),
            services: path.resolve(__dirname, '../src/services/'),
            'user-constants': path.resolve(
                __dirname,
                '../src/user-constants.ts'
            )
        }
    }
};
