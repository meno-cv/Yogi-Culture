// // ==========================
// // DARK MODE
// // ==========================

// const darkMode = document.getElementById("darkMode");

// darkMode.addEventListener("click", () => {

//     document.body.classList.toggle("dark");

//     if (document.body.classList.contains("dark")) {

//         darkMode.classList.remove("fa-moon");
//         darkMode.classList.add("fa-sun");

//     } else {

//         darkMode.classList.remove("fa-sun");
//         darkMode.classList.add("fa-moon");

//     }

// });


// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topBtn = document.createElement("div");

topBtn.className = "topBtn";

topBtn.innerHTML = "<i class='fa-solid fa-arrow-up'></i>";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};


// ==========================
// SCROLL REVEAL
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

sections.forEach(section => {

    section.classList.add("fade");

    observer.observe(section);

});


// ==========================
// NAVBAR BACKGROUND
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "#ffffff";

        navbar.style.padding = "15px 9%";

    } else {

        navbar.style.background = "rgba(255,255,255,.6)";

        navbar.style.padding = "18px 9%";

    }

});




// -------



// ==========================
// PRODUCT DATA
// ==========================

const products = {

    "Hair Oil": {

        title: "Kesha Tharangani Hair Oil",

        benefits:
            "✓ Hair Growth\n✓ Healthy Scalp\n✓ Reduces Dandruff\n✓ Strong Hair\n✓ Deep Hydration",

        price: "Rs. 2500"

    },

    "Turmeric Soap": {

        title: "Turmeric & Aththora Soap",

        benefits:
            "✓ Acne Care\n✓ Brightening\n✓ Dark Spot Reduction\n✓ Daily Use",

        price: "Rs.1500"

    },

    "Charcoal Soap": {

        title: "Charcoal & Multani Mitti Soap",

        benefits:
            "✓ Deep Cleansing\n✓ Oil Control\n✓ Tan Removal\n✓ Smooth Skin",

        price: "Rs.1500"

    }

};


// ==========================
// PRODUCT MODAL
// ==========================

const modal = document.getElementById("productModal");

const modalTitle = document.getElementById("modalTitle");

const modalBenefits = document.getElementById("modalBenefits");

const modalPrice = document.getElementById("modalPrice");

const orderBtn = document.getElementById("orderBtn");

document.querySelectorAll(".productBtn").forEach(button => {

    button.addEventListener("click", () => {

        const product = products[button.dataset.product];

        modal.style.display = "flex";

        modalTitle.innerText = product.title;

        modalBenefits.innerText = product.benefits;

        modalPrice.innerText = product.price;

        orderBtn.href =
            `https://wa.me/94XXXXXXXXX?text=Hi! I'm interested in ${product.title}`;

    });

});

document.querySelector(".close").onclick = () => {

    modal.style.display = "none";

};

window.onclick = (e) => {

    if (e.target == modal) {

        modal.style.display = "none";

    }

};


// ==========================
// LOADER
// ==========================

window.onload = () => {

    setTimeout(() => {

        document.querySelector(".loader").style.display = "none";

    }, 1500);

};


// ----- 

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.style.background = "#ffffff";
            navbar.style.padding = "15px 9%";

        } else {

            navbar.style.background = "rgba(255,255,255,.6)";
            navbar.style.padding = "18px 9%";

        }

    });

}

const closeBtn = document.querySelector(".close");

if (closeBtn) {

    closeBtn.onclick = () => {

        modal.style.display = "none";

    };

}



// ------ 



// ==========================
// PRODUCT DATA
// ==========================

const products = {

    "Hair Oil": {

        title: "Kesha Tharangani Hair Oil",

        benefits:
            "✓ Hair Growth\n✓ Healthy Scalp\n✓ Reduces Dandruff\n✓ Strong Hair\n✓ Deep Hydration",

        price: "Rs. 2500"

    },

    "Turmeric Soap": {

        title: "Turmeric & Aththora Soap",

        benefits:
            "✓ Acne Care\n✓ Brightening\n✓ Dark Spot Reduction\n✓ Daily Use",

        price: "Rs.1500"

    },

    "Charcoal Soap": {

        title: "Charcoal & Multani Mitti Soap",

        benefits:
            "✓ Deep Cleansing\n✓ Oil Control\n✓ Tan Removal\n✓ Smooth Skin",

        price: "Rs.1500"

    }

};


// ==========================
// PRODUCT MODAL
// ==========================

const modal = document.getElementById("productModal");

const modalTitle = document.getElementById("modalTitle");

const modalBenefits = document.getElementById("modalBenefits");

const modalPrice = document.getElementById("modalPrice");

const orderBtn = document.getElementById("orderBtn");

document.querySelectorAll(".productBtn").forEach(button => {

    button.addEventListener("click", () => {

        const product = products[button.dataset.product];

        modal.style.display = "flex";

        modalTitle.innerText = product.title;

        modalBenefits.innerText = product.benefits;

        modalPrice.innerText = product.price;

        orderBtn.href =
            `https://wa.me/741373023?text=Hi! I'm interested in ${product.title}`;

    });

});

document.querySelector(".close").onclick = () => {

    modal.style.display = "none";

};

window.onclick = (e) => {

    if (e.target == modal) {

        modal.style.display = "none";

    }

};



// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {

    navLinks.classList.toggle("active");

};


// ---- 


// ==========================
// COUNTERS
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;

        const current = +counter.innerText;

        const increment = target / 80;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(update, 20);

        } else {

            counter.innerText = target;

        }

    }

    update();

});


// ---- 


// AUTO SLIDING TESTIMONIALS 


const testimonials = document.querySelectorAll(".testimonial");

let current = 0;

setInterval(() => {

    testimonials[current].style.display = "none";

    current++;

    if (current >= testimonials.length) {

        current = 0;

    }

    testimonials[current].style.display = "block";

}, 4000);



// ----- 


// MOUSE GLOW EFFECT 


const glow = document.createElement("div");

glow.className = "glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.pageX + "px";

    glow.style.top = e.pageY + "px";

});


// ----------- 






