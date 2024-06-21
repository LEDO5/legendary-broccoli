document.getElementById('openButton').addEventListener('click', function() {
    const doorLeft = document.querySelector('.door-left');
    const doorRight = document.querySelector('.door-right');
    const container = document.querySelector('.container');
    const doorSound = document.getElementById('doorSound');
    
    doorLeft.style.transform = 'rotateY(-90deg)';
    doorRight.style.transform = 'rotateY(90deg)';
    container.classList.add('zoom-in');
    
    doorSound.play();

    setTimeout(function() {
        window.location.href = 'main.html';
    }, 2000); // Wait for the animation to complete (2 seconds)
});
