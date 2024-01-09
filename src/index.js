
import {printMe, testMe} from './utils.js'
import './style.css';
import Logo from './images/logomed.png'
import Banner from './images/_banner.png'
import Insta from './images/insta.png';
import TextLogo from './images/textlogo.png';
import Food1 from './images/food1.png'
import Food2 from './images/food2.png'
import Menu from './files/TWmenu.pdf'
import {getScreenWidth} from './utils.js'
// Render functions here

const importAll = (context) => context.keys().reduce((acc, key) => {
    acc[key.replace('./', '')] = context(key);
    return acc;
  }, {});
  
// Import all images from the 'images' directory
const images = importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));


document.addEventListener('DOMContentLoaded', () => {

    console.log("Loading scripts.")
    landingPage()
    menuPage()
    miscPage()
})

function landingPage() {
    const page = document.createElement('div')

    page.appendChild(navbar())
    page.appendChild(banner())
    page.appendChild(announcementHeader())
    page.appendChild(landingPageContent())
    page.classList.add('page')

    document.body.appendChild(page)
}

function menuPage() {
    const page = document.createElement('div')
    page.classList.add('page')

    page.appendChild(pageTitle('Menu'))
    page.appendChild(menuContainer())
    document.body.appendChild(page)
}

function miscPage() {
    const page = document.createElement('div')
    page.classList.add('page')

    const title = document.createElement("h1")
    title.classList.add('margin-top-100')
    title.innerText = "About"
    page.appendChild(pageTitle("About"))
    document.body.appendChild(page)
}

// ---LANDING

// Nav
function navbar() {
    const navbar = document.createElement('nav')
    navbar.classList.add('navbar')

    const phone = document.createElement('p')
    phone.classList.add('font-regular', 'font-light', 'font-spacing', 'vertical-align', 'horizontal-margin-small')
    phone.innerText = '(808)751-1003'
    navbar.appendChild(textLogo())

    const container = document.createElement('div')
    container.classList.add('flex-row')
    

    const open = document.createElement('p')
    open.innerText = 'Open now!'
    open.classList.add('font-large', 'font-bold')
    const wrapper = document.createElement('div')
    wrapper.classList.add('text-center-wrapper', 'flex-full-width')
    wrapper.appendChild(open)

    const hours = document.createElement('p')
    hours.innerText = 'Wednesday-Sunday 5pm-10pm'
    hours.classList.add('font-regular', 'font-light', 'font-spacing', 'text-wrap-none', 'vertical-align', 'flex-item-margin-small');

    container.appendChild(hours)
    container.appendChild(phone)
    container.appendChild(insta())
    navbar.appendChild(container)
    // document.body.appendChild(navbar)
    
    return navbar
}

function insta() {
    const instaLink = document.createElement('a')
    instaLink.href="https://www.instagram.com/yakiniku_tawashi_honolulu/"
    const instaImg = document.createElement('img')
    instaImg.src = Insta
    instaImg.alt="instagram logo"
    instaLink.appendChild(instaImg)

    instaLink.classList.add('vertical-align')
    return instaLink;
}

function textLogo() {
    const textLogo = document.createElement('img')

    textLogo.src = TextLogo
    textLogo.alt = 'Tawashi Japanese Yakiniku'
    return textLogo
}

// Banner
function banner() {
    const banner = document.createElement('img');
    banner.src = Banner;
    banner.alt = 'Yakiniku Tawashi Outside'
    banner.classList.add('banner')
    // document.body.appendChild(banner)
    return banner
}

function announcementHeader() {
    const announcement = document.createElement('section')
    announcement.classList.add('full-width', 'light-blue', 'flex-row', 'flex-space-between', 'padding-large')

    // add beef
    const meatDisclaimer = document.createElement('p')
    meatDisclaimer.innerText = 'We use Premium Omaha Beef, Washugyu, and Kobe Beef!'
    meatDisclaimer.classList.add('flex-full-width', 'text-wrap-none')

    // change the size of announcement to match screen size
    if(getScreenWidth() > 1700) {
        meatDisclaimer.classList.add('font-large')
    } else {
        meatDisclaimer.classList.add('font-med')
    } // check for mobile screens

    announcement.appendChild(meatDisclaimer)
    // document.body.appendChild(announcement)
    return announcement
}

//Content
function landingPageContent() {
    const container = document.createElement('article')
    container.classList.add('page__content', 'full-width', 'padding-med')

    container.appendChild(imageContainer())
    container.appendChild(landingPageDescription())

    // document.body.appendChild(container)
    return container
}

function imageContainer() {
    // create a container for numImages images

    const imageContainer = document.createElement('section')
    imageContainer.classList.add('flex-row', 'flex-full-width', 'flex-center')

    const imageWrapper1 = document.createElement('div')
    const imageWrapper2 = document.createElement('div')


    const img1 = document.createElement('img')
    const img2 = document.createElement('img')

    img1.src = Food1
    img2.src = Food2

    img1.classList.add('flex-image')
    img2.classList.add('flex-image')
    imageWrapper1.appendChild(img1)
    imageWrapper2.appendChild(img2)
    imageContainer.appendChild(imageWrapper1)
    imageContainer.appendChild(imageWrapper2)

    return imageContainer
}

function landingPageDescription() {

    const container = document.createElement('section');
    container.classList.add('flex-column', 'flex-full-width', 'font-regular', 'font-light')
    const desc1 = document.createElement('p')
    const desc2 = document.createElement('p')

    const parking = document.createElement('span')
    parking.classList.add('font-bold');
    parking.innerText = 'Parking available'

    desc2.appendChild(parking)
    const textString = ` underneath the restaurant down the ramp towards the right side of the entrance stairway. Many street parking options are available in the surrounding area as well!`
    desc1.innerText = 'Japanese Yakiniku restaurant in the Honolulu area located in the shop formerly known as Shilawon.'
    // desc2.textContent += textString;
    desc2.appendChild(document.createTextNode(textString));

    const br1 = document.createElement('br')
    const br2 = document.createElement('br')
    
    container.appendChild(desc1)
    container.appendChild(br1)
    container.appendChild(desc2)
    container.appendChild(br2)

    return container
}

// --- MENU

function pageTitle(text) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('flex-column', 'text-center-wrapper')
    const title = document.createElement('p')
    title.classList.add('font-large', 'font-lighter', 'margin-top-100')
    title.innerText = text
    const line = document.createElement('hr')

    wrapper.appendChild(title)
    wrapper.appendChild(line)

    if(text === 'Menu') {
        title.onclick = () => {
            console.log("Opening menu")
            window.open(Menu)
        }
    }
    return wrapper
}

function menuContainer() {
    const container = document.createElement('article')
    container.classList.add('menu', 'flex-row', 'full-width', 'light-blue', 'height-700', 'padding-large', 'overflow-scroll')
    container.appendChild(menuItem(images['menu1.jpg']))
    container.appendChild(menuItem(images['menu2.jpg']))
    container.appendChild(menuItem(images['menu3.jpg']))
    container.appendChild(menuItem(images['menu4.jpg']))
    container.appendChild(menuItem(images['menu5.jpg']))
    container.appendChild(menuItem(images['menu6.jpg']))
    container.appendChild(menuItem(images['menu7.jpg']))
    return container

}

function menuItem(image) {
    const wrapper = document.createElement('div')
    const page = document.createElement('img')
    page.src = image
    page.classList.add('menu__item')

    wrapper.classList.add('horizontal-margin-small')
    page.onclick = () => console.log("Clicking")

    wrapper.appendChild(page)
    return wrapper
}