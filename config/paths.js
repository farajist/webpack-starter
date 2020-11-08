const path = require('path');

module.exports = {

    // source files 
    src: path.resolve(__dirname, '../src'),

    // production build files
    build: path.resolve(__dirname, '../dist'),

    // static files copied to build folder (dist)
    public: path.resolve(__dirname, '../public'),

}