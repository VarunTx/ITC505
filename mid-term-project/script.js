// Define the story structure with images for each stage
let story = {
    start: {
        text: "You are about to embark on a space mission to explore an unknown planet. The crew is ready, and the ship is fueled up. Do you wish to proceed?",
        choices: [
            { text: "Launch the mission", nextStage: "stage1a" },
            { text: "Abort the mission", nextStage: "ending1" }
        ],
        image: "https://img.craiyon.com/2024-11-12/ri7CMi2XTxGApiOgVBtHpw.webp"
    },
    stage1a: {
        text: "The mission is a go. You're now in space, heading towards the planet. As you approach, you notice strange signals. Do you investigate?",
        choices: [
            { text: "Investigate the signals", nextStage: "stage2a" },
            { text: "Ignore the signals", nextStage: "stage2b" }
        ],
        image: "https://img.craiyon.com/2024-11-12/2MgD7FnZRRuIDbxxWPshsA.webp"
    },
    stage2a: {
        text: "Upon investigating the signals, you discover a hidden alien base. Do you decide to enter?",
        choices: [
            { text: "Enter the base", nextStage: "stage3a" },
            { text: "Report back to headquarters", nextStage: "ending2" }
        ],
        image: "https://img.craiyon.com/2024-11-12/y_gbRYeMS_mHTVLQZRbIEw.webp"
    },
    stage2b: {
        text: "You decide to ignore the signals and continue towards the planet. As you land, something feels off. Do you explore the surface?",
        choices: [
            { text: "Explore the surface", nextStage: "stage3b" },
            { text: "Stay in the ship", nextStage: "ending3" }
        ],
        image: "https://img.craiyon.com/2024-11-12/MiTVRFh3SAiqGZkLHET0ww.webp"
    },
    stage3a: {
        text: "Inside the alien base, you find advanced technology. Suddenly, you're confronted by alien lifeforms. Do you try to communicate?",
        choices: [
            { text: "Attempt to communicate", nextStage: "ending4" },
            { text: "Fight them", nextStage: "ending5" }
        ],
        image: "https://img.craiyon.com/2024-11-12/O9A1XERLQb-BzMeR1cBtUQ.webp"
    },
    stage3b: {
        text: "On the surface, you find strange markings. As you investigate further, you discover a massive underground structure. Do you enter?",
        choices: [
            { text: "Enter the underground structure", nextStage: "stage4b" },
            { text: "Investigate ancient ruins nearby", nextStage: "ending6" }
        ],
        image: "https://img.craiyon.com/2024-11-12/Pq2LP4amRheUArU3SwyBbw.webp"
    },
    stage4b: {
        text: "Inside the structure, you find a hidden portal that seems to lead somewhere unexpected. Do you step through the portal?",
        choices: [
            { text: "Step through the portal", nextStage: "ending8" },
            { text: "Leave the structure", nextStage: "ending7" }
        ],
        image: "https://img.craiyon.com/2024-11-12/PjGtPhRuQ6yVaTST8hq2lQ.webp"
    },
    ending1: {
        text: "Ending 1. The mission is aborted. You return to Earth in disappointment. You failed to reach the unknown planet.",
        image: "https://img.craiyon.com/2024-11-12/QjV9sArkSQS75Zkxt-s6Iw.webp"
    },
    ending2: {
        text: "Ending 2. You report the alien base, but the signals suddenly stop. The mystery remains unsolved.",
        image: "https://img.craiyon.com/2024-11-12/mhi2fp7dQKWWJA0iXqu-4Q.webp"
    },
    ending3: {
        text: "Ending 3. You stay in the ship. The mission is a failure as you never discover what lies on the planet's surface.",
        image: "https://img.craiyon.com/2024-11-12/-geEaeJpSYuBzHOMPa8wxA.webp"
    },
    ending4: {
        text: "Ending 4. You successfully communicate with the aliens, and they offer you advanced technology in exchange for peace. You have formed a new alliance!",
        image: "https://img.craiyon.com/2024-11-12/2zs_cSQ5TpSYgkuS93G-AA.webp"
    },
    ending5: {
        text: "Ending 5. The aliens attack, and you are forced to defend yourself. Sadly, the mission ends in a hostile encounter.",
        image: "https://img.craiyon.com/2024-11-12/ipr4KpbaRxi-fEQmKKzvkg.webp"
    },
    ending6: {
        text: "Ending 6. The ancient ruins reveal a powerful energy source that activates and forces you to evacuate the planet. You narrowly escape.",
        image: "https://img.craiyon.com/2024-11-12/k908TmBATtunIMcJZdGD6Q.webp"
    },
    ending7: {
        text: "Ending 7. You leave the planet, but the mystery of its surface will haunt you for the rest of your life. You live to explore another day.",
        image: "https://img.craiyon.com/2024-11-12/77iMYku2SN-MyPr17QVdIg.webp"
    },
    ending8: {
        text: "Ending 8. You discover a hidden portal that leads to an alternate dimension where humanity has already established a colony. The mission ends with a historic breakthrough.",
        image: "https://img.craiyon.com/2024-11-12/t8BUAHDqQfCJaSyin4hz8w.webp"
    }
};

// Initialize the game with the starting stage
let currentStage = 'start';

// Update the page based on the current stage
function updateGame() {
    const stage = story[currentStage];
    document.getElementById('story-text').textContent = stage.text;
    document.getElementById('choices').innerHTML = '';
    document.getElementById('ending-image').innerHTML = `<img src="${stage.image}" alt="Stage Image">`;

    if (stage.choices) {
        stage.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.onclick = () => {
                currentStage = choice.nextStage;
                updateGame();
            };
            document.getElementById('choices').appendChild(button);
        });
    } else {
        // This is an ending
        document.getElementById('restart-btn').style.display = 'block'; // Show the restart button
    }
}

// Restart the game
function restartGame() {
    currentStage = 'start'; // Reset the game to the starting stage
    document.getElementById('restart-btn').style.display = 'none'; // Hide the restart button
    updateGame();
}

// Start the game
updateGame();
