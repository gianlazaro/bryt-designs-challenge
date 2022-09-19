import './style.css';
import $ from 'jquery';

const data = {};

const stepOne = $('.step.one');
const stepTwo = $('.step.two');
const stepThree = $('.step.three');

const [firstName, lastName, userName, email, password, confirmPw] = stepOne[0];
const [address, addresspt2, country, city, zipcode, company, phone] = stepTwo[0];
const [preference] = stepThree[0];

// display section one at a time
// when Next button is pressed, save data to data obj
stepOne.on('submit', (e)=> {
  e.preventDefault();
  data.firstName = firstName.value;
  data.lastName = lastName.value;
  data.userName = userName.value;
  data.email = email.value;
  data.password = password.value;

  stepOne.addClass('d-none');
  stepThree.addClass('d-none');
  stepTwo.removeClass('d-none');
})

stepTwo.on('submit', (e)=> {
  e.preventDefault();
  data.address = address.value;
  data.addresspt2 = addresspt2.value;
  data.country = country.value;
  data.city = city.value;
  data.zipcode = zipcode.value;
  data.company = company.value;
  data.phone = phone.value;

  stepTwo.addClass('d-none');
  stepThree.removeClass('d-none');
})

$('.step.two .backBtn').on('click', (e)=> {
  stepTwo.addClass('d-none');
  stepThree.addClass('d-none');
  stepOne.removeClass('d-none');

  firstName.value = '' || data.firstName;
  lastName.value = '' || data.lastName;
  userName.value = '' || data.userName;
  email.value = '' || data.email;
  password.value = '' || data.password;
});

stepThree.on('submit', (e)=> {
  e.preventDefault();
  console.log('submitted');
  console.log(data.firstName, data.lastName);
})

$('.step.three .backBtn').on('click', (e)=> {
  stepOne.addClass('d-none');
  stepThree.addClass('d-none');
  stepTwo.removeClass('d-none');

  address.value = '' || data.address;
  addresspt2.value = '' || data.addresspt2;
  country.value = '' || data.country;
  city.value = '' || data.city;
  zipcode.value = '' || data.zipcode;
  company.value = '' || data.company;
  phone.value = '' || data.phone;
});
