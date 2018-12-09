"use strict";
import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
window.countTo = require("jquery-countto");

const $document=$(document);

$document.ready(function(){
    $( ".counter" ).each(function( index ) {
        console.log( index + ": " + $( this ).text() );
    });
});