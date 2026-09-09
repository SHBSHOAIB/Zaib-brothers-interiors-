/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("show");
    });

}

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbar) {
            navbar.classList.remove("show");
        }

    });

});


/* =========================================
   FOOTER YEAR
========================================= */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* =========================================
   LIGHTBOX ELEMENTS
========================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxClose = document.getElementById("lightboxClose");


/* =========================================
   OPEN LIGHTBOX
========================================= */

function openLightbox(image, title) {

    if (!lightbox || !lightboxImage) {
        return;
    }

    lightboxImage.src = image;
    lightboxImage.alt = title || "";

    if (lightboxTitle) {
        lightboxTitle.textContent = title || "";
    }

    lightbox.classList.add("show");

}


/* =========================================
   CLOSE LIGHTBOX
========================================= */

if (lightboxClose) {

    lightboxClose.addEventListener("click", function () {

        lightbox.classList.remove("show");

    });

}


if (lightbox) {

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("show");

        }

    });

}


/* =========================================
   ESC KEY - CLOSE LIGHTBOX
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (lightbox) {
            lightbox.classList.remove("show");
        }

        if (collegeModal) {
            collegeModal.classList.remove("show");
        }

    }

});


/* =========================================
   COLLEGE GALLERY
========================================= */

const collegeModal = document.getElementById("collegeModal");

const collegeGalleryGrid =
    document.getElementById("collegeGalleryGrid");

const collegeTitle =
    document.getElementById("collegeTitle");


/* =========================================
   COLLEGE IMAGES
========================================= */

const collegeGalleries = {

college1: {

    title: "College Designs",

    images: [

        "images/college1-1.jpg",
        "images/college1-2.jpg",
        "images/college1-3.jpg",
        "images/college1-4.jpg",
        "images/college1-5.jpg",
        "images/college1-6.jpg",
        "images/college1-7.jpg"

    ]

},


    college2: {

        title: "College Project",

        images: [

            "images/college2-1.jpg",
            "images/college2-2.jpg",
            "images/college2-3.jpg",
            "images/college2-4.jpg",
            "images/college2-5.jpg",
            "images/college2-6.jpg",
            "images/college2-7.jpg",
            "images/college2-8.jpg"

        ]

    }

};


/* =========================================
   OPEN COLLEGE GALLERY
========================================= */

function openCollegeGallery(collegeName) {

    if (!collegeModal || !collegeGalleryGrid) {
        return;
    }


    const gallery =
        collegeGalleries[collegeName];


    if (!gallery) {
        return;
    }


    if (collegeTitle) {

        collegeTitle.textContent =
            gallery.title;

    }


    collegeGalleryGrid.innerHTML = "";


    gallery.images.forEach(function (image, index) {

        const img =
            document.createElement("img");


        img.src = image;

        img.alt =
            gallery.title + " Design " + (index + 1);


        img.addEventListener("click", function () {

            openLightbox(
                image,
                gallery.title
            );

        });


        collegeGalleryGrid.appendChild(img);

    });


    collegeModal.classList.add("show");

}


/* =========================================
   CLOSE COLLEGE GALLERY
========================================= */

function closeCollegeGallery() {

    if (collegeModal) {

        collegeModal.classList.remove("show");

    }

}


/* =========================================
   COLLEGE POPUP CLOSE
========================================= */

if (collegeModal) {

    collegeModal.addEventListener("click", function (event) {

        if (event.target === collegeModal) {

            closeCollegeGallery();

        }

    });

}


/* =========================================
   ABOUT COUNTERS
========================================= */

const counters =
    document.querySelectorAll(".counter");


counters.forEach(function (counter) {

    const target =
        Number(counter.getAttribute("data-target"));

    let current = 0;

    const increment =
        target / 100;


    function updateCounter() {

        current += increment;


        if (current < target) {

            counter.textContent =
                Math.ceil(current);

            setTimeout(updateCounter, 20);

        } else {

            counter.textContent =
                target;

        }

    }


    updateCounter();

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("fullName")
                    .value
                    .trim();


            const phone =
                document
                    .getElementById("phone")
                    .value
                    .trim();


            const service =
                document
                    .getElementById("service")
                    .value;


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            if (
                !name ||
                !phone ||
                !service ||
                !message
            ) {

                formMessage.textContent =
                    "Please fill in all required fields.";

                formMessage.className =
                    "form-message error";

                return;

            }


            const phonePattern =
                /^[0-9+\-\s()]{7,20}$/;


            if (!phonePattern.test(phone)) {

                formMessage.textContent =
                    "Please enter a valid phone number.";

                formMessage.className =
                    "form-message error";

                return;

            }


            formMessage.textContent =
                "Thank you! Your inquiry has been received. We will contact you soon.";


            formMessage.className =
                "form-message success";


            contactForm.reset();

        }
    );

}