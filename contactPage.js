// Create a GSAP timeline for the contact-heading
const tl = gsap.timeline();

// Animate the title first
tl.to(".contact-heading", {
  duration: 1.6,
  opacity: 1,
  y: 0,
  ease: "power2.out"
})


//Creating GSAP MotionPath for the map and pin route
gsap.registerPlugin(MotionPathPlugin);

gsap.to("#pin",{
    duration: 8,
    repeat: -1,
    ease: "none",
    motionPath:{
        path: "#driverPath",
        align: "#driverPath",
        autoRotate:true,
        alignOrigin:[0.5, 0.9]
    }
});

//Animating the signiture
gsap.registerPlugin(DrawSVGPlugin);

gsap.from("#signature", {
  drawSVG: "0%",
  duration: 4,
  ease:"power2.inOut",
  scrollTrigger:{
    trigger: "#signature",
    start: "top 75%",
    toggleActions: "play pause resume pause",

  }
});


//Form functionality
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');

const successMessage = document.getElementById('successMessage');

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group error';
  const small = formGroup.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group success';
  const small = formGroup.querySelector('small');
  small.innerText ='Looks good!'
}

function checkEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function checkPhone(phone) {
  const re = /^\+?\d{7,15}$/;
  return re.test(phone);
}

function validateInput(input, type='text') {
  const value = input.value.trim();
  if (!value) {
    showError(input, `${input.name.charAt(0).toUpperCase() + input.name.slice(1)} is required`);
    return false;
  }

  if (type === 'email' && !checkEmail(value)) {
    showError(input, 'Email is invalid');
    return false;
  }

  if (type === 'phone' && !checkPhone(value)) {
    showError(input, 'Phone number is invalid');
    return false;
  }

  showSuccess(input);
  return true;
}

//Real-time validation
[nameInput, phoneInput, messageInput, emailInput, subjectInput].forEach(input => {
  input.addEventListener('input', () => {
    if(input === emailInput) validateInput(input, 'email');
    else if(input === phoneInput) validateInput(input, 'phone');
    else validateInput(input);
  });
});

//Character counter display
const messageMax = 600;
messageInput.addEventListener('input', () => {
  const remaining = messageMax - messageInput.value.length;
  document.getElementById('charCount').innerText = `${remaining} characters remaining`;
});

//Submit button function
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isNameValid = validateInput(nameInput);
  const isPhoneValid = validateInput(phoneInput, 'phone');
   const isMessageValid = validateInput(messageInput);
  const isEmailValid = validateInput(emailInput, 'email');
  const isSubjectValid = validateInput(subjectInput);

  if (isNameValid && isPhoneValid && isMessageValid && isEmailValid && isSubjectValid) {
    successMessage.style.display = 'block';
    form.reset();
    document.querySelectorAll('.form-group').forEach(g => g.className = 'form-group');
    document.getElementById('charCount').innerText = "600 characters remaining";
  }else {
    successMessage.style.display = 'none';
  }
});