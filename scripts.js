document.addEventListener('DOMContentLoaded', function () {
    const container = document.createElement('div');
    container.classList.add('cube-background');
    document.body.appendChild(container);

    // Function to create random cubes
    function createCube() {
        const cube = document.createElement('div');
        cube.classList.add('cube');
        
        // Set random initial positions and sizes
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;
        const zPos = Math.random() * 200 - 100;  // Random z-index to create depth
        const size = Math.random() * (80 - 30) + 30;  // Random cube size
        
        cube.style.left = `${xPos}px`;
        cube.style.top = `${yPos}px`;
        cube.style.width = `${size}px`;
        cube.style.height = `${size}px`;
        cube.style.transform = `translate3d(${xPos}px, ${yPos}px, ${zPos}px)`;

        container.appendChild(cube);
    }

    // Create a set number of cubes
    for (let i = 0; i < 50; i++) {
        createCube();
    }

    // Resize and reposition cubes on window resize
    window.addEventListener('resize', function() {
        const cubes = document.querySelectorAll('.cube');
        cubes.forEach(cube => {
            const xPos = Math.random() * window.innerWidth;
            const yPos = Math.random() * window.innerHeight;
            const zPos = Math.random() * 200 - 100;
            const size = Math.random() * (80 - 30) + 30;

            cube.style.left = `${xPos}px`;
            cube.style.top = `${yPos}px`;
            cube.style.width = `${size}px`;
            cube.style.height = `${size}px`;
            cube.style.transform = `translate3d(${xPos}px, ${yPos}px, ${zPos}px)`;
        });
    });
});
