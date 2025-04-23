// TODO: Figure out why this works. I've stared at it for 3 hours and I'm scared to touch it
let contestants = [];
let chosenContestants = [];
let scene;

// These booleans haunt my dreams
let top2 = false;
let top3 = false;
let top4 = false;
let episodeNumber = 1;
let maxiAdvantageQueen = null;

// Sverige immunity because apparently that's a thing
let sverigeImmunity = false;
let premiereType = 'regular';

// I promise I'll clean this up later (no I won't)
let immunityQueen = null;
let immunityEpisode = null;

// The most chaotic data structure you've ever seen but hey it tracks stuff
let trackRecord = new Map();
let episodeChallenges = [];

// TODO: Refactor this whole thing but I'm too scared to touch it
function initializeTrackRecord() {
    trackRecord.clear();
    episodeChallenges = [];
    chosenContestants.forEach(queen => {
        trackRecord.set(queen.name, []);
    });
}

// This function is held together by duct tape and prayers
function updateTrackRecord(queen, placement) {
    if (!trackRecord.has(queen.name)) {
        trackRecord.set(queen.name, []);
    }
    let placements = trackRecord.get(queen.name);
    placements.push(placement);
    trackRecord.set(queen.name, placements);
}

// Holy color scheme Batman!
function getPlacementColor(placement) {
    switch(placement) {
        case 'WIN': return 'royalblue'; // Winner winner chicken dinner
        case 'WINNER' : return 'yellow'; // Crown that bitch
        case 'DOUBLEWIN': return 'darkblue'; // Because one winner wasn't dramatic enough
        case 'RUNNER UP': return 'silver'; // First loser
        case 'TOP2': return 'yellow'; // Almost but not quite
        case 'ELIMINATED' : return 'sienna'; // Sashay away hunty
        case 'HIGH': return 'lightblue'; // You did good but not good enough
        case 'SAFE': return 'white'; // Vanilla ass performance
        case 'LOW': return 'lightpink'; // Girl you better step it up
        case 'BTM2': return 'tomato'; // Time to lip sync for your life
        case 'DOUBLEWIN-BTM': return 'hotpink'; // What even is this placement
        case 'ELIM': return 'red'; // Bye Felicia
        default: return '#FFFFFF'; // If you see this, I messed up somewhere
    }
}

// TODO: Make this function less terrifying
// If you're reading this, I'm sorry
// This displays the track record and I'm not touching it because it works
function displayTrackRecord() {
    scene.createHorizontalLine();
    scene.createHeader("Track Record");
    
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.marginTop = '20px';
    table.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    table.style.borderRadius = '10px';
    
    const headerRow = table.insertRow();
    const nameHeader = headerRow.insertCell();
    nameHeader.textContent = 'Queen';
    nameHeader.style.padding = '10px';
    nameHeader.style.fontWeight = 'bold';
    nameHeader.style.borderBottom = '2px solid rgba(255, 255, 255, 0.2)';
    
    for (let i = 1; i <= episodeNumber; i++) {
        const epHeader = headerRow.insertCell();
        epHeader.textContent = `EP${i}`;
        epHeader.style.padding = '10px';
        epHeader.style.fontWeight = 'bold';
        epHeader.style.borderBottom = '2px solid rgba(255, 255, 255, 0.2)';
        epHeader.style.textAlign = 'center';
    }
    
    const sortedQueens = Array.from(trackRecord.entries()).sort((a, b) => {
        const aElimIndex = a[1].indexOf('ELIM');
        const bElimIndex = b[1].indexOf('ELIM');
        
        if ((aElimIndex === -1) !== (bElimIndex === -1)) {
            return aElimIndex === -1 ? -1 : 1;
        }
        
        // If both queens are eliminated
        if (aElimIndex !== -1 && bElimIndex !== -1) {
            return bElimIndex - aElimIndex; // Later elimination = higher placement
        }
        
        // If neither queen is eliminated, sort by their latest performance
        const aLastIndex = a[1].length - 1;
        const bLastIndex = b[1].length - 1;
        
        if (aLastIndex !== bLastIndex) {
            return bLastIndex - aLastIndex; // More recent performance = higher placement
        }
        
        // Sort by performance ranking
        const performanceRank = {
            'WIN': 1,
            'TOP2': 2,
            'HIGH': 3,
            'SAFE': 4,
            'LOW': 5,
            'BTM2': 6,
            'ELIM': 7
        };
        
        const aLastPerf = a[1][aLastIndex];
        const bLastPerf = b[1][bLastIndex];
        
        return (performanceRank[aLastPerf] || 4) - (performanceRank[bLastPerf] || 4);
    });

    sortedQueens.forEach(([queenName, placements]) => {
        const row = table.insertRow();
        const nameCell = row.insertCell();
        nameCell.textContent = queenName;
        nameCell.style.padding = '10px';
        nameCell.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        
        placements.forEach((placement, index) => {
            const cell = row.insertCell();
            const episodeNum = index + 1;
            
            cell.textContent = placement;
            
            const winsInEpisode = Array.from(trackRecord.values()).filter(record => record[index] === 'WIN').length;
            const btmsInEpisode = Array.from(trackRecord.values()).filter(record => record[index] === 'BTM2').length;
            const hasElimInEpisode = Array.from(trackRecord.values()).some(record => record[index] === 'ELIM');
            
            if (placement === 'WIN' && winsInEpisode > 1) {
                cell.style.backgroundColor = getPlacementColor('DOUBLEWIN');
            } else if (placement === 'BTM2' && btmsInEpisode > 1 && !hasElimInEpisode) {
                cell.style.backgroundColor = getPlacementColor('DOUBLEWIN-BTM');
            } else {
                cell.style.backgroundColor = getPlacementColor(placement);
            }

            if (episodeNum === 1 && immunityQueen && queenName === immunityQueen.name) {
                cell.style.border = '3px solid fuchsia';
            }
            
            cell.style.padding = '10px';
            cell.style.textAlign = 'center';
            cell.style.color = ['WIN','DOUBLEWIN', 'ELIMINATED'].includes(placement) ? '#FFF' : '#000';
            cell.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
            cell.style.fontWeight = ['WIN', 'DOUBLEWIN', 'ELIM', 'WINNER', 'RUNNER UP', 'ELIMINATED'].includes(placement) ? 'bold' : 'normal';
        });
    });
    
    scene._MainBlock.appendChild(table);
}

// The challenges that will make or break these queens
// TODO: Add more stupid challenges because why not
const possibleMaxis = [
  "ACTING", // Pretend you can act
  "RUNWAY", // Walk back and forth in expensive clothes
  "DESIGN", // Hot glue some shit together
  "BALL", // Design but make it THREE TIMES
  "RUSICAL", // Singing but make it chaotic
  "SNATCH GAME", // Career maker or breaker hunty
  "IMPROV", // Mess around and hope it's funny
  "STANDUP", // Tell jokes or die trying
  "BRANDING", // Sell something nobody needs
  "GIRL GROUPS" // Pretend you're in the Spice Girls
];

// The rest of this file is a beautiful disaster
function updateFinaleFormatBools() {
    const finaleFormat = document.getElementById('finale-format')?.value;
    top2 = finaleFormat === 'top2';
    top3 = finaleFormat === 'top3';
    top4 = finaleFormat === 'top4';
}

function updateTwistBools() {
    sverigeImmunity = !!document.getElementById('twist-sverige')?.checked;
    premiereType = document.getElementById('premiere-format')?.value || 'regular';
}

// Add event listeners for twist checkboxes
function setupTwistListeners() {
    const sverigeCheckbox = document.getElementById('twist-sverige');
    if (sverigeCheckbox) sverigeCheckbox.addEventListener('change', updateTwistBools);
    updateTwistBools();
}

