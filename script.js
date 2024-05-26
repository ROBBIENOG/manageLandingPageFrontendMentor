  let testimonials = Array.from(document.querySelectorAll('.div_avatar'));
  let index = 0;

function rotateTestimonials() {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = (i >= index && i < index + 3) ? 'block' : 'none';
    });
    index = (index + 1) % (testimonials.length - 2);
}

rotateTestimonials(); 
setInterval(rotateTestimonials, 3000); 

  