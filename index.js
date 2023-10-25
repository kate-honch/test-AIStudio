const events = [
    {
        img: 'images/events/event1.jpg',
        date: '24/10/2023',
        title: 'Forbes Tech 2023',
        text: 'We help brands talk about themselves and find their audience on the pages of Forbes.',
        price: 'From 50$',
        elem: 'Buy a ticket'
    },
    {
        img: 'images/events/event2.jpg',
        date: '24/10/2023',
        title: 'CEO Summit',
        text: 'CEO Summit - a meeting of large companies for strategic discussions and exchange of ideas.',
        price: 'From 38$',
        elem: 'Buy a ticket'
    },
    {
        img: 'images/events/event3.jpg',
        date: '24/10/2023',
        title: 'Forum "Independents"',
        text: 'What should business and the state do to reintegrate veterans into a peaceful life',
        price: 'FREE',
        elem: 'Buy a ticket'
    },
    {
        img: 'images/events/event4.jpg',
        date: '24/10/2023',
        title: 'Forum of Entrepreneurs',
        text: 'You will be able to exchange solutions and experience, feel unity with like-minded people and make new acquaintances.',
        price: 'From 40$',
        elem: 'Buy a ticket'
    },
    {
        img: 'images/events/event5.jpg',
        date: '24/10/2023',
        title: 'Sustainability Showcase',
        text: 'Forum dedicated to sustainable development and innovations in the field of ecology and environment.',
        price: 'FREE',
        elem: 'Buy a ticket'
    },
    {
        img: 'images/events/event6.jpg',
        date: '24/10/2023',
        title: 'Art & Design Showcase',
        text: 'Art and Design Day, where masterpieces and creative ideas from recognized artists and designers are exhibited.',
        price: 'From 35$',
        elem: 'Buy a ticket'
    },
];

const eventsContainer = document.querySelector('.events__container');
const tabsBtn = document.querySelectorAll('.events__tabs--btn');
const tabsContent = document.querySelectorAll('.events__content');

tabsBtn.forEach(btn => {
    btn.addEventListener('click', openTab)
});

function openTab(e) {
    const currentTabBtnAttribute = e.target.getAttribute('data-btn');
    const currentTabBtn = e.target;

    tabsBtn.forEach(btn => {
        btn.classList.remove('events__tabs--btn-active');
    });

    currentTabBtn.classList.add('events__tabs--btn-active');

    tabsContent.forEach(content => {
        content.classList.remove('events__content-active');
    });

    document.querySelector(`#${currentTabBtnAttribute}`).classList.add('events__content-active');
};

let contentEvents = '';

events.forEach(event => {
    contentEvents += `<div class="events__block">
        <img src=${event.img} alt="events 1">

        <div class="events__info">
            <p class="block__date block__date--next events__date">${event.date}</p>

            <h3 class="events__block--title">${event.title}</h3>

            <p class="text events__text">${event.text}</p>

            <p class="events__price">${event.price}</p>

            <p class="events__elem">${event.elem}</p>
        </div>
    </div>`
});

eventsContainer.insertAdjacentHTML('afterbegin', contentEvents);
