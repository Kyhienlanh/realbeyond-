document.getElementById('cta-button').addEventListener('click', function() {
    alert('Thank you for joining the #RealBeauty Challenge! Share your photos and stories on social media.');
});
document.querySelectorAll('.about-us .objective img').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.5)';
        this.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
window.addEventListener('scroll', function() {
    var objectives = document.querySelectorAll('.objective');
    var screenHeight = window.innerHeight;
    var offset = 100; // Offset cho vùng nhìn thấy

    objectives.forEach(function(objective) {
        var position = objective.getBoundingClientRect().top;

        if (position < screenHeight - offset) {
            objective.classList.add('animated');
        }
    });
});
window.addEventListener('scroll', function() {
    var statistics = document.querySelector('.statistics');
    var position = statistics.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
    var offset = 100; // Offset cho vùng nhìn thấy

    if (position < screenHeight - offset) {
        statistics.classList.add('animated');
    }
});
window.addEventListener('scroll', function() {
    var targetAudience = document.querySelector('.target-audience');
    var position = targetAudience.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
    var offset = 100; // Offset cho vùng nhìn thấy

    if (position < screenHeight - offset) {
        targetAudience.classList.add('animated');
    }
});
window.addEventListener('scroll', function() {
    var outcomes = document.querySelector('.outcomes');
    var position = outcomes.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
    var offset = 100; // Offset cho vùng nhìn thấy

    if (position < screenHeight - offset) {
        outcomes.classList.add('animated');
    }
});
window.addEventListener('scroll', function() {
    var getInvolved = document.querySelector('.get-involved');
    var position = getInvolved.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
    var offset = 100; // Offset cho vùng nhìn thấy

    if (position < screenHeight - offset) {
        getInvolved.classList.add('animated');
    }
});
window.addEventListener('scroll', function() {
    var resources = document.querySelector('.resources');
    var position = resources.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
    var offset = 100; // Offset cho vùng nhìn thấy

    if (position < screenHeight - offset) {
        var resourceItems = document.querySelectorAll('.resource-item-content');
        resourceItems.forEach(function(item) {
            item.classList.add('animated');
        });
    }
});
