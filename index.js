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
        'imagesForCarousel/1.webp',
        'imagesForCarousel/2.webp',
        'imagesForCarousel/3.webp',
        'imagesForCarousel/4.webp',
        'imagesForCarousel/5.webp',
        'imagesForCarousel/7.webp',
        'imagesForCarousel/6.webp',
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


    const videoPaths = [
        'imagesForCarousel/v1.mp4', 
        'imagesForCarousel/v2.mp4', 
        'imagesForCarousel/v3.mp4', 
        'imagesForCarousel/v4.mp4'
    ];
    const videoGallery = document.getElementById('video-gallery');
    const videoModal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const modalVideoSource = document.getElementById('modal-video-source');
    const closeModal = document.getElementById('close-modal');

    console.log('Video side');

    // Function to populate video gallery
    videoPaths.forEach(path => {
        const videoThumbnail = document.createElement('div');
        videoThumbnail.className = 'overflow-hidden rounded-lg shadow-lg';
        videoThumbnail.classList.add('relative', 'cursor-pointer', 'aspect-w-16', 'aspect-h-9', 'bg-gray-200');
        videoThumbnail.innerHTML = `
            <video class="absolute inset-0 w-full h-full object-cover rounded-lg">
                <source src="${path}#t=0.1" type="video/mp4">
            </video>
        `;
        videoThumbnail.addEventListener('click', () => {
            modalVideoSource.src = path;
            modalVideo.load();
            videoModal.classList.remove('hidden');
        });
        videoThumbnail.style = 'height: 33vw;';
        console.log(videoThumbnail);
        
        console.log('Video appending');
        videoGallery.appendChild(videoThumbnail);
    });

    // Function to close modal
    closeModal.addEventListener('click', () => {
        modalVideo.pause();
        videoModal.classList.add('hidden');
    });

    // Close the modal when clicking outside the video
    window.addEventListener('click', (event) => {
        if (event.target === videoModal) {
            modalVideo.pause();
            videoModal.classList.add('hidden');
        }
    });


    setTimeout(() => {
        document.getElementById('mainPage').scrollIntoView();
        console.log('print');
    }, 1000);
});


