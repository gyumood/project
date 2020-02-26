'use strict';

const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const SpritesmithPlugin = require('webpack-spritesmith');

const spr_name = process.env.npm_config_spr;

if(typeof spr_name === 'undefined') throw new Error('컴파일할 [폴더명]이 입력되지 않았습니다 :: ex) npm --spr=[폴더명] run spr');

//default plugins
let plugins = [];

//ir생성
let sprs = [];
glob.sync(`./src/asset/spr/${spr_name}`).forEach(function(item, i){
    sprs[i] = item.replace('./src/asset/spr/', '');
});

let date = new Date();
let year = String(date.getFullYear()).substr(2, 3);
let month = date.getMonth() + 1;
let day = date.getDate();
let hour = date.getHours();
let min = date.getMinutes();
if(month < 10) month = '0' + month;
if(day < 10) day = '0' + day;
if(hour < 10) hour = '0' + hour;
if(min < 10) hour = '0' + min;
let resultDate = '';
resultDate += year + month + day + hour + min;

for(let i=0; i<sprs.length; i++){
    let loc = sprs[i];
    plugins.push(
        new SpritesmithPlugin({
            src: {
                cwd: 'src/asset/spr/' + loc,
                glob: '*.png'
            },
            target: {
                image: 'public/static/images/spr/spr_' + loc + '.png',
                css: 'src/asset/scss/spr/spr.' + loc + '.scss'
            },
            apiOptions: {
                cssImageRef: '/static/images/spr/spr_' + loc + '.png?' + resultDate
            }
        })
    );
}

module.exports = {
    entry: '_entries/etc_sprite',
    output: {
        path: path.join(__dirname),
        filename: '../src/asset/_garbage/sprite.complete.js'
    },
    plugins: plugins,
    resolve: {
        extensions: ['.js'],
        modules: [
            path.resolve('src/asset'),
            'node_modules'
        ]
    },
    mode: 'production'
};