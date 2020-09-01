import * as $ from 'jquery';
import Post from '@models/Post';
import './styles/styles.css';
import json from '@/assets/json'; // Webpack knows how to work with json by default
import WebpackLogo from '@/assets/webpack-logo.png'; //'@' - these are aliases to cope with relative paths
import xml from '@/assets/data.xml';
import csv from '@/assets/data.csv';

const post = new Post('My new Post', WebpackLogo);

$('pre').addClass('code').html(post.toString());
//console.log('Post to string', post.toString());
//console.log('[JSON]:', json);
//console.log('[XML]:', xml);
//console.log('[CSV]:', csv);
