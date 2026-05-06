const seats = document.querySelectorAll('.seat');

let selectedSeats = [];
let selectedMovie = 'John Wick';

seats.forEach(seat => {

  seat.addEventListener('click', () => {

    seat.classList.toggle('selected');

    const seatNumber = seat.innerText;

    if(selectedSeats.includes(seatNumber)){
      selectedSeats = selectedSeats.filter(s => s !== seatNumber);
    } else {
      selectedSeats.push(seatNumber);
    }

  });

});

function selectMovie(title, description, genre, duration, rating, image){

  selectedMovie = title;

  document.getElementById('detailTitle').innerText = title;
  document.getElementById('detailDescription').innerText = description;
  document.getElementById('detailGenre').innerText = genre;
  document.getElementById('detailDuration').innerText = duration;
  document.getElementById('detailRating').innerText = rating;
  document.getElementById('detailImage').src = image;

  window.location.href = '#details';
}

function confirmBooking(){

  const name = document.getElementById('name').value;

  if(name === ''){
    alert('Please enter your name');
    return;
  }

  if(selectedSeats.length === 0){
    alert('Please select at least 1 seat');
    return;
  }

  document.getElementById('confirmName').innerText = name;
  document.getElementById('confirmMovie').innerText = selectedMovie;
  document.getElementById('confirmSeats').innerText = selectedSeats.join(', ');
  document.getElementById('total').innerText = selectedSeats.length * 18;

  window.location.href = '#confirmation';
}
