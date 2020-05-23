// Add your javascript here. Plagiarism will NOT be tolerated!

const events = [
  {
      id: 0,
      title: 'VanHackaton 2020',
      type: 'hackathon',
      date: '2020-06-06',
      deadline: '2020-01-06',
      location: 'Vancouver - Canada',
      isPremium: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tortor et dui imperdiet imperdiet. Donec nec commodo libero, eget aliquam lacus. Quisque vulputate nisl nibh, ullamcorper dignissim nunc scelerisque et. Sed porta non lectus quis maximus. Ut a convallis tellus. Cras pharetra sit amet metus bibendum accumsan. Quisque hendrerit dolor eget vehicula scelerisque. Integer iaculis elementum augue sit amet sagittis. Pellentesque auctor purus libero, ac consectetur ex auctor vitae. Mauris elementum orci id dui tristique, interdum tempor eros cursus. Aenean sed elementum neque. Nunc eget orci quis velit vulputate ultricies in in erat.',
  },
  {
      id: 1,
      title: 'VanMeetup',
      type: 'meetup',
      date: '2020-05-29',
      deadline: '2020-05-19',
      location: 'Toronto - Canada',
      isPremium: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tortor et dui imperdiet imperdiet. Donec nec commodo libero, eget aliquam lacus. Quisque vulputate nisl nibh, ullamcorper dignissim nunc scelerisque et. Sed porta non lectus quis maximus. Ut a convallis tellus. Cras pharetra sit amet metus bibendum accumsan. Quisque hendrerit dolor eget vehicula scelerisque. Integer iaculis elementum augue sit amet sagittis. Pellentesque auctor purus libero, ac consectetur ex auctor vitae. Mauris elementum orci id dui tristique, interdum tempor eros cursus. Aenean sed elementum neque. Nunc eget orci quis velit vulputate ultricies in in erat.',
  },
  {
      id: 2,
      title: 'VanHack Leap',
      type: 'leap',
      date: '2020-06-26',
      deadline: '2020-06-20',
      location: 'Vancouver - Canada',
      isPremium: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tortor et dui imperdiet imperdiet. Donec nec commodo libero, eget aliquam lacus. Quisque vulputate nisl nibh, ullamcorper dignissim nunc scelerisque et. Sed porta non lectus quis maximus. Ut a convallis tellus. Cras pharetra sit amet metus bibendum accumsan. Quisque hendrerit dolor eget vehicula scelerisque. Integer iaculis elementum augue sit amet sagittis. Pellentesque auctor purus libero, ac consectetur ex auctor vitae. Mauris elementum orci id dui tristique, interdum tempor eros cursus. Aenean sed elementum neque. Nunc eget orci quis velit vulputate ultricies in in erat.',
  },
  {
      id: 3,
      title: 'VanWebinar Private',
      type: 'webinar',
      date: '2020-09-09',
      deadline: '2020-08-08',
      location: 'Vancouver - Canada',
      isPremium: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tortor et dui imperdiet imperdiet. Donec nec commodo libero, eget aliquam lacus. Quisque vulputate nisl nibh, ullamcorper dignissim nunc scelerisque et. Sed porta non lectus quis maximus. Ut a convallis tellus. Cras pharetra sit amet metus bibendum accumsan. Quisque hendrerit dolor eget vehicula scelerisque. Integer iaculis elementum augue sit amet sagittis. Pellentesque auctor purus libero, ac consectetur ex auctor vitae. Mauris elementum orci id dui tristique, interdum tempor eros cursus. Aenean sed elementum neque. Nunc eget orci quis velit vulputate ultricies in in erat.',
  },
  {
      id: 4,
      title: 'VanHack Recruiting Fair',
      type: 'mission',
      date: '2020-07-11',
      deadline: '2020-07-01',
      location: 'Vancouver - Canada',
      isPremium: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tortor et dui imperdiet imperdiet. Donec nec commodo libero, eget aliquam lacus. Quisque vulputate nisl nibh, ullamcorper dignissim nunc scelerisque et. Sed porta non lectus quis maximus. Ut a convallis tellus. Cras pharetra sit amet metus bibendum accumsan. Quisque hendrerit dolor eget vehicula scelerisque. Integer iaculis elementum augue sit amet sagittis. Pellentesque auctor purus libero, ac consectetur ex auctor vitae. Mauris elementum orci id dui tristique, interdum tempor eros cursus. Aenean sed elementum neque. Nunc eget orci quis velit vulputate ultricies in in erat.',
  },
  {
    id: 5,
    title: 'VanHack Open Webinar',
    type: 'webinar',
    date: '2020-08-11',
    deadline: '2020-07-22',
    location: 'Vancouver - Canada',
    isPremium: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tortor et dui imperdiet imperdiet. Donec nec commodo libero, eget aliquam lacus. Quisque vulputate nisl nibh, ullamcorper dignissim nunc scelerisque et. Sed porta non lectus quis maximus. Ut a convallis tellus. Cras pharetra sit amet metus bibendum accumsan. Quisque hendrerit dolor eget vehicula scelerisque. Integer iaculis elementum augue sit amet sagittis. Pellentesque auctor purus libero, ac consectetur ex auctor vitae. Mauris elementum orci id dui tristique, interdum tempor eros cursus. Aenean sed elementum neque. Nunc eget orci quis velit vulputate ultricies in in erat.',
  }
];

