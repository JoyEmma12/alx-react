import $ from "jquery";
import debounce from "lodash/debounce";

$(document).ready(() => {
  const countElement = $("#count");
  const buttonElement = $("#clickButton");

  let count = 0;

  const updateCounter = () => {
    count++;
    countElement.text(`${count} clicks on the button`);
  };

  const debouncedUpdateCounter = debounce(updateCounter, 300);

  buttonElement.on("click", debouncedUpdateCounter);
});
