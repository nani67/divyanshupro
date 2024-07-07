var classesToOpenAnimationNavItems = ['transition', 'ease-in', 'duration-150', 'opacity-0', 'translate-y-1'];
var classesToCloseAnimationNavItems = ['transition', 'opacity-100', 'translate-y-0', 'duration-200', 'ease-out'];

console.log('We are live');

var closeOpenNav = function (referenceId) {
    var navElement = document.getElementById(referenceId);
    console.log(navElement);
    console.log(referenceId);
    if(navElement.classList.contains(classesToCloseAnimationNavItems[1])) {
        // Pane already opened. Need to close.
        for(var x of classesToCloseAnimationNavItems) {
            // Need to remove these.
            navElement.classList.remove(x);
        }
        for(var y of classesToOpenAnimationNavItems) {
            // Need to add these
            navElement.classList.add(y);
        }
    } else {
        // Pane closed. Need to open now.
        for(var y of classesToOpenAnimationNavItems) {
            // Need to add these
            navElement.classList.remove(y);
        }
        for(var x of classesToCloseAnimationNavItems) {
            // Need to remove these.
            navElement.classList.add(x);
        }
    }
}


var dismissOtherNavElements = function (referenceId) {
    var navElement = document.getElementById(referenceId);
    console.log(navElement);
    console.log(referenceId);
    if(navElement.classList.contains(classesToCloseAnimationNavItems[1])) {
        // Pane already opened. Need to close.
        for(var x of classesToCloseAnimationNavItems) {
            // Need to remove these.
            navElement.classList.remove(x);
        }
        for(var y of classesToOpenAnimationNavItems) {
            // Need to add these
            navElement.classList.add(y);
        }
    }
}

document.getElementById('servicesButtonNav').addEventListener('click', () => {
    console.log('Clicked Services');
    closeOpenNav('servicesNavItems');
    dismissOtherNavElements('galleryNavItems');
});
document.getElementById('galleryButtonNav').addEventListener('click', () => {
    console.log('Clicked Gallery');
    closeOpenNav('galleryNavItems');
    dismissOtherNavElements('servicesNavItems');
});

document.querySelectorAll('.buttonForContact').forEach(e => {
    e.addEventListener('click', () => {
        document.getElementById('contactus').scrollIntoView({ behavior: 'smooth' });
    })
})

document.querySelectorAll('.buttonForFunctionItems').forEach(e => {
    e.addEventListener('click', () => {
        document.getElementById('functionItems').scrollIntoView({behavior: 'smooth'});
    })
})



document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'imagesForCarousel/1.jpeg',
        'imagesForCarousel/2.jpeg',
        'imagesForCarousel/3.jpeg',
        'imagesForCarousel/4.jpeg',
        'imagesForCarousel/5.jpeg',
        'imagesForCarousel/7.jpeg',
        'imagesForCarousel/6.jpeg',
    ];

    const gallery = document.getElementById('loadImages');
    images.forEach(src => {
        const imgDiv = document.createElement('div');
        imgDiv.className = 'overflow-hidden rounded-lg shadow-lg';
        const img = document.createElement('img');
        img.src = src;
        img.style = 'object-fit: cover';
        img.width = '100%';
        img.height = '100%';
        img.alt = 'Gallery Image';
        img.className = 'w-full h-full';

        imgDiv.appendChild(img);
        gallery.appendChild(imgDiv);
    });

    setTimeout(() => {
        document.getElementById('mainPage').scrollIntoView();
        console.log('print');
    }, 1000);
});


