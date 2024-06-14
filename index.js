let boat = {
  speed: 0,
  heading: 0
};

const speedInput = document.getElementById('speedInput');
const headingInput = document.getElementById('headingInput');
const updateButton = document.getElementById('updateButton');
const boatInfo = document.getElementById('boatInfo');

function updateBoatInfo() {
  boatInfo.innerHTML = `
    <p>Speed: ${boat.speed} knots</p>
    <p>Heading: ${boat.heading}°</p>
  `;
}

updateButton.addEventListener('click', () => {
  boat.speed = parseInt(speedInput.value);
  boat.heading = parseInt(headingInput.value);
  updateBoatInfo();
});

updateBoatInfo();
