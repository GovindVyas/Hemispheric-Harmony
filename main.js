const winter = document.querySelector('.northern-winter');

function createSnowflakes(count) {
    for (let i = 0; i < count; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.top = `${-Math.random() * 50}vh`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        
        winter.appendChild(snowflake);
    }
}

createSnowflakes(30);