document.addEventListener('DOMContentLoaded', async function() {
    document.getElementById('MainTitle').textContent = "Marcia's Drag Race Simulator";
    try {
        const response = await fetch('./data/queens.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (!data?.queens || !Array.isArray(data.queens)) throw new Error('Invalid data format');
        contestants = data.queens;
        setupSearch();
        displayChosenContestants();
        scene = new Scene(document.getElementById('MainBlock'));
    } catch (error) {
        document.querySelector('.RightBlock p').textContent = 'Error loading contestants. Please try again.';
    }
    document.getElementById('finale-format').addEventListener('change', updateFinaleFormatBools);
    updateFinaleFormatBools();
    setupTwistListeners();
    
    // Ensure modal elements exist
    if (!document.querySelector('.contestant-modal')) {
        const modalHTML = `
            <div class="contestant-modal">
                <div class="modal-content">
                    <button class="close-modal">×</button>
                    <div class="modal-header">
                        <img src="" alt="Queen's Photo" id="modal-queen-image">
                        <div class="modal-header-info">
                            <h2 id="modal-queen-name"></h2>
                        </div>
                    </div>
                    <div class="modal-body">
                        <!-- Content will be dynamically populated -->
                    </div>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    // Add modal event listeners
    const modal = document.querySelector('.contestant-modal');
    const closeBtn = modal.querySelector('.close-modal');
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    const predefinedCastSelect = document.getElementById('predefined-cast');
    if (predefinedCastSelect) {
        predefinedCastSelect.addEventListener('change', (e) => {
            const selectedCast = e.target.value;
            if (selectedCast) {
                loadPredefinedCast(selectedCast);
            }
        });
    }
});

function setupSearch() {
    const searchInput = document.getElementById('search');
    let searchResults = document.querySelector('.search-results');
    if (!searchResults) {
        searchResults = document.createElement('div');
        searchResults.className = 'search-results';
        searchInput.parentNode.appendChild(searchResults);
    }
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (!searchTerm) {
            searchResults.style.display = 'none';
            return;
        }
        const filtered = contestants.filter(queen => queen.name.toLowerCase().includes(searchTerm));
        displaySearchResults(filtered, searchResults, searchInput);
    });
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

function displaySearchResults(results, container, searchInput) {
    container.innerHTML = '';
    if (results.length === 0) {
        container.style.display = 'none';
        return;
    }
    container.style.display = 'block';
    const fragment = document.createDocumentFragment();
    results.forEach(queen => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `
            <img src="${queen.image}" alt="${queen.name}" width="50" height="50">
            <span>${queen.name}</span>
        `;
        div.addEventListener('click', () => {
            if (chosenContestants.length < 18 && !chosenContestants.some(c => c.name === queen.name)) {
                chosenContestants.push(queen);
                displayChosenContestants();
                searchInput.value = '';
                container.style.display = 'none';
            }
            else
            {
                showCornerPopup('You can only select a maximum of 18 queens.');
            }
        });
        fragment.appendChild(div);
    });
    container.appendChild(fragment);
}

function addRandomContestant() {
    if (!chosenContestants.length >= 18) 
    {
        showCornerPopup('You can only select a maximum of 18 queens.');
        return;
    }
    const available = contestants.filter(c => !chosenContestants.some(chosen => chosen.name === c.name));
    if (available.length === 0) return;
    const random = available[Math.floor(Math.random() * available.length)];
    chosenContestants.push(random);
    displayChosenContestants();
}

function displayChosenContestants() {
    const container = document.getElementById('chosenQueens');
    const noQueensMessage = document.querySelector('.no-queens-message');
    const selectActions = document.querySelector('.select-actions');
    container.innerHTML = '';
    
    if (chosenContestants.length === 0) {
        if (noQueensMessage) noQueensMessage.style.display = 'block';
        if (selectActions) selectActions.classList.remove('show');
        return;
    } else {
        if (noQueensMessage) noQueensMessage.style.display = 'none';
        if (selectActions) selectActions.classList.add('show');
    }

    const fragment = document.createDocumentFragment();
    chosenContestants.forEach((contestant, index) => {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';
        const div = document.createElement('div');
        div.className = 'contestant-card';
        
        // Add selection checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'queen-select';
        checkbox.setAttribute('data-queen-index', index);
        checkbox.id = `queen-select-${index}`;
        
        const checkboxLabel = document.createElement('label');
        checkboxLabel.setAttribute('for', `queen-select-${index}`);
        
        div.innerHTML = `
            <img src="${contestant.image}" alt="${contestant.name}"
                onerror="this.src='placeholder.webp'"
                style="width: 110px; height: 110px; object-fit: cover;">
            <p>${contestant.name}</p>
            <button class="cog-menu-btn" title="Options"><i class="fas fa-ellipsis-v"></i></button>
            <div class="cog-popover">
                <button class="view-info"><i class="fas fa-info-circle"></i> View Info</button>
                <button class="remove-queen"><i class="fas fa-trash"></i> Remove</button>
            </div>
        `;
        
        div.insertBefore(checkboxLabel, div.firstChild);
        div.insertBefore(checkbox, div.firstChild);

        const cogBtn = div.querySelector('.cog-menu-btn');
        const popover = div.querySelector('.cog-popover');
        cogBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.cog-popover').forEach(pop => {
                if (pop !== popover) pop.classList.remove('show');
            });
            popover.classList.toggle('show');
        });

        // View info button handler
        div.querySelector('.view-info').addEventListener('click', () => {
            showContestantInfo(contestant);
            popover.classList.remove('show');
        });

        // Remove queen button handler
        div.querySelector('.remove-queen').addEventListener('click', () => {
            chosenContestants.splice(index, 1);
            displayChosenContestants();
        });
        
        wrapper.appendChild(div);
        fragment.appendChild(wrapper);
    });
    container.appendChild(fragment);

    // Add event listeners for selection actions
    const selectAllBtn = document.querySelector('.select-all-btn');
    const deselectAllBtn = document.querySelector('.deselect-all-btn');
    const deleteSelectedBtn = document.querySelector('.delete-selected-btn');
    
    if (selectAllBtn) {
        selectAllBtn.addEventListener('click', () => {
            document.querySelectorAll('.queen-select').forEach(checkbox => {
                checkbox.checked = true;
            });
        });
    }
    
    if (deselectAllBtn) {
        deselectAllBtn.addEventListener('click', () => {
            document.querySelectorAll('.queen-select').forEach(checkbox => {
                checkbox.checked = false;
            });
        });
    }
    
    if (deleteSelectedBtn) {
        deleteSelectedBtn.addEventListener('click', () => {
            const selectedIndices = Array.from(document.querySelectorAll('.queen-select:checked'))
                .map(checkbox => parseInt(checkbox.getAttribute('data-queen-index')))
                .sort((a, b) => b - a); // Sort in descending order to remove from end first
            
            if (selectedIndices.length === 0) {
                showCornerPopup('No queens selected!', 'info');
                return;
            }
            
            if (confirm(`Are you sure you want to remove ${selectedIndices.length} queen${selectedIndices.length > 1 ? 's' : ''} from your cast?`)) {
                showCornerPopup(`Removed ${selectedIndices.length} queen${selectedIndices.length > 1 ? 's' : ''} from your cast.`, 'info');
                selectedIndices.forEach(index => {
                    chosenContestants.splice(index, 1);
                });
                displayChosenContestants();
            }
        });
    }

    if (!displayChosenContestants.popoverListenerAdded) {
        document.addEventListener('click', function(e) {
            document.querySelectorAll('.cog-popover').forEach(pop => {
                if (!pop.parentNode.contains(e.target)) pop.classList.remove('show');
            });
        });
        displayChosenContestants.popoverListenerAdded = true;
    }
}

function handleImageError(img) {
    img.onerror = null;
    img.src = 'https://placehold.co/50x50.png';
}

function getOrdinalSuffix(n) {
    const s = ["th", "st", "nd", "rd"],
        v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
}

function getOrdinalSuffixWithNumber(n) {
    const s = ["th", "st", "nd", "rd"], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function showSimulationError(msg) {
    showCornerPopup(msg, 'error');
}

function showCornerPopup(message, type = 'info') {
    let popup = document.getElementById('corner-popup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'corner-popup';
        document.body.appendChild(popup);
    }

    popup.style.animation = 'none';
    popup.offsetHeight;
    
    popup.className = `corner-popup ${type}`;
    popup.innerHTML = `
        <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    popup.style.animation = 'slideIn 0.5s forwards, slideOut 0.5s forwards 2.5s';
}

// Returns a random integer between min and max (inclusive)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// --- Flexible Screen class for dynamic UI building ---
// TODO: Make this class less of a mess
class Scene {
    constructor(div = undefined) {
        if (div == undefined) {
            this._MainBlock = document.getElementById("MainBlock");
        } else {
            this._MainBlock = div;
        }
    }
    clean() {
        this._MainBlock.innerHTML = '';
        let scrollup = document.querySelector('.toTop');
        if (scrollup) {
            window.addEventListener('scroll', e => {
                if (window.scrollY > 100) {
                    scrollup.classList.add('active');
                } else {
                    scrollup.classList.remove('active');
                }
            });
        }
    }
    createHeader(text) {
        let title = document.getElementById("MainTitle");
        title.innerHTML = text;
    }
    createBigText(text) {
        let big = document.createElement("big");
        let p = document.createElement("p");
        big.innerHTML = text;
        p.appendChild(big);
        this._MainBlock.appendChild(p);
    }
    createParagraph(text, id = '') {
        let p = document.createElement("p");
        p.innerHTML = text;
        p.setAttribute("id", id);
        this._MainBlock.appendChild(p);
    }
    createBold(text, id = '', id1 = '') {
        let p = document.createElement("p");
        let bold = document.createElement("b");
        bold.innerHTML = text;
        bold.setAttribute("id", id);
        p.setAttribute("id", id1);
        p.appendChild(bold);
        this._MainBlock.appendChild(p);
    }
    createButton(text, method, id = '') {
        let button = document.createElement("button");
        button.innerHTML = text;
        button.setAttribute("onclick", method);
        button.setAttribute("id", id);
        this._MainBlock.appendChild(button);
        if (text == "Proceed" || text == "Show result" || text == "Choose Assassin") {
            let textField = document.getElementById("inputRightKey");
            if (textField) {
                textField.focus();
                textField.addEventListener("keydown", (e) => {
                    let key = e.key;
                    if (key === "ArrowRight" && document.querySelector("button[onclick='" + method + "']") == button) {
                        e.target.remove();
                        button.click();
                        this.goToTop();
                    }
                }, {once: true});
                document.addEventListener("click", e => {
                    if (e.target.matches('div#MainBlock') == false && e.target.matches('select') == false) {
                        textField.focus();
                    }
                });
            }
        }
    }
    createHorizontalLine() {
        let hr = document.createElement("hr");
        this._MainBlock.appendChild(hr);
    }
    createImage(source, color = "black") {
        let image = document.createElement("img");
        image.src = source;
        image.setAttribute("style", `border-color: ${color}; width: 105px; height: 105px;`);
        this._MainBlock.appendChild(image);
    }
    goToTop() {
        this._MainBlock.scrollIntoView({ 
            behavior: 'smooth'
          });
    }
}
// --- End Screen class ---

document.getElementById('start-simulation').addEventListener('click', function() {
    updateFinaleFormatBools(); // Ensure bools are up to date
    updateTwistBools(); // Ensure twist bools are up to date
    const finaleFormat = document.getElementById('finale-format')?.value;
    let finaleSize = 2;
    if (finaleFormat === 'top3') finaleSize = 3;
    if (finaleFormat === 'top4') finaleSize = 4;
    
    if (chosenContestants.length <= finaleSize) {
        showCornerPopup(`You must select more queens than the finale (${finaleSize}) to start the simulation.`, 'error');
        return;
    }
    showSimulationCast();
});

function showSimulationCast() {
    const mainBlock = document.getElementById('MainBlock');
    if (!mainBlock) {
        showCornerPopup('MainBlock not found in the document.', 'error');
        return;
    }
    scene = new Scene(mainBlock);
    scene.clean();
    scene.createHeader('Current Cast');
    chosenContestants.forEach(contestant => {
        scene.createImage(contestant.image, 'black');
        scene.createParagraph(contestant.name);
    });
    
    // Initialize track record for the season
    initializeTrackRecord();
    
    scene.createButton('Proceed', 'startEpisode()');
    contestants = chosenContestants.slice();
}

function startEpisode() {
    const castCount = chosenContestants.length;
    if ((top2 && castCount == 2) ||
        (top3 && castCount == 3) ||
        (top4 && castCount == 4)) {
        finale();
    } else {
        // Reset immunity after episode 1
        if (episodeNumber > 1) {
            immunityQueen = null;
        }

        // Handle premiere episode
        if (episodeNumber === 1) {
            switch (premiereType) {
                case 'regularShantay':
                    // Will handle double shantay in elimination
                    miniChallenge();
                    break;
                case 'regularSlayers':
                    // Will handle top 2 lipsync in results
                    miniChallenge();
                    break;
                default:
                    // Regular premiere
                    miniChallenge();
            }
        } else {
            miniChallenge();
        }
    }
}

function miniChallenge() {
    scene.clean();
    scene.createHeader("Mini Challenge");

    // Only handle immunity on episode 1 if Sverige twist is active
    const isEpisodeOneImmunity = episodeNumber === 1 && sverigeImmunity;
    
    // Regular mini challenge advantage chance (50%)
// TODO: Add more ridiculous advantages
    const shouldGrantAdvantage = !isEpisodeOneImmunity && randomInt(0, 1) === 1;

    scene.createParagraph("The queens will compete in a mini challenge" + 
        (shouldGrantAdvantage ? " to win a special advantage in the main challenge." : "."));

    // Select random winner
    const randomQueen = randomInt(0, chosenContestants.length - 1);
    const winner = chosenContestants[randomQueen];
    scene.createImage(winner.image, 'royalblue');

    if (isEpisodeOneImmunity) {
        immunityQueen = winner;
        scene.createParagraph(`${winner.name} has won the mini challenge and earned immunity for this episode!`);
    } else {
        immunityQueen = null;
        if (shouldGrantAdvantage) {
            maxiAdvantageQueen = winner;
            scene.createParagraph(`${winner.name} has won a special advantage for the maxi challenge!`);
        } else {
            maxiAdvantageQueen = null;
            scene.createParagraph(`${winner.name} won the mini-challenge!`);
        }
    }

    scene.createButton("Proceed", "mainChallenge()");
}

function getMaxiChallengeDescription(type) {
    switch(type) {
        case "ACTING":
            return "An acting challenge where the queens must perform in a parody skit based on a popular TV show.";
        case "RUNWAY":
            return "A runway challenge with the theme: 'Futuristic Eleganza'.";
        case "DESIGN":
            const materials = ["trash bags", "paper", "flowers", "candy wrappers", "denim", "holiday decorations"];
            return `A design challenge using ${materials[randomInt(0, materials.length-1)]}.`;
        case "BALL":
            const categories = [
                ["Executive Realness", "Evening Wear", "Luscious Lady"],
                ["Superhero", "Villain", "Sidekick"],
                ["Resort Wear", "Swimsuit", "Evening Gown"]
            ];
            const chosen = categories[randomInt(0, categories.length-1)];
            return `A Ball! The categories are: ${chosen.join(', ')}.`;
        case "RUSICAL":
            const topics = ["Broadway divas", "pop icons", "drag herstory", "reality TV scandals", "fairy tales"];
            return `A Rusical based on ${topics[randomInt(0, topics.length-1)]}.`;
        case "SNATCH GAME":
            return "It's time for Snatch Game! The queens must impersonate celebrities in a hilarious game show.";
        case "IMPROV":
            return "An improv challenge where the queens must act out unscripted scenes with wild prompts.";
        case "STANDUP":
            return "A standup comedy challenge. The queens must write and perform their own comedy routines.";
        case "BRANDING":
            return "A branding challenge where the queens must create and market their own product.";
        case "GIRL GROUPS":
            const groups = ["Pop Divas", "Girl Power", "Bad Girls", "Queens of Rock", "Dance Queens"];
            return `A girl groups challenge! The queens must write lyrics and perform an original song as ${groups[randomInt(0, groups.length-1)]}.`;
        default:
            return "A surprise challenge awaits!";
    }
}

function mainChallenge() {
    scene.clean();
    scene.createHeader("Maxi Challenge");
    const challengeType = possibleMaxis[randomInt(0, possibleMaxis.length - 1)];
    currentChallengeType = challengeType;
    const description = getMaxiChallengeDescription(challengeType);
    
    scene.createParagraph(`<b>${challengeType}</b> - ${description}`);
    
    // Only use active contestants (not eliminated)
    let performances = chosenContestants.filter(queen => {
        const record = trackRecord.get(queen.name) || [];
        return !record.includes('ELIM');
    }).map(queen => {
        // Calculate score
        let stat = 5;
        if (queen.stats) {
            switch (challengeType) {
                case "ACTING": stat = queen.stats.acting; break;
                case "RUNWAY": stat = queen.stats.runway; break;
                case "DESIGN": stat = queen.stats.design; break;
                case "BALL": stat = (queen.stats.runway + queen.stats.design) / 2; break;
                case "RUSICAL": stat = (queen.stats.acting + queen.stats.dance) / 2; break;
                case "SNATCH GAME": stat = queen.stats.improv; break;
                case "IMPROV": stat = queen.stats.improv; break;
                case "STANDUP": stat = queen.stats.comedy; break;
                case "BRANDING": stat = queen.stats.comedy; break;
                case "GIRL GROUPS": stat = (queen.stats.dance + queen.stats.comedy) / 2; break;
                default: stat = 5;
            }
        }
        const score = stat + randomInt(-2, 2);
        let outcome;
        if (score >= 10) outcome = "slayed the challenge!";
        else if (score >= 8) outcome = "had a great performance!";
        else if (score >= 6) outcome = "had a good performance.";
        else if (score >= 4) outcome = "had a bad performance.";
        else outcome = "flopped the challenge.";
        return { queen, score, outcome, message: `${queen.name} ${outcome}` };
    });
    performances.sort((a, b) => b.score - a.score);

    const outcomeOrder = [
        "slayed the challenge!",
        "had a great performance!",
        "had a good performance.",
        "had a bad performance.",
        "flopped the challenge."
    ];
    for (const outcome of outcomeOrder) {
        const group = performances.filter(perf => perf.outcome === outcome);
        if (group.length === 0) continue;
        const names = group.map(perf => perf.queen.name);
        let message = names.join(', ') + ' ' + outcome;
        const groupDiv = document.createElement('div');
        groupDiv.style.display = 'flex';
        groupDiv.style.justifyContent = 'center';
        groupDiv.style.alignItems = 'center';
        groupDiv.style.gap = '32px';
        group.forEach(perf => {
            let color = 'black';
            if (perf.outcome.includes('slayed')) color = 'darkblue';
            else if (perf.outcome.includes('great')) color = 'royalblue';
            else if (perf.outcome.includes('good')) color = 'black';
            else if (perf.outcome.includes('bad')) color = 'pink';
            else if (perf.outcome.includes('flopped')) color = 'tomato';
            const img = document.createElement('img');
            img.src = perf.queen.image;
            img.alt = perf.queen.name;
            img.style.border = `3px solid ${color}`;
            img.style.borderRadius = '60px';
            img.style.width = '105px';
            img.style.height = '105px';
            img.style.objectFit = 'cover';
            img.onerror = function() { this.src = 'placeholder.webp'; };
            groupDiv.appendChild(img);
        });
        const namesPara = document.createElement('p');
        namesPara.style.width = '100%';
        namesPara.style.marginTop = '8px';
        namesPara.style.fontWeight = 'bold';
        namesPara.style.textAlign = 'center';
        namesPara.innerHTML = message;
        scene._MainBlock.appendChild(groupDiv);
        scene._MainBlock.appendChild(namesPara);
    }
    if (challengeType !== "RUNWAY") {
        window._maxiPerformances = performances;
        window._maxiChallengeType = challengeType;

        if (document.getElementById('show-runway-btn')) {
            document.getElementById('show-runway-btn').remove();
        }
        scene.createButton("Show Runway", "showRunwayPresentation()", "show-runway-btn");
    } else {
        scene.createButton("Proceed", "judgingPanel()")
    }
}

function showRunwayPresentation() {
    const btn = document.getElementById('show-runway-btn');
    if (btn) btn.disabled = true;
    scene.createHorizontalLine();
    scene.createHeader("Runway Presentation");
    
    // Only include active queens (not eliminated)
    let runwayPerformances = chosenContestants.filter(queen => {
        const record = trackRecord.get(queen.name) || [];
        return !record.includes('ELIM');
    }).map(queen => {
        let stat = queen.stats && queen.stats.runway !== undefined ? queen.stats.runway : 5;
        const score = stat + randomInt(-2, 2);
        let outcome;
        if (score >= 10) outcome = "slayed the runway!";
        else if (score >= 8) outcome = "had a great runway!";
        else if (score >= 6) outcome = "had a good runway.";
        else if (score >= 4) outcome = "had a bad runway.";
        else outcome = "flopped the runway.";
        return { queen, score, outcome, message: `${queen.name} ${outcome}` };
    });
    runwayPerformances.sort((a, b) => b.score - a.score);
    const runwayOutcomeOrder = [
        "slayed the runway!",
        "had a great runway!",
        "had a good runway.",
        "had a bad runway.",
        "flopped the runway."
    ];
    for (const outcome of runwayOutcomeOrder) {
        const group = runwayPerformances.filter(perf => perf.outcome === outcome);
        if (group.length === 0) continue;
        const names = group.map(perf => perf.queen.name);
        let message = names.join(', ') + ' ' + outcome;
        const groupDiv = document.createElement('div');
        groupDiv.style.display = 'flex';
        groupDiv.style.justifyContent = 'center';
        groupDiv.style.alignItems = 'center';
        groupDiv.style.gap = '32px';
        group.forEach(perf => {
            let color = 'black';
            if (perf.outcome.includes('slayed')) color = 'darkblue';
            else if (perf.outcome.includes('great')) color = 'royalblue';
            else if (perf.outcome.includes('good')) color = 'black';
            else if (perf.outcome.includes('bad')) color = 'pink';
            else if (perf.outcome.includes('flopped')) color = 'tomato';
            const img = document.createElement('img');
            img.src = perf.queen.image;
            img.alt = perf.queen.name;
            img.style.border = `3px solid ${color}`;
            img.style.borderRadius = '60px';
            img.style.width = '105px';
            img.style.height = '105px';
            img.style.objectFit = 'cover';
            img.onerror = function() { this.src = 'placeholder.webp'; };
            groupDiv.appendChild(img);
        });
        const namesPara = document.createElement('p');
        namesPara.style.width = '100%';
        namesPara.style.marginTop = '8px';
        namesPara.style.fontWeight = 'bold';
        namesPara.style.textAlign = 'center';
        namesPara.innerHTML = message;
        scene._MainBlock.appendChild(groupDiv);
        scene._MainBlock.appendChild(namesPara);
    }
    let performances = window._maxiPerformances;
    runwayPerformances.forEach(runwayPerf => {
        const perf = performances.find(p => p.queen.name === runwayPerf.queen.name);
        if (perf) perf.score += runwayPerf.score;
    });
    performances.sort((a, b) => b.score - a.score);
    window._maxiPerformances = performances;
    scene.createButton("Proceed", "judgingPanel()")
}

function judgingPanel() {
    scene.clean();
    scene.createHeader("Judging Panel");
    let performances = window._maxiPerformances || [];
    if (!performances.length) {
        performances = chosenContestants.map(queen => ({ queen, score: 5, outcome: '', message: '' }));
    }
    performances.sort((a, b) => b.score - a.score);

    const n = chosenContestants.length;
    let critiquedQueens = [];

    if (n <= 3) {
        // Top 3: 1 winner, 2 bottoms
        critiquedQueens = performances;
    } else if (n === 4) {
        // Top 4: 1 winner, 1 high, 2 bottoms
        critiquedQueens = performances;
    } else if (n === 5) {
        // Top 5: No lows, only tops and bottoms
        critiquedQueens = performances;
    } else if (n === 6) {
        // Top 6: No safes, everyone gets critiques
        critiquedQueens = performances;
    } else {
        // Normal judging
        const tops = performances.slice(0, 3);
        const bottoms = performances.slice(-3);
        critiquedQueens = [...tops, ...bottoms];
    }

    // Shuffle queens for presentation
    const shuffledQueens = critiquedQueens.slice().sort(() => Math.random() - 0.5);
    const queensDiv = document.createElement('div');
    queensDiv.style.display = 'flex';
    queensDiv.style.justifyContent = 'center';
    queensDiv.style.gap = '32px';

    shuffledQueens.forEach(perf => {
        scene.createImage(perf.queen.image, 'cyan');
    });

    scene._MainBlock.appendChild(queensDiv);

    const names = shuffledQueens.map(p => p.queen.name).join(', ');
    if (n <= 6) {
        scene.createParagraph(`<b>${names}</b>, you will all receive critiques.`);
    } else {
        scene.createParagraph(`<b>${names}</b>, you represent the tops and bottoms of the week.`);
    }

    scene.createButton("Proceed", "showResults()");
}

function showResults() {
    scene.clean();
    scene.createHeader("Maxi Challenge Results");
    
    let performances = window._maxiPerformances || [];
    if (!performances || !Array.isArray(performances) || performances.length === 0) {
        performances = chosenContestants.map(queen => ({
            queen: queen,
            score: randomInt(0, 10),
            outcome: '',
            message: ''
        }));
    }
    
    // Ensure each performance has a valid score
    performances = performances.map(p => ({
        ...p,
        score: p.score || 5
    }));
    
    // Sort by score
    performances.sort((a, b) => b.score - a.score);

    // Special handling for episode 1 regularSlayers format
    if (episodeNumber === 1 && premiereType === 'regularSlayers') {
        const top2 = performances.slice(0, 2);
        
        // Show top 2 first
        const top2Div = document.createElement('div');
        top2Div.style.display = 'flex';
        top2Div.style.justifyContent = 'center';
        top2Div.style.gap = '32px';
        top2.forEach(perf => {
            updateTrackRecord(perf.queen, 'TOP2');
            scene.createImage(perf.queen.image, 'gold');
        });
        scene._MainBlock.appendChild(top2Div);
        const top2Names = top2.map(p => p.queen.name).join(' and ');
        scene.createParagraph(`<b>${top2Names}</b>, congratulations! You are the top 2 of the week. You will lip sync... FOR THE WIN!`);
        
        // Handle high placements (next 2-3 queens)
        const highCount = Math.min(3, Math.floor((performances.length - 2) / 3));
        const highs = performances.slice(2, 2 + highCount);
        
        if (highs.length > 0) {
            const highsDiv = document.createElement('div');
            highsDiv.style.display = 'flex';
            highsDiv.style.justifyContent = 'center';
            highsDiv.style.gap = '32px';
            highs.forEach(perf => {
                updateTrackRecord(perf.queen, 'HIGH');
                scene.createImage(perf.queen.image, 'royalblue');
            });
            scene._MainBlock.appendChild(highsDiv);
            const highNames = highs.map(p => p.queen.name).join(' and ');
            scene.createParagraph(`${highNames}, you are safe.`);
        }
        
        // Rest are safe
        performances.slice(2 + highCount).forEach(perf => {
            updateTrackRecord(perf.queen, 'SAFE');
        });

        displayTrackRecord();
        scene.createButton("Proceed", "topTwoLipsync()");
        return;
    }

    // Regular results flow
    const n = chosenContestants.length;

    // Winner announcement
    const winner = performances[0];
    updateTrackRecord(winner.queen, 'WIN');
    scene.createImage(winner.queen.image, 'gold');
    scene.createParagraph(`<b>${winner.queen.name}</b>, you are the winner of this week's challenge!`);

    let remainingQueens = performances.filter(p => p !== winner);

    // Handle rest of placements based on number of queens
    if (n <= 3) {
        // Top 3: Other two are bottom
        const btm2 = remainingQueens;
        const btmDiv = document.createElement('div');
        btmDiv.style.display = 'flex';
        btmDiv.style.justifyContent = 'center';
        btmDiv.style.gap = '32px';
        btm2.forEach(perf => {
            updateTrackRecord(perf.queen, 'BTM2');
            scene.createImage(perf.queen.image, 'tomato');
        });
        scene._MainBlock.appendChild(btmDiv);
        const btmNames = btm2.map(p => p.queen.name).join(' and ');
        scene.createParagraph(`<b>${btmNames}</b>, I'm sorry my dears but you're up for elimination.`);
    } 
    else if (n >= 4) {
        // Handle high placements
        const highs = remainingQueens.slice(0, Math.min(2, Math.floor((n-1)/3)));
        const highsDiv = document.createElement('div');
        highsDiv.style.display = 'flex';
        highsDiv.style.justifyContent = 'center';
        highsDiv.style.gap = '32px';
        highs.forEach(perf => {
            updateTrackRecord(perf.queen, 'HIGH');
            scene.createImage(perf.queen.image, 'royalblue');
        });
        scene._MainBlock.appendChild(highsDiv);
        const highNames = highs.map(p => p.queen.name).join(' and ');
        scene.createParagraph(`${highNames}, you're safe.`);

        // Handle safe queens
        const bottomStartIndex = Math.max(remainingQueens.length - 3, highs.length);
        remainingQueens.slice(highs.length, bottomStartIndex).forEach(perf => {
            updateTrackRecord(perf.queen, 'SAFE');
        });

        // Handle bottom queens
        const btm3 = remainingQueens.slice(bottomStartIndex);
        
        // Only announce LOW if we have enough queens for a proper bottom 3
        if (btm3.length === 3) {
            // Best of bottom 3 is LOW
            const lowQueen = btm3[0];
            updateTrackRecord(lowQueen.queen, 'LOW');
            scene.createImage(lowQueen.queen.image, 'pink');
            scene.createParagraph(`${lowQueen.queen.name}, you're safe.`);
            
            // Bottom 2 queens
            const btm2 = btm3.slice(1);
            const btmDiv = document.createElement('div');
            btmDiv.style.display = 'flex';
            btmDiv.style.justifyContent = 'center';
            btmDiv.style.gap = '32px';
            btm2.forEach(perf => {
                updateTrackRecord(perf.queen, 'BTM2');
                scene.createImage(perf.queen.image, 'tomato');
            });
            scene._MainBlock.appendChild(btmDiv);
            const btmNames = btm2.map(p => p.queen.name).join(' and ');
            scene.createParagraph(`<b>${btmNames}</b>, I'm sorry my dears but you're up for elimination.`);
        } else {
            // Just bottom 2
            const btm2 = btm3;
            const btmDiv = document.createElement('div');
            btmDiv.style.display = 'flex';
            btmDiv.style.justifyContent = 'center';
            btmDiv.style.gap = '32px';
            btm2.forEach(perf => {
                updateTrackRecord(perf.queen, 'BTM2');
                scene.createImage(perf.queen.image, 'tomato');
            });
            scene._MainBlock.appendChild(btmDiv);
            const btmNames = btm2.map(p => p.queen.name).join(' and ');
            scene.createParagraph(`<b>${btmNames}</b>, I'm sorry my dears but you're up for elimination.`);
        }
    }

    // Display track record
    displayTrackRecord();

    scene.createButton("Proceed", "bottomLipsync()");
}

function bottomLipsync() {
    scene.clean();
    scene.createHeader("The time has come...");
    nextStep();
}

async function loadSongs() {
    try {
        const response = await fetch('./data/songs.txt');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const text = await response.text();
        return text.split('\n').filter(song => song.trim().length > 0);
    } catch (error) {
        console.error('Error loading songs:', error);
        return [];
    }
}

async function nextStep() {
    scene.clean();
    scene.createHeader("Lip Sync For Your Life");
    
    const btm2 = window._maxiPerformances
        .slice(-2)
        .filter(p => !immunityQueen || p.queen.name !== immunityQueen.name);
    
    if (btm2.length !== 2) {
        scene.createParagraph("Error: Cannot proceed with lip sync.");
        showCornerPopup("Error: Cannot proceed with lip sync.", 'error');
        return;
    }

    const songs = await loadSongs();
    const song = songs[randomInt(0, songs.length - 1)];
    
    scene.createParagraph(`Two queens stand before me. Prior to tonight, you were asked to prepare a lip sync performance to "${song}".`);
    scene.createParagraph("The time has come... for you to lip sync... FOR. YOUR. LIFE!");
    
    const lipsyncDiv = document.createElement('div');
    lipsyncDiv.style.display = 'flex';
    lipsyncDiv.style.justifyContent = 'center';
    lipsyncDiv.style.gap = '32px';
    
    btm2.forEach(perf => {
        scene.createImage(perf.queen.image, 'tomato');
    });
    
    scene._MainBlock.appendChild(lipsyncDiv);
    
    scene.createParagraph("Good luck... and DON'T fuck it up!");
    scene.createButton("Show Result", "eliminationResult()");
}

function eliminationResult() {
    scene.clean();
    scene.createHeader("The Result");
    
    const btm2 = window._maxiPerformances
        .slice(-2)
        .filter(p => !immunityQueen || p.queen.name !== immunityQueen.name);
    
    const lipSyncScores = btm2.map(perf => ({
        queen: perf.queen,
        score: (perf.queen.stats?.lipsync || 5) + randomInt(-2, 2)
    }));
    
    lipSyncScores.sort((a, b) => b.score - a.score);

    // Handle premiere episode formats
    if (episodeNumber === 1) {
        switch (premiereType) {
            case 'regularShantay':
                // Double shantay format
                scene.createImage(lipSyncScores[0].queen.image, 'hotpink');
                scene.createImage(lipSyncScores[1].queen.image, 'hotpink');
                scene.createParagraph("Ladies, I've made my decision...");
                scene.createParagraph("Shantay you BOTH stay!");
                
                // Update track records to show double shantay
                lipSyncScores.forEach(perf => {
                    const currentRecord = trackRecord.get(perf.queen.name);
                    currentRecord[currentRecord.length - 1] = 'BTM2';
                    trackRecord.set(perf.queen.name, currentRecord);
                });
                
                // No elimination, both stay
                episodeNumber++;
                displayTrackRecord();
                scene.createButton("Proceed", "startEpisode()");
                return;
        }
    }
    
    // Regular elimination
    scene.createImage(lipSyncScores[0].queen.image, 'tomato');
    scene.createParagraph(`${lipSyncScores[0].queen.name}, shantay you stay.`);
    
    scene.createImage(lipSyncScores[1].queen.image, 'red');
    scene.createParagraph(`${lipSyncScores[1].queen.name}, sashay away...`);
    
    // Update track records
    const eliminatedQueen = lipSyncScores[1].queen;
    let elimQueenRecord = trackRecord.get(eliminatedQueen.name) || [];
    
    // Replace last BTM2 with ELIM for eliminated queen
    if (elimQueenRecord[elimQueenRecord.length - 1] === 'BTM2') {
        elimQueenRecord[elimQueenRecord.length - 1] = 'ELIM';
    } else {
        elimQueenRecord.push('ELIM');
    }
    trackRecord.set(eliminatedQueen.name, elimQueenRecord);
    
    // Remove eliminated queen from active contestants
    chosenContestants = chosenContestants.filter(queen => queen.name !== eliminatedQueen.name);
    
    // Make sure queen is properly removed from any future calculations
    const eliminatedQueenName = eliminatedQueen.name;
    window._maxiPerformances = window._maxiPerformances?.filter(p => p.queen.name !== eliminatedQueenName) || [];
    
    // Display final track record for the episode
    displayTrackRecord();
    
    episodeNumber++;
    scene.createButton("Proceed", "startEpisode()");
}

async function topTwoLipsync() {
    scene.clean();
    scene.createHeader("Lip Sync For The Win");
    
    const top2 = window._maxiPerformances.slice(0, 2);
    const songs = await loadSongs();
    const song = songs[randomInt(0, songs.length - 1)];
    
    scene.createParagraph(`Two queens stand before me. Prior to tonight, you were asked to prepare a lip sync performance to "${song}".`);
    scene.createParagraph("The time has come... for you to lip sync... FOR THE WIN!");
    
    const lipsyncDiv = document.createElement('div');
    lipsyncDiv.style.display = 'flex';
    lipsyncDiv.style.justifyContent = 'center';
    lipsyncDiv.style.gap = '32px';
    
    top2.forEach(perf => {
        scene.createImage(perf.queen.image, 'gold');
    });
    
    scene._MainBlock.appendChild(lipsyncDiv);
    
    scene.createParagraph("Good luck... and DON'T fuck it up!");
    scene.createButton("Show Result", "premiereLipsyncResult()");
}

function premiereLipsyncResult() {
    scene.clean();
    scene.createHeader("The Result");
    
    const top2 = window._maxiPerformances.slice(0, 2);
    const lipSyncScores = top2.map(perf => ({
        queen: perf.queen,
        score: (perf.queen.stats?.lipsync || 5) + randomInt(-2, 2)
    }));
    
    lipSyncScores.sort((a, b) => b.score - a.score);
    
    // Check for a tie (scores within 1 point of each other)
    const isTie = Math.abs(lipSyncScores[0].score - lipSyncScores[1].score) <= 1;
    
    if (isTie) {
        // Double win
        scene.createImage(lipSyncScores[0].queen.image, 'darkblue');
        scene.createImage(lipSyncScores[1].queen.image, 'darkblue');
        scene.createParagraph("Ladies, I've made my decision...");
        scene.createParagraph("You're both winners baby! You've each earned a cash tip of $5000!");
        
        // Update track records to DOUBLEWIN
        lipSyncScores.forEach(perf => {
            const currentRecord = trackRecord.get(perf.queen.name);
            currentRecord[currentRecord.length - 1] = 'WIN';
            trackRecord.set(perf.queen.name, currentRecord);
        });
    } else {
        // Single winner
        scene.createImage(lipSyncScores[0].queen.image, 'gold');
        scene.createParagraph(`${lipSyncScores[0].queen.name}, you're a winner baby! You've earned a cash tip of $5000!`);
        
        scene.createImage(lipSyncScores[1].queen.image, 'silver');
        scene.createParagraph(`${lipSyncScores[1].queen.name}, you put up a good fight. Now, sashay to safety.`);
        
        // Update track records - winner gets WIN, runner up keeps TOP2
        const winnerRecord = trackRecord.get(lipSyncScores[0].queen.name);
        winnerRecord[winnerRecord.length - 1] = 'WIN';
        trackRecord.set(lipSyncScores[0].queen.name, winnerRecord);
    }
    
    displayTrackRecord();
    episodeNumber++;
    scene.createButton("Proceed", "startEpisode()");
}

async function finale() {
    scene.clean();
    scene.createHeader("Grand Finale");
    
    // Get remaining contestants
    const finalists = chosenContestants;
    
    // Show the finalists
    scene.createBigText("Our finalists are...");
    const finalistsDiv = document.createElement('div');
    finalistsDiv.style.display = 'flex';
    finalistsDiv.style.justifyContent = 'center';
    finalistsDiv.style.gap = '32px';
    finalistsDiv.style.marginTop = '20px';
    
    finalists.forEach(queen => {
        scene.createImage(queen.image, 'gold');
    });
    
    scene._MainBlock.appendChild(finalistsDiv);
    const finalistNames = finalists.map(q => q.name).join(', ');
    scene.createParagraph(`<b>${finalistNames}</b>`);
    
    // Final challenge performance
    scene.createHorizontalLine();
    scene.createBigText("For the final challenge...");
    scene.createParagraph("The queens will write and perform their own verse to RuPaul's latest hit!");

    // Calculate final scores based on overall stats and track record
    let finalScores = finalists.map(queen => {
        // Get track record
        const record = trackRecord.get(queen.name);
        const wins = record.filter(p => p === 'WIN').length;
        const highs = record.filter(p => p === 'HIGH').length;
        const btms = record.filter(p => p === 'BTM2').length;
        
        // Calculate base score from stats
        const stats = queen.stats || {};
        const baseScore = (
            (stats.acting || 5) + 
            (stats.comedy || 5) + 
            (stats.dance || 5) + 
            (stats.design || 5) + 
            (stats.improv || 5) + 
            (stats.runway || 5)
        ) / 6;
        
        // Add bonus points for track record
        const trackScore = (wins * 2) + (highs * 1) - (btms * 1);
        
        return {
            queen,
            score: baseScore + trackScore + randomInt(-1, 1),
            wins,
            highs,
            btms
        };
    });
    
    finalScores.sort((a, b) => b.score - a.score);
    
    // Show final performances
    scene.createHorizontalLine();
    scene.createHeader("Final Performance");
    finalScores.forEach(score => {
        scene.createImage(score.queen.image);
        scene.createBold(`${score.queen.name}`);
        scene.createParagraph(`Track Record: ${score.wins} WIN${score.wins !== 1 ? 's' : ''}, ${score.highs} HIGH${score.highs !== 1 ? 's' : ''}, ${score.btms} BTM2${score.btms !== 1 ? 's' : ''}`);
    });
    
    scene.createButton("Proceed", "crownWinner()");
}

async function crownWinner() {
    scene.clean();
    scene.createHeader("The Winner Is...");
    
    const finalists = chosenContestants;
    const songs = await loadSongs();
    const finalSong = songs[randomInt(0, songs.length - 1)];
    
    if (finalists.length > 2) {
        // For top 3/4, eliminate others first
        const eliminated = finalists.slice(2);
        eliminated.forEach(queen => {
            scene.createImage(queen.image, 'sienna');
            updateTrackRecord(queen, 'ELIMINATED');
        });
        const eliminatedNames = eliminated.map(q => q.name).join(' and ');
        scene.createParagraph(`${eliminatedNames}, I'm sorry my ${eliminated.length === 1 ? 'dear' : 'dears'}, but it's not your time. Now, sashay away...`);
        
        scene.createHorizontalLine();
        const top2 = finalists.slice(0, 2);
        scene.createParagraph(`Two queens stand before me. Prior to tonight, you were asked to prepare a lip sync performance to "${finalSong}".`);
        
        const top2Div = document.createElement('div');
        top2Div.style.display = 'flex';
        top2Div.style.justifyContent = 'center';
        top2Div.style.gap = '32px';
        
        top2.forEach(queen => {
            scene.createImage(queen.image, 'gold');
        });
        
        scene._MainBlock.appendChild(top2Div);
        scene.createParagraph("The time has come... for you to lip sync... FOR THE CROWN!");
        scene.createButton("Show Result", "announceWinner()");
    } else {
        scene.createParagraph(`Two queens stand before me. Prior to tonight, you were asked to prepare a lip sync performance to "${finalSong}".`);
        
        const finalistsDiv = document.createElement('div');
        finalistsDiv.style.display = 'flex';
        finalistsDiv.style.justifyContent = 'center';
        finalistsDiv.style.gap = '32px';
        
        finalists.forEach(queen => {
            scene.createImage(queen.image, 'gold');
        });
        
        scene._MainBlock.appendChild(finalistsDiv);
        scene.createParagraph("The time has come... for you to lip sync... FOR THE CROWN!");
        scene.createButton("Show Result", "announceWinner()");
    }
}

function announceWinner() {
    scene.clean();
    scene.createHeader("The Final Decision...");
    
    const finalists = chosenContestants.slice(0, 2);
    const lipSyncScores = finalists.map(queen => ({
        queen,
        score: (queen.stats?.lipsync || 5) + randomInt(-1, 1)
    }));
    
    lipSyncScores.sort((a, b) => b.score - a.score);
    const winner = lipSyncScores[0].queen;
    const runnerUp = lipSyncScores[1].queen;

    // Update track records for the finale
    finalists.forEach(queen => {
        let placement = queen === winner ? 'WINNER' : 'RUNNER UP';
        updateTrackRecord(queen, placement);
    });

    // Show both finalists side by side with dramatic styling
    const finalistsDiv = document.createElement('div');
    finalistsDiv.style.display = 'flex';
    finalistsDiv.style.justifyContent = 'center';
    finalistsDiv.style.gap = '100px';
    finalistsDiv.style.margin = '20px 0';

    finalists.forEach(queen => {
        const queenDiv = document.createElement('div');
        queenDiv.style.textAlign = 'center';
        const img = document.createElement('img');
        img.src = queen.image;
        img.style.width = '150px';
        img.style.height = '150px';
        img.style.objectFit = 'cover';
        img.style.border = '5px solid white';
        img.style.transition = 'all 0.5s ease';
        queenDiv.appendChild(img);
        finalistsDiv.appendChild(queenDiv);
    });

    scene._MainBlock.appendChild(finalistsDiv);
    
    scene.createParagraph("Two queens stand before me...");
    scene.createParagraph("But only one can be crowned the winner.");
    
    // Add first dramatic pause button
    scene.createButton("Continue...", "revealWinnerPart1()");
    
    // Store the winner and runner up info globally for the next steps
    window._winnerQueen = winner;
    window._runnerUpQueen = runnerUp;
}

function revealWinnerPart1() {
    scene.createHorizontalLine();
    scene.createParagraph("Based on all of your performances throughout this competition...");
    scene.createButton("Continue...", "revealWinnerPart2()");
}

function revealWinnerPart2() {
    const winner = window._winnerQueen;
    const runnerUp = window._runnerUpQueen;
    
    scene.createParagraph("The winner of this season is...");
    scene.createButton("Reveal Winner", "revealWinnerFinal()");
}

function revealWinnerFinal() {
    const winner = window._winnerQueen;
    const runnerUp = window._runnerUpQueen;
    scene.clean();
    scene.createHeader("We Have a Winner!");

    // Create confetti container
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '1000';
    document.body.appendChild(confettiContainer);

    // Create confetti with more dramatic colors and larger pieces
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '15px';
        confetti.style.height = '15px';
        confetti.style.backgroundColor = ['#FFD700', '#FF69B4', '#4169E1', '#9370DB', '#FF1493'][Math.floor(Math.random() * 5)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -20 + 'px';
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        confetti.style.opacity = Math.random();
        confettiContainer.appendChild(confetti);

        // Animate confetti with more dramatic movement
        const animation = confetti.animate([
            { transform: 'translate3d(0,0,0) rotate(' + Math.random() * 360 + 'deg)', opacity: 1 },
            { transform: 'translate3d(' + (Math.random() * 200 - 100) + 'px,100vh,0) rotate(' + Math.random() * 720 + 'deg)', opacity: 0 }
        ], {
            duration: Math.random() * 2000 + 3000,
            delay: Math.random() * 1000,
            fill: 'forwards'
        });

        animation.onfinish = () => confetti.remove();
    }
    
    // Winner announcement with special styling
    const winnerDiv = document.createElement('div');
    winnerDiv.style.animation = 'glitter 2s linear infinite';
    winnerDiv.style.padding = '20px';
    winnerDiv.style.position = 'relative';
    winnerDiv.style.zIndex = '1001';
    
    const winnerImg = document.createElement('img');
    winnerImg.src = winner.image;
    winnerImg.style.border = '5px solid gold';
    winnerImg.style.boxShadow = '0 0 20px gold';
    winnerImg.style.width = '150px';
    winnerImg.style.height = '150px';
    winnerImg.style.objectFit = 'cover';
    winnerDiv.appendChild(winnerImg);
    
    scene._MainBlock.appendChild(winnerDiv);
    scene.createBigText(`${winner.name}, you're a WINNER baby!`);
    scene.createParagraph("You are the winner of this season!");
    
    scene.createHorizontalLine();
    
    // Runner up announcement
    scene.createImage(runnerUp.image, 'silver');
    scene.createParagraph(`${runnerUp.name}, you're a winner baby, just not today. Now, sashay away...`);
    
    // Display final track record
    displayTrackRecord();
    
    // Add restart button
    scene.createButton("Start New Season", "location.reload()");

    // Cleanup confetti after 5 seconds
    setTimeout(() => {
        confettiContainer.remove();
    }, 5000);
}

function showContestantInfo(queen) {
    const modal = document.querySelector('.contestant-modal');
    const modalImage = document.getElementById('modal-queen-image');
    const modalName = document.getElementById('modal-queen-name');
    const modalBody = document.querySelector('.modal-body');

    // Set the basic info
    modalImage.src = queen.image;
    modalName.textContent = queen.name;

    // Handle seasons and placements arrays
    const seasonInfo = Array.isArray(queen.seasons) ? 
        queen.seasons.join(', ') : 
        queen.season || 'Unknown';
    const placementInfo = Array.isArray(queen.placements) ? 
        queen.placements.join(', ') : 
        queen.placement || 'Unknown';

    // Create the modal content
    modalBody.innerHTML = `
        <div class="info-section">
            <h3>Season Info</h3>
            <p>Original Season: ${seasonInfo}</p>
            <p>Original Placement: ${placementInfo}</p>
        </div>
        <div class="info-section">
            <h3>Stats</h3>
            <p>Acting: ${queen.stats?.acting || 5}</p>
            <p>Comedy: ${queen.stats?.comedy || 5}</p>
            <p>Dance: ${queen.stats?.dance || 5}</p>
            <p>Design: ${queen.stats?.design || 5}</p>
            <p>Improv: ${queen.stats?.improv || 5}</p>
            <p>Runway: ${queen.stats?.runway || 5}</p>
            <p>Lip Sync: ${queen.stats?.lipsync || 5}</p>
        </div>
    `;

    // Show the modal
    modal.classList.add('show');
}

// Event listener for closing the modal
document.querySelector('.close-modal').addEventListener('click', () => {
    document.querySelector('.contestant-modal').classList.remove('show');
});

// Close modal when clicking outside
document.querySelector('.contestant-modal').addEventListener('click', (e) => {
    if (e.target === document.querySelector('.contestant-modal')) {
        document.querySelector('.contestant-modal').classList.remove('show');
    }
});

// Update the contestant card creation to remove direct click handler and add menu option
function createContestantCard(queen) {
    const card = document.createElement('div');
    card.className = 'contestant-card';
    card.innerHTML = `
        <input type="checkbox" class="queen-select" id="select-${queen.id}">
        <label for="select-${queen.id}"></label>
        <img src="${queen.image}" alt="${queen.getName()}">
        <p>${queen.getName()}</p>
        <button class="cog-menu-btn">
            <i class="fas fa-ellipsis-v"></i>
        </button>
        <div class="cog-popover">
            <button class="view-info"><i class="fas fa-info-circle"></i>View Info</button>
            <button class="remove-queen"><i class="fas fa-trash"></i>Remove</button>
        </div>
    `;

    // Add click handlers for the menu options
    const cogBtn = card.querySelector('.cog-menu-btn');
    const popover = card.querySelector('.cog-popover');
    cogBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.cog-popover').forEach(pop => {
            if (pop !== popover) pop.classList.remove('show');
        });
        popover.classList.toggle('show');
    });

    // View info button handler
    card.querySelector('.view-info').addEventListener('click', () => {
        showContestantInfo(queen);
        popover.classList.remove('show');
    });

    // Remove queen button handler
    card.querySelector('.remove-queen').addEventListener('click', () => {
        const index = chosenContestants.findIndex(c => c.name === queen.name);
        if (index !== -1) {
            chosenContestants.splice(index, 1);
            displayChosenContestants();
        }
    });

    return card;
}

