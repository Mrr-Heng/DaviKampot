
// We use "var" or wrap in a block to avoid "already declared" errors 
// if the script is loaded twice by mistake.
let kampotSlides = [
    {
        title: "ជិះទូកកាយ៉ាក់ក្នុងព្រៃកោងកាង",
        desc: "ធ្វើដំណើរតាមដងទឹកពណ៌មរកត ដែលមានដើមកោងកាងបុរាណដុះជារូងផ្លូវដ៏ស្រស់ស្អាត។",
        img: "../public/assets/images/Activities/Activities_1.jpg"
    },
    {
        title: "វាលស្រែអំបិលនាពេលអរុណរះ",
        desc: "ទស្សនាសម្រស់ធរណីមាត្រនៃកេរដំណែលវប្បធម៌ និងជីវភាពពិតៗរបស់កសិករក្នុងក្រុងកំពត។",
        img: "../public/assets/images/Activities/salt.jpg"
    },
    {
        title: "ដំណើរកម្សាន្តចម្ការម្រេច",
        desc: "ស្វែងយល់ពីមូលហេតុដែលធ្វើឱ្យម្រេចកំពត ក្លាយជាគ្រឿងទេសដ៏ល្បីល្បាញបំផុតលើពិភពលោក។",
        img: "../public/assets/images/Activities/Pepper_Farm.jpg"
    },
    {
        title: "ដំណើរកម្សាន្តភ្នំបូកគោ",
        desc: "ស្វែងយល់ពីភាពអស្ចារ្យនៃឧទ្យានជាតិព្រះមុនីវង្សបូកគោ ដែលសម្បូរទៅដោយសំណង់ប្រវត្តិសាស្ត្រ អាកាសធាតុត្រជាក់ និងទិដ្ឋភាពសមុទ្រដ៏ធំល្វឹងល្វើយ។",
        img: "../public/assets/images/Activities//Bokor-Mountain.jpg"
    },
    {
        title: "សម្រស់ទឹកធ្លាក់ទឹកឈូ",
        desc: "សម្រាកលំហែកាយជាមួយសំឡេងទឹកហូរស្រកាក់តាមចន្លោះថ្មដា និងងូតទឹកជ្រោះដ៏ត្រជាក់ស្រេបដែលហូរចុះមកពីភ្នំដំរី។",
        img: "../public/assets/images/Activities/Kampot-tuek-chhu.jpg"
    },
    {
        title: "ការកម្សាន្តនៅដូងទេ",
        desc: "សាកល្បងភាពក្លាហានជាមួយការលោតទឹកពីលើប៉មខ្ពស់ ជិះខ្សែរ៉តឆ្លងទន្លេ និងរីករាយជាមួយសកម្មភាពកីឡាលើទឹកដ៏សម្បូរបែបក្នុងបរិយាកាសដ៏ស្រស់ស្រាយ។",
        img: "../public/assets/images/Activities/Dong_Te.jpg"
    }
];

function initKampotGallery() {
    const mainImg = document.getElementById('main-view');
    const titleText = document.getElementById('view-title');
    const descText = document.getElementById('view-desc');
    const thumbs = document.querySelectorAll('.thumb-item');

    // CRITICAL: If the HTML isn't loaded yet, stop the script and try again in 100ms
    if (!mainImg || thumbs.length === 0) {
        setTimeout(initKampotGallery, 100);
        return;
    }

    let currentIndex = 0;
    let autoPlayTimer;

    function updateDisplay(index) {
        const data = kampotSlides[index];
        
        // Add a safety check inside the update function
        if (!mainImg) return;

        mainImg.style.opacity = '0';

        setTimeout(() => {
            mainImg.src = data.img;
            if (titleText) titleText.textContent = data.title;
            if (descText) descText.textContent = data.desc;

            thumbs.forEach((t, i) => {
                if (i === index) {
                    t.classList.add('opacity-100', 'ring-4', 'ring-red-500');
                    t.classList.remove('opacity-50');
                } else {
                    t.classList.remove('opacity-100', 'ring-4', 'ring-red-500');
                    t.classList.add('opacity-50');
                }
            });

            mainImg.style.opacity = '1';
        }, 500);

        currentIndex = index;
    }

    function startAutoPlay() {
        // Clear any existing timers first to prevent "speeding up"
        clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(() => {
            let nextIndex = (currentIndex + 1) % kampotSlides.length;
            updateDisplay(nextIndex);
        }, 5000);
    }

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            updateDisplay(index);
            startAutoPlay(); // Reset timer on click
        });
    });

    startAutoPlay();
}

// Start the check
initKampotGallery();

// // Collape Menu
// document.addEventListener('DOMContentLoaded', () => {
//     const mainImg = document.getElementById('main-view');
    
//     // SAFETY CHECK: If this page doesn't have the gallery, stop the script
//     if (!mainImg) return; 

//     const titleText = document.getElementById('view-title');
//     const descText = document.getElementById('view-desc');
//     const thumbs = document.querySelectorAll('.thumb-item');
    
//     // ... rest of your code ...
// });

/**
 * Mobile Menu Toggle - Fixed for Dynamic Containers
 */
document.addEventListener('click', function (event) {
    // 1. Change 'mobile-menu-button' to the ID or Class of your burger icon
    const menuBtn = event.target.closest('#mobile-menu-button');
    // 2. Change 'mobile-menu' to the ID of your actual hidden menu div
    const menu = document.getElementById('mobile-menu');

    if (menuBtn && menu) {
        // Toggle the 'hidden' class (Tailwind standard)
        menu.classList.toggle('hidden');
        
        // Optional: Toggle an 'active' class for animations
        menu.classList.toggle('flex'); 
        console.log('Menu toggled');
    }
});