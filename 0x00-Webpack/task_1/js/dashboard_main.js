import $ from 'jquery';
import debounce from 'lodash/debounce'; // Import the debounce function from Lodash

$(document).ready(function () {
  // Add Paragraph Elements
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');

  // Add Button Element
  $('body').append('<button id="click">Click here to get started</button>');

  // Add Paragraph Element for Count
  $('body').append('<p id="count"></p>');

  // Add Another Paragraph
  $('body').append('<p>Copyright - Holberton School</p>');

  // Add updateCounter function
  let count = 0;

  function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  }

  // Add click event handler using debounce
  const debouncedUpdateCounter = _.debounce(updateCounter, 300); // Debounce for 300 milliseconds

  $('#click').on('click', debouncedUpdateCounter);
});