const eventIcons = {
  hackathon: 'laptop',
  meetup: 'group',
  leap: 'directions_run',
  premium: 'star',
  mission: 'work',
  webinar: 'meeting_room',
};

const homePage = document.getElementById("events");
const eventPage = document.getElementById("event-page");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

document.addEventListener('click', (evt) => {
  if (evt.target.id === 'overlay'){
    closeModal();
  }
})

function renderAllEvents(){
  const section = document.getElementById("all-events");

  const eventType = (event) => event.isPremium ? 'premium' : event.type;

  section.innerHTML = events.map(event => {
    return (
    `<div class="event ${eventType(event)}" id="event-${event.id}">
      <div class="icon"><i class="material-icons">${eventIcons[eventType(event)]}</i></div>
      <div class="event-info">
        <p class="event-title">${event.title}</p>
        <span>When: ${event.date}</span>
        <div class="location">
          <span>Where: </span>
          <p class="location">
            <i class="material-icons">location_on</i>${event.location}
          </p>
        </div>
      </div>
      <button type="button" class="apply" onclick="applyToEvent(${event.id})">
        Apply now <i class="material-icons">insert_invitation</i>
      </button>
    </div>`
    );
  }).join('');
}

function togglePages(){
  homePage.classList.toggle("hidden");
  eventPage.classList.toggle("hidden");
}

function parseDate(date) {
  const dateToFormat = new Date(date);
  const dateTimeFormat = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: '2-digit',});

  const parsedDate = dateTimeFormat.format(dateToFormat).split(', ');

  return {
    weekDay: parsedDate[0],
    month: parsedDate[1].split(' ')[0],
    day: parsedDate[1].split(' ')[1],
  };
}

function renderEvent(event){
  const eventTitle = document.getElementById("event-title-page");
  const eventDescription = document.getElementById("event-description");
  const eventDay = document.getElementById("day");
  const eventDeadline = document.querySelector("p#deadline > span");
  const eventMonth = document.getElementById("month");
  const eventWeekDay = document.getElementById("week-time");
  const eventLocation = document.getElementById("event-location");
  const eventApplyButton = document.getElementById("event-apply-button");

  eventTitle.innerHTML = event.title;
  eventDescription.innerHTML = event.description;
  eventDay.innerHTML = parseDate(event.date).day;
  eventDeadline.innerHTML = new Date(event.deadline).toLocaleDateString();
  eventMonth.innerHTML = parseDate(event.date).month;
  eventWeekDay.innerHTML = parseDate(event.date).weekDay;
  eventLocation.innerHTML = event.location;
  eventApplyButton.onclick = event.isPremium ? () => confirmApply(true) : () => confirmApply(false);
  eventApplyButton.style.background = event.isPremium ? '#ff9505' : '#0675ce';
}

function applyToEvent(eventId){
  togglePages();
  const event = events.find(event => event.id === eventId);
  if (event){
      renderEvent(event);
  }
}

function confirmApply(isPremium) {
  modal.classList.toggle("hidden");
  overlay.style.background = "#000";
  overlay.style.display = "block";
  if (isPremium){
    document.getElementById("modal-header").classList.add("premium");
    document.getElementById("modal-icon").innerHTML = "star";
    document.getElementById("modal-title").innerHTML = "THIS IS A PREMIUM-ONLY WEBINAR";
    document.getElementById("modal-subtitle").innerHTML = "You need to have a premium VanHack subscription in order to apply to this webinar.";
    const applyButton = document.createElement('a');
    applyButton.id = "premium-button";
    applyButton.target = "_blank";
    applyButton.href = "https://vanhack.com/premium";
    applyButton.className = "buy-premium";
    applyButton.innerHTML = "GET PREMIUM";
    document.getElementById("modal-body").appendChild(applyButton);
  } else {
    if (document.getElementById("premium-button")) document.getElementById("premium-button").remove();
    document.getElementById("modal-header").classList.add("success");
    document.getElementById("modal-icon").innerHTML = "check";
    document.getElementById("modal-title").innerHTML = "THANK YOU FOR APPLYING!";
    document.getElementById("modal-subtitle").innerHTML = "Stay tuned for the details that were sent to your e-mail!";
  }
}

function closeModal(){
  modal.classList.toggle("hidden");
  overlay.style.background = "none";
  overlay.style.display = "none";
  document.getElementById("modal-header").classList.value = "modal-header";
}

renderAllEvents();