// pick a random word to guess

const wordList = [
    'abruptly', 'absurd', 'abyss', 'affix', 'askew', 'avenue', 'awkward', 'axiom', 'azure', 'bagpipes', 'bandwagon', 'banjo', 'bayou', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boggle', 'bookworm', 'boxcar', 'boxful', 'buckaroo', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'buzzing', 'buzzwords', 'caliph', 'cobweb', 'cockiness', 'croquet', 'crypt', 'curacao', 'cycle', 'daiquiri', 'dirndl', 'disavow', 'dizzying', 'duplex', 'dwarves', 'embezzle', 'equip', 'espionage', 'euouae', 'exodus', 'faking', 'fishhook', 'fixable', 'fjord', 'flapjack', 'flopping', 'fluffiness', 'flyby', 'foxglove', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'gabby', 'galaxy', 'galvanize', 'gazebo', 'giaour', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'gnostic', 'gossip', 'grogginess', 'haiku', 'haphazard', 'hyphen', 'iatrogenic', 'icebox', 'injury', 'ivory', 'ivy', 'jackpot', 'jaundice', 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jigsaw', 'jinx', 'jiujitsu', 'jockey', 'jogging', 'joking', 'jovial', 'joyful', 'juicy', 'jukebox', 'jumbo', 'kayak', 'kazoo', 'keyhole', 'khaki', 'kilobyte', 'kiosk', 'kitsch', 'kiwifruit', 'klutz', 'knapsack', 'larynx', 'lengths', 'lucky', 'luxury', 'lymph', 'marquis', 'matrix', 'megahertz', 'microwave', 'mnemonic', 'mystify', 'naphtha', 'nightclub', 'nowadays', 'numbskull', 'nymph', 'onyx', 'ovary', 'oxidize', 'oxygen', 'pajama', 'peekaboo', 'phlegm', 'pixel', 'pizazz', 'pneumonia', 'polka', 'pshaw', 'psyche', 'puppy', 'puzzling', 'quartz', 'queue', 'quips', 'quixotic', 'quiz', 'quizzes', 'quorum', 'razzmatazz', 'rhubarb', 'rhythm', 'rickshaw', 'schnapps', 'scratch', 'shiv', 'snazzy', 'sphinx', 'spritz', 'squawk', 'staff', 'strength', 'strengths', 'stretch', 'stronghold', 'stymied', 'subway', 'swivel', 'syndrome', 'thriftless', 'thumbscrew', 'topaz', 'transcript', 'transgress', 'transplant', 'triphthong', 'twelfth', 'twelfths', 'unknown', 'unworthy', 'unzip', 'uptown', 'vaporize', 'vixen', 'vodka', 'voodoo', 'vortex', 'voyeurism', 'walkway', 'waltz', 'wave', 'wavy', 'waxy', 'wellspring', 'wheezy', 'whiskey', 'whizzing', 'whomever', 'wimpy', 'witchcraft', 'wizard', 'woozy', 'wristwatch', 'wyvern', 'xylophone', 'yachtsman', 'yippee', 'yoked', 'youthful', 'yummy', 'zephyr', 'zigzag', 'zigzagging', 'zilch', 'zipper', 'zodiac', 'zombie'
];

const puzzle = document.getElementById('answer');
const btns = document.querySelectorAll('.btn');
const img = document.getElementById('head-image');
const ending = document.getElementById('end-message');

const startBtn = document.querySelector('.btn-start');

let answerKey = ''
let puzzleDisplay = []

let count = 1

startBtn.addEventListener('click', function(){
    answerKey = wordList[getRandomNumber()];
    puzzleDisplay = []
    for (let i = 0; i < answerKey.length; i++){
        puzzleDisplay.push("_ ")
        puzzle.textContent = puzzleDisplay.join('')
        startBtn.textContent = "reset"
        btns.forEach(function (btn){
            btn.style.opacity = "1"
            btn.style.display = "inline";
        })
        ending.style.display = "none";
        count = 1
        img.src = "./Graphics/Hangman_Graphic-" + count + ".svg"
            
    // hide start button
    };
    console.log(answerKey);
});

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const letter = e.currentTarget.classList;
        e.currentTarget.style.opacity = "1";
        if (answerKey.includes(letter[1]) && e.currentTarget.style.opacity > 0 && count < 8){
            for (let i = answerKey.length; i > -1; i--){
                if (answerKey[i] == letter[1]){
                    puzzleDisplay[i] = String(letter[1]) + " "
                    puzzle.textContent = puzzleDisplay.join('')
                    e.currentTarget.style.opacity = "0";
                }
            }
        }
        else if (e.currentTarget.style.opacity > 0 && count < 8){
            count++;
            img.src = "./Graphics/Hangman_Graphic-" + count + ".svg";
            e.currentTarget.style.opacity = "0";
            console.log(count)  
        };
        if (count == 8){
            btns.forEach(function (btn){
                btn.style.display = "none";
            })
            ending.textContent = "Oh no! You lost. The word was " + answerKey
            ending.style.display = "inline";
        }
        if (!puzzleDisplay.includes("_ ")) {
            btns.forEach(function (btn){
                btn.style.display = "none";
            })
            if(count == 7) {
                ending.textContent = "Congratulations, you won! You had 1 try left." 
            }
            else {
                ending.textContent = "Congratulations, you won! You had " + (8 - count) + " tries left."
            }
            ending.style.display = "inline";
        }
    });
});

function getRandomNumber() {
    return Math.floor(Math.random() * wordList.length);
}

