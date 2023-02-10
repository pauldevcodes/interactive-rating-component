// I am selecting the elements I need from the html and assiging them to a variable
const mainContainer = document.querySelector('.main_container')
const thankYouContainer = document.querySelector('.thank_you')
const submitButton = document.querySelector('#submit');
const rateAgain = document.querySelector('#rate_again');
const rating = document.querySelector('.rating');
const rates = document.querySelectorAll('.btn');

// I need to know which rate was clicked and display it in my thank you page
// i am using for each to loop over all the rate buttons i have
rates.forEach( (rate) => {
    rate.addEventListener('click', () => {
        // console.log(rate.innerHTML)
        rating.innerHTML = rate.innerHTML
    })
})

// I am giving the submit button a function when it is clicked
submitButton.addEventListener('click', () => {
    thankYouContainer.classList.remove('hid');
    mainContainer.classList.add('toggle');
    // mainContainer.style.display = 'none'
})

rateAgain.addEventListener('click', () => {
    thankYouContainer.classList.add('hid');
    mainContainer.classList.remove('toggle');
    // mainContainer.style.display = 'block'
})