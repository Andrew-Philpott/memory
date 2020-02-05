import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { createGameListener, cardClickListener } from './js/interfacelogic.js';
import $ from 'jquery';

$(document).ready(function() {
  $("#difficulty-input-form").submit(function(event) {
    event.preventDefault();
    createGameListener();
    cardClickListener();
  });
});