// Predefined season casts
const predefinedCasts = {
    // Regular Seasons
    season1: ["Akashia", "BeBe Zahara Benet", "Jade Sotomayor", "Nina Flowers", "Ongina", "Rebecca Glasscock", "Shannel", "Tammie Brown", "Victoria 'Porkchop' Parker"],
    season2: ["Tyra Sanchez", "Raven", "Jujubee", "Tatianna", "Pandora Boxx", "Jessica Wild", "Sahara Davenport", "Morgan McMichaels", "Kylie Sonique Love", "Mystique Summers", "Nicole Paige Brooks", "Shangela"],
    season3: ["Raja", "Manila Luzon", "Alexis Mateo", "Yara Sofia", "Carmen Carrera", "Shangela", "Delta Work", "Stacy Layne Matthews", "Mariah Paris Balenciaga", "India Ferrah", "Mimi Imfurst", "Phoenix", "Venus D-Lite"],
    season4: ["Sharon Needles", "Chad Michaels", "Jaremi Carey", "Latrice Royale", "Kenya Olivera", "Dida Ritz", "Willam", "Jiggly Caliente", "Milan", "Madame LaQueer", "The Princess", "Lashauwn Beyond", "Alisa Summers"],
    season5: ["Jinkx Monsoon", "Alaska", "Roxxxy Andrews", "Detox", "Coco Montrese", "Alyssa Edwards", "Ivy Winters", "Jade Jolie", "Lineysha Sparx", "Honey Mahogany", "Vivienne Pinay", "Monica Beverly Hillz", "Serena ChaCha", "Penny Tration"],
    season6: ["Bianca Del Rio", "Adore Delano", "Courtney Act", "Darienne Lake", "BenDeLaCreme", "Joslyn Fox", "Trinity K. Bonet", "Laganja Estranja", "Milk", "Gia Gunn", "April Carrión", "Vivacious", "Magnolia Crawford", "Kelly Mantle"],
    season7: ["Violet Chachki", "Ginger Minj", "Pearl", "Kennedy Davenport", "Katya", "Trixie Mattel", "Miss Fame", "Jaidynn Diore Fierce", "Max", "Kandy Ho", "Mrs. Kasha Davis", "Jasmine Masters", "Sasha Belle", "Tempest DuJour"],
    season8: ["Bob The Drag Queen", "Kim Chi", "Naomi Smalls", "Chi Chi DeVayne", "Derrick Barry", "Thorgy Thor", "Robbie Turner", "Acid Betty", "Naysha Lopez", "Cynthia Lee Fontaine", "Dax ExclamationPoint", "Laila McQueen"],
    season9: ["Sasha Velour", "Peppermint", "Shea Couleé", "Trinity The Tuck", "Alexis Michelle", "Nina Bo'nina Brown", "Valentina", "Farrah Moan", "Aja", "Cynthia Lee Fontaine", "Eureka O'Hara", "Charlie Hides", "Kimora Blac", "Jaymes Mansfield"],
    season10: ["Aquaria", "Eureka O'Hara", "Kameron Michaels", "Asia O'Hara", "Miz Cracker", "Monét X Change", "The Vixen", "Monique Heart", "Blair St. Clair", "Mayhem Miller", "Dusty Ray Bottoms", "Yuhua Hamasaki", "Kalorie Karbdashian Williams", "Vanessa Vanjie Mateo"],
    season11: ["Yvie Oddly", "Brooke Lynn Hytes", "A'keria C. Davenport", "Silky Nutmeg Ganache", "Nina West", "Shuga Cain", "Plastique Tiara", "Ra'Jah O'Hara", "Scarlet Envy", "Ariel Versace", "Mercedes Iman Diamond", "Honey Davenport", "Kahanna Montrese", "Soju"],
    season12: ["Jaida Essence Hall", "Crystal Methyd", "Gigi Goode", "Jackie Cox", "Heidi N Closet", "Widow Von'Du", "Jan", "Brita", "Aiden Zhane", "Nicky Doll", "Rock M. Sakura", "Dahlia Sin"],
    season13: ["Symone", "Kandy Muse", "Gottmik", "Rosé", "Olivia Lux", "Utica Queen", "Tina Burner", "Denali", "Elliott with 2 Ts", "LaLa Ri", "Joey Jay", "Tamisha Iman", "Kahmora Hall"],
    season14: ["Willow Pill", "Lady Camden", "Angeria Paris VanMicheals", "Bosco", "Daya Betty", "DeJa Skye", "Jorgeous", "Jasmine Kennedie", "Kerri Colby", "Maddy Morphosis", "Orion Story", "Alyssa Hunter", "Kornbread Jeté", "June Jambalaya"],
    season15: ["Sasha Colby", "Anetra", "Luxx Noir London", "Mistress Isabelle Brooks", "Loosey LaDuca", "Marcia Marcia Marcia", "Malaysia Babydoll Foxx", "Salina EsTitties", "Spice", "Jax", "Aura Mayari", "Sugar", "Robin Fierce", "Amethyst", "Princess Poppy", "Irene Dubois"],
    season16: ["Nymphia Wind", "Sapphira Cristal", "Plane Jane", "Q", "Morphine Love Dion", "Dawn", "Mhi'ya Iman Le'Paige", "Plasma", "Xunami Muse", "Megami", "Geneva Karr", "Amanda Tori Meating", "Mirage", "Hershii LiqCour-Jeté"],
    season17: ["Onya Nurve", "Jewels Sparkles", "Lexi Love", "Sam Star", "Suzie Toot", "Lana Ja'Rae", "Lydia B Kollins", "Arrietty", "Kori King", "Acacia Forgot", "Crystal Envy", "Hormona Lisa", "Joella", "Lucky Starzzz"],

    // All Stars Seasons
    allstars1: ["Chad Michaels", "Raven", "Jujubee", "Shannel", "Nina Flowers", "Tammie Brown", "Latrice Royale", "Manila Luzon", "Alexis Mateo", "Pandora Boxx", "Mimi Imfurst"],
    allstars2: ["Alaska", "Detox", "Katya", "Roxxxy Andrews", "Alyssa Edwards", "Tatianna", "Phi Phi O'Hara", "Ginger Minj", "Coco Montrese", "Adore Delano"],
    allstars3: ["Trixie Mattel", "Kennedy Davenport", "Shangela", "BeBe Zahara Benet", "Morgan McMichaels", "Chi Chi DeVayne", "Aja", "DeLa", "Milk", "Thorgy Thor"],
    allstars4: ["Trinity The Tuck", "Monét X Change", "Monique Heart", "Naomi Smalls", "Manila Luzon", "Valentina", "Latrice Royale", "Gia Gunn", "Farrah Moan", "Jasmine Masters"],
    allstars5: ["Shea Couleé", "Jujubee", "Miz Cracker", "Blair St. Clair", "Alexis Mateo", "India Ferrah", "Mariah Paris Balenciaga", "Mayhem Miller", "Ongina", "Derrick Barry"],
    allstars6: ["Kylie Sonique Love", "Ra'Jah O'Hara", "Eureka O'Hara", "Ginger Minj", "Trinity K. Bonet", "Pandora Boxx", "Jan", "Scarlet Envy", "A'keria C. Davenport", "Yara Sofia", "Silky Nutmeg Ganache", "Jiggly Caliente", "Serena ChaCha"],
    allstars7: ["Jinkx Monsoon", "Monét X Change", "Shea Couleé", "Trinity The Tuck", "Raja", "The Vivienne", "Jaida Essence Hall", "Yvie Oddly"],
    allstars8: ["Kandy Muse", "Lala Ri", "Jessica Wild", "Alexis Michelle", "Heidi N Closet", "Mrs. Kasha Davis", "Darienne Lake", "Jaymes Mansfield", "Kahanna Montrese", "Monica Beverly Hillz", "Naysha Lopez", "Jimbo"],
    allstars9: ["Angeria Paris VanMichaels", "Roxxxy Andrews", "Vanessa Vanjie", "Nina West", "Plastique Tiara", "Jorgeous", "Gottmik", "Shannel"],
    allstars10: ["Aja", "Bosco", "DeJa Skye", "Irene The Alien", "Olivia Lux", "Phoenix", "Jorgeous", "Kerri Colby", "Lydia B Kollins", "Mistress Isabelle Brooks", "Nicole Paige Brooks", "Tina Burner", "Acid Betty", "Alyssa Hunter", "Cynthia Lee Fontaine", "Daya Betty", "Denali", "Ginger Minj"]
};

// Load predefined cast
function loadPredefinedCast(castName) {
    const cast = predefinedCasts[castName];
    if (!cast) return;

    // Clear current cast
    chosenContestants = [];
    
    // Add each queen from the predefined cast
    cast.forEach(queenName => {
        const queen = contestants.find(q => q.name === queenName);
        if (queen && !chosenContestants.some(c => c.name === queen.name)) {
            chosenContestants.push(queen);
        }
    });

    // Update display
    displayChosenContestants();
}

// Add event listener for predefined cast selector
document.addEventListener('DOMContentLoaded', function() {
    // ...existing DOMContentLoaded code...

    const predefinedCastSelect = document.getElementById('predefined-cast');
    if (predefinedCastSelect) {
        predefinedCastSelect.addEventListener('change', (e) => {
            const selectedCast = e.target.value;
            if (selectedCast) {
                loadPredefinedCast(selectedCast);
            }
        });
    }
});