const blogsLeft = [
    {
        img: 'images/blogs/blog1.jpg',
        linkFirst: 'News',
        linkSec: 'Business',
        title: 'Demand for relaxation.',
        text: 'The picture-by-numbers market (yes, it exists and its volumes are impressive) continues to grow during the war. Stories of large manufacturers - Ideyka, Brushme and OKTO.',
        date: '11/10/2023',
    },
    {
        img: 'images/blogs/blog2.jpg',
        linkFirst: 'Business',
        linkSec: 'Tech',
        title: 'Overtook Megogo.',
        text: 'Today, the number of users of the Kyivstar TV service exceeds 1 million, most of them pay for the service. Kyivstar president Oleksandr Komarov told about this in an interview.',
        date: '08/10/2023',
    },
    {
        img: 'images/blogs/blog3.jpg',
        linkFirst: 'Ukraine',
        linkSec: 'Tech',
        title: 'A record for three years.',
        text: 'More than 26,000 natural persons – entrepreneurs are registered in Diya, which is a record number for the last three years. This was announced by the Deputy Prime Minister - Mykhailo Fedorov.',
        date: '07/10/2023',
    },
    {
        img: 'images/blogs/blog4.jpg',
        linkFirst: 'World',
        linkSec: 'News',
        title: 'It can happen again.',
        text: "Finland is on high alert because it suspects a gas pipeline leak in the Baltic Sea was caused by sabotage, raising concerns about the security of Europe's energy infrastructure, Bloomberg writes.",
        date: '07/10/2023',
    },
];

const blogsRight = [
    {
        img: 'images/blogs/blog5.jpg',
        linkFirst: 'Education',
        linkSec: 'World',
        title: 'Soft power.',
        text: 'Foreigners learn Ukrainian, order dumplings and borscht, and visit exhibitions of Ukrainian modernism. How the culture of Ukraine is moving around the world.',
        date: '09/10/2023',
    },
    {
        img: 'images/blogs/blog6.jpg',
        linkFirst: 'Business',
        linkSec: 'Tech',
        title: 'Starlink. SpaceX.',
        text: 'SpaceX announced the launch of a mobile service through Starlink, writes The Verge. Text messaging services will be available next year, followed by voice and data in 2025.',
        date: '07/10/2023',
    },
    {
        img: 'images/blogs/blog7.jpg',
        linkFirst: 'Business',
        linkSec: 'News',
        title: 'We is open for business.',
        text: 'Marsh, together with the Ukrainian government, is launching an information platform for investors. Broker Marsh, together with the government of Ukraine, is launching a platform for investors.',
        date: '07/10/2023',
    },
    {
        img: 'images/blogs/blog8.jpg',
        linkFirst: 'Business',
        linkSec: 'Tech',
        title: 'ExxonMobil.',
        text: 'The largest Western oil company ExxonMobil has agreed to buy Pioneer Natural Resources for $59.5 billion, which should trigger a wave of consolidation in the US shale oil industry.',
        date: '07/10/2023',
    },
];

const blogsLeftContainer = document.querySelector('.blogs__left');
const blogsRightContainer = document.querySelector('.blogs__right');

let contentBlogsLeft = '';

blogsLeft.forEach(blog => {
    contentBlogsLeft += `<div class="blogs__block">
        <img src=${blog.img} alt="post 2">

        <div>
            <h4 class="blogs__title">${blog.title}</h4>

            <div class="blogs__links">
                <a class="link blogs__link" href="#">${blog.linkFirst}</a>
                <a class="link blogs__link" href="#">${blog.linkSec}</a>
            </div>
            
            <p class="blogs__text">${blog.text}</p>

            <p class="block__date block__date--next">${blog.date}</p>
        </div>
    </div>`
});

blogsLeftContainer.insertAdjacentHTML('afterbegin', contentBlogsLeft);

let contentBlogsRight = '';

blogsRight.forEach(blog => {
    contentBlogsRight += `<div class="blogs__block">
        <img src=${blog.img} alt="post 2">

        <div>
            <h4 class="blogs__title">${blog.title}</h4>

            <div class="blogs__links">
                <a class="link blogs__link" href="#">${blog.linkFirst}</a>
                <a class="link blogs__link" href="#">${blog.linkSec}</a>
            </div>
    
            <p class="blogs__text">${blog.text}</p>

            <p class="block__date block__date--next">${blog.date}</p>
        </div>
    </div>`
});

blogsRightContainer.insertAdjacentHTML('afterbegin', contentBlogsRight);