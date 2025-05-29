
// Database of potential matches
const potentialMatches = [
    {
        id: 1,
        name: "Alex Johnson",
        age: 25,
        major: "Computer Science",
        academicLevel: "Graduate",
        interests: ["machine learning", "artificial intelligence", "data mining", "neural networks", "computer vision"]
    },
    {
        id: 2,
        name: "Jamie Smith",
        age: 30,
        major: "Physics",
        academicLevel: "PhD",
        interests: ["quantum mechanics", "theoretical physics", "particle physics", "astrophysics", "quantum computing"]
    },
    {
        id: 3,
        name: "Morgan Lee",
        age: 22,
        major: "English Literature",
        academicLevel: "Undergraduate",
        interests: ["renaissance literature", "poetry analysis", "creative writing", "literary theory", "comparative literature"]
    },
    {
        id: 4,
        name: "Taylor Wilson",
        age: 35,
        major: "Biology",
        academicLevel: "Postdoc",
        interests: ["molecular biology", "genetics", "biochemistry", "cell biology", "bioinformatics"]
    },
    {
        id: 5,
        name: "Casey Brown",
        age: 28,
        major: "Psychology",
        academicLevel: "Graduate",
        interests: ["cognitive psychology", "neuroscience", "behavioral science", "developmental psychology", "clinical research"]
    },
    {
        id: 6,
        name: "Jordan Rivera",
        age: 45,
        major: "Mathematics",
        academicLevel: "Professor",
        interests: ["number theory", "abstract algebra", "cryptography", "mathematical modeling", "statistical analysis"]
    },
    {
        id: 7,
        name: "Quinn Davis",
        age: 26,
        major: "Environmental Science",
        academicLevel: "Graduate",
        interests: ["climate change", "sustainability", "conservation biology", "environmental policy", "renewable energy"]
    },
    {
        id: 8,
        name: "Riley Martinez",
        age: 32,
        major: "History",
        academicLevel: "PhD",
        interests: ["ancient civilizations", "world war II", "medieval history", "historical methodology", "cultural studies"]
    },
    {
        id: 9,
        name: "Avery Thompson",
        age: 29,
        major: "Computer Engineering",
        academicLevel: "Graduate",
        interests: ["robotics", "embedded systems", "machine learning", "computer architecture", "systems programming"]
    },
    {
        id: 10,
        name: "Sam Peterson",
        age: 38,
        major: "Chemistry",
        academicLevel: "Professor",
        interests: ["organic chemistry", "material science", "analytical chemistry", "biochemistry", "chemical engineering"]
    },
    {
        id: 11,
        name: "Emerson Kim",
        age: 24,
        major: "Media Studies",
        academicLevel: "Graduate",
        interests: ["digital journalism", "social media analysis", "film theory", "mass communication", "content creation"]
    },
    {
        id: 12,
        name: "Dakota Chen",
        age: 33,
        major: "Sociology",
        academicLevel: "PhD",
        interests: ["urban sociology", "gender studies", "social movements", "quantitative research methods", "social inequality"]
    },
    {
        id: 13,
        name: "Harper Garcia",
        age: 21,
        major: "Business",
        academicLevel: "Undergraduate",
        interests: ["entrepreneurship", "marketing analytics", "business strategy", "financial markets", "sustainable business"]
    },
    {
        id: 14,
        name: "Blake Thompson",
        age: 27,
        major: "Neuroscience",
        academicLevel: "Graduate",
        interests: ["cognitive neuroscience", "brain imaging", "neural computation", "behavioral neuroscience", "neuroethics"]
    },
    {
        id: 15,
        name: "Reese Patel",
        age: 31,
        major: "Economics",
        academicLevel: "PhD",
        interests: ["behavioral economics", "econometrics", "macroeconomic theory", "development economics", "game theory"]
    },
    {
        id: 16,
        name: "Skyler Rodriguez",
        age: 40,
        major: "Education",
        academicLevel: "Professor",
        interests: ["educational technology", "curriculum design", "learning sciences", "pedagogical methods", "educational psychology"]
    },
    {
        id: 17,
        name: "Cameron Wright",
        age: 23,
        major: "Marine Biology",
        academicLevel: "Graduate",
        interests: ["coral reef ecology", "marine conservation", "oceanography", "aquatic biodiversity", "marine biotechnology"]
    },
    {
        id: 18,
        name: "Finley Brooks",
        age: 36,
        major: "Linguistics",
        academicLevel: "Professor",
        interests: ["sociolinguistics", "language acquisition", "computational linguistics", "phonetics", "linguistic anthropology"]
    },
    {
        id: 19,
        name: "Rowan Lewis",
        age: 25,
        major: "Architecture",
        academicLevel: "Graduate",
        interests: ["sustainable design", "urban planning", "architectural history", "parametric design", "structural engineering"]
    },
    {
        id: 20,
        name: "Parker Mitchell",
        age: 42,
        major: "Political Science",
        academicLevel: "Professor",
        interests: ["international relations", "political theory", "public policy", "comparative politics", "political economy"]
    },
    {
        id: 21,
        name: "Ellis Scott",
        age: 28,
        major: "Art History",
        academicLevel: "PhD",
        interests: ["contemporary art", "renaissance painting", "art conservation", "visual culture", "museum studies"]
    },
    {
        id: 22,
        name: "Drew Nguyen",
        age: 26,
        major: "Chemical Engineering",
        academicLevel: "Graduate",
        interests: ["process optimization", "reaction kinetics", "nanotechnology", "sustainable engineering", "catalysis"]
    },
    {
        id: 23,
        name: "Charlie Robinson",
        age: 39,
        major: "Philosophy",
        academicLevel: "Professor",
        interests: ["ethics", "philosophy of mind", "epistemology", "existentialism", "logic"]
    },
    {
        id: 24,
        name: "Frankie Torres",
        age: 22,
        major: "Music",
        academicLevel: "Undergraduate",
        interests: ["composition", "ethnomusicology", "music theory", "digital audio production", "performance practice"]
    },
    {
        id: 25,
        name: "Logan Bennett",
        age: 34,
        major: "Anthropology",
        academicLevel: "Postdoc",
        interests: ["cultural anthropology", "archaeology", "ethnography", "human evolution", "material culture"]
    },
    {
        id: 26,
        name: "Kendall Hayes",
        age: 27,
        major: "Data Science",
        academicLevel: "Graduate",
        interests: ["big data analytics", "predictive modeling", "data visualization", "natural language processing", "statistical learning"]
    },
    {
        id: 27,
        name: "Phoenix Williams",
        age: 44,
        major: "Public Health",
        academicLevel: "Professor",
        interests: ["epidemiology", "health policy", "global health", "biostatistics", "preventive medicine"]
    },
    {
        id: 28,
        name: "Hayden Park",
        age: 23,
        major: "Film Studies",
        academicLevel: "Graduate",
        interests: ["film production", "screenwriting", "documentary filmmaking", "cinema history", "digital media"]
    },
    {
        id: 29,
        name: "Jules Carter",
        age: 29,
        major: "Civil Engineering",
        academicLevel: "PhD",
        interests: ["structural mechanics", "infrastructure design", "earthquake engineering", "sustainable construction", "geotechnical engineering"]
    },
    {
        id: 30,
        name: "Nicky Gomez",
        age: 20,
        major: "Environmental Studies",
        academicLevel: "Undergraduate",
        interests: ["environmental justice", "ecological restoration", "sustainable development", "conservation policy", "urban ecology"]
    },
    {
        id: 31,
        name: "Robin Turner",
        age: 37,
        major: "Statistics",
        academicLevel: "Professor",
        interests: ["bayesian statistics", "experimental design", "computational statistics", "multivariate analysis", "time series analysis"]
    },
    {
        id: 32,
        name: "Reagan Campbell",
        age: 30,
        major: "Astronomy",
        academicLevel: "Postdoc",
        interests: ["exoplanet research", "cosmology", "radio astronomy", "stellar evolution", "space instrumentation"]
    },
    {
        id: 33,
        name: "Rory Collins",
        age: 24,
        major: "Information Systems",
        academicLevel: "Graduate",
        interests: ["database management", "cybersecurity", "cloud computing", "business intelligence", "information architecture"]
    },
    {
        id: 34,
        name: "Sydney Reyes",
        age: 43,
        major: "Law",
        academicLevel: "Professor",
        interests: ["constitutional law", "intellectual property", "international law", "legal theory", "environmental law"]
    },
    {
        id: 35,
        name: "Jesse Stewart",
        age: 21,
        major: "Graphic Design",
        academicLevel: "Undergraduate",
        interests: ["typography", "visual branding", "user experience design", "digital illustration", "motion graphics"]
    },
    {
        id: 36,
        name: "Micah Johnson",
        age: 32,
        major: "Biochemistry",
        academicLevel: "PhD",
        interests: ["protein structure", "enzyme kinetics", "molecular modeling", "drug discovery", "biophysical chemistry"]
    },
    {
        id: 37,
        name: "Shawn Barnes",
        age: 41,
        major: "Urban Planning",
        academicLevel: "Professor",
        interests: ["smart cities", "transportation planning", "housing policy", "sustainable urbanism", "community development"]
    },
    {
        id: 38,
        name: "Kai Hernandez",
        age: 26,
        major: "Mechanical Engineering",
        academicLevel: "Graduate",
        interests: ["fluid dynamics", "thermodynamics", "robotics design", "renewable energy systems", "materials science"]
    },
    {
        id: 39,
        name: "Erin Washington",
        age: 35,
        major: "Communication",
        academicLevel: "Postdoc",
        interests: ["organizational communication", "rhetoric", "interpersonal dynamics", "media studies", "health communication"]
    },
    {
        id: 40,
        name: "Sawyer Evans",
        age: 22,
        major: "Theater",
        academicLevel: "Undergraduate",
        interests: ["directing", "performance theory", "playwriting", "theater history", "stage design"]
    },
    {
        id: 41,
        name: "Addison Lee",
        age: 28,
        major: "Nutrition Science",
        academicLevel: "PhD",
        interests: ["clinical nutrition", "food science", "metabolism", "nutrigenomics", "public health nutrition"]
    },
    {
        id: 42,
        name: "Jordan Foster",
        age: 46,
        major: "Materials Science",
        academicLevel: "Professor",
        interests: ["nanomaterials", "polymer engineering", "crystallography", "electronic materials", "biomaterials"]
    },
    {
        id: 43,
        name: "Peyton Hughes",
        age: 25,
        major: "International Studies",
        academicLevel: "Graduate",
        interests: ["global security", "diplomatic history", "cultural diplomacy", "geopolitics", "development studies"]
    },
    {
        id: 44,
        name: "Dana Cooper",
        age: 33,
        major: "Geology",
        academicLevel: "Postdoc",
        interests: ["geochemistry", "paleoclimatology", "seismology", "hydrology", "structural geology"]
    },
    {
        id: 45,
        name: "London Garcia",
        age: 23,
        major: "Game Design",
        academicLevel: "Graduate",
        interests: ["game mechanics", "interactive narrative", "player psychology", "procedural generation", "virtual reality"]
    },
    {
        id: 46,
        name: "Casey White",
        age: 39,
        major: "Cognitive Science",
        academicLevel: "Professor",
        interests: ["human-computer interaction", "cognitive modeling", "decision theory", "attention research", "language processing"]
    },
    {
        id: 47,
        name: "River Martinez",
        age: 24,
        major: "Agricultural Science",
        academicLevel: "Graduate",
        interests: ["sustainable agriculture", "crop genetics", "soil science", "agricultural economics", "food systems"]
    },
    {
        id: 48,
        name: "Morgan Clark",
        age: 31,
        major: "Religious Studies",
        academicLevel: "PhD",
        interests: ["comparative religion", "religious text analysis", "spirituality in modern society", "religious history", "ethics"]
    },
    {
        id: 49,
        name: "Jaden Walker",
        age: 19,
        major: "Digital Media",
        academicLevel: "Undergraduate",
        interests: ["social media strategy", "content creation", "digital storytelling", "web design", "multimedia journalism"]
    },
    {
        id: 50,
        name: "Avery Ramirez",
        age: 29,
        major: "Forensic Science",
        academicLevel: "Graduate",
        interests: ["forensic psychology", "crime scene analysis", "DNA profiling", "toxicology", "digital forensics"]
    }
];

// DOM elements
const profileSection = document.getElementById('profile-section');
const loadingSection = document.getElementById('loading-section');
const matchesSection = document.getElementById('matches-section');
const userProfileForm = document.getElementById('user-profile-form');
const matchesContainer = document.getElementById('matches-container');
const restartBtn = document.getElementById('restart-btn');

// Global variable for the loaded USE model
let useModel;

// Load Universal Sentence Encoder model when the page loads
window.addEventListener('DOMContentLoaded', async () => {
    try {
        useModel = await use.load();
        console.log('Universal Sentence Encoder model loaded');
    } catch (error) {
        console.error('Error loading Universal Sentence Encoder model:', error);
    }
});

// Event listeners
userProfileForm.addEventListener('submit', handleProfileSubmit);
restartBtn.addEventListener('click', resetApplication);

// Form submission handler
async function handleProfileSubmit(e) {
    e.preventDefault();
    
    // Get user profile data
    const userProfile = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        major: document.getElementById('major').value,
        academicLevel: document.getElementById('academic-level').value,
        interests: document.getElementById('interests').value
            .split(',')
            .map(interest => interest.trim().toLowerCase())
            .filter(interest => interest !== '')
    };

    // Show loading screen
    switchSection(profileSection, loadingSection);
    
    try {
        // Allow more time for AI processing since we're using an actual model
        const matches = await findMatches(userProfile);
        displayMatches(matches);
        switchSection(loadingSection, matchesSection);
    } catch (error) {
        console.error('Error finding matches:', error);
        // Show error message
        loadingSection.innerHTML = `
            <p>Error processing matches: ${error.message}</p>
            <button id="error-restart-btn">Try Again</button>
        `;
        document.getElementById('error-restart-btn').addEventListener('click', resetApplication);
    }
}

// Switch between sections with animation
function switchSection(fromSection, toSection) {
    fromSection.classList.remove('visible');
    setTimeout(() => {
        fromSection.classList.add('hidden');
        toSection.classList.remove('hidden');
        
        // Trigger reflow
        void toSection.offsetWidth;
        
        toSection.classList.add('visible');
    }, 500);
}

// Find matches based on semantic similarity
async function findMatches(userProfile) {
    if (!useModel) {
        // If model failed to load, fall back to simple matching
        console.warn('Universal Sentence Encoder not available, falling back to simple matching');
        return findMatchesSimple(userProfile);
    }
    
    const matchResults = [];
    
    try {
        // Convert user interests to a single text for embedding
        const userInterestsText = userProfile.interests.join(', ');
        
        // Create array of all potential match interest texts
        const matchInterestsTexts = potentialMatches.map(match => match.interests.join(', '));
        
        // Get embeddings for user interests and all potential matches
        const embeddings = await useModel.embed([userInterestsText, ...matchInterestsTexts]);
        
        // Extract user embedding and match embeddings
        const userEmbedding = embeddings.slice([0, 0], [1]).arraySync()[0];
        
        // Calculate similarity scores for each potential match
        for (let i = 0; i < potentialMatches.length; i++) {
            const matchEmbedding = embeddings.slice([i + 1, 0], [1]).arraySync()[0];
            const similarity = calculateCosineSimilarityVectors(userEmbedding, matchEmbedding);
            
            if (similarity > 0) {
                matchResults.push({
                    ...potentialMatches[i],
                    similarityScore: similarity
                });
            }
        }
    } catch (error) {
        console.error('Error generating embeddings:', error);
        // Fall back to simple matching if embedding fails
        return findMatchesSimple(userProfile);
    }
    
    // Sort by similarity score (highest first)
    matchResults.sort((a, b) => b.similarityScore - a.similarityScore);
    
    // Return 1-3 matches
    const numMatches = Math.min(Math.max(matchResults.length, 1), 3);
    return matchResults.slice(0, numMatches);
}

// Fallback simple matching method using direct interest overlap
function findMatchesSimple(userProfile) {
    const matchResults = [];
    
    potentialMatches.forEach(match => {
        const similarity = calculateCosineSimilarityInterests(userProfile.interests, match.interests);
        
        if (similarity > 0) {
            matchResults.push({
                ...match,
                similarityScore: similarity
            });
        }
    });
    
    // Sort by similarity score (highest first)
    matchResults.sort((a, b) => b.similarityScore - a.similarityScore);
    
    // Return 1-3 matches
    const numMatches = Math.min(Math.max(matchResults.length, 1), 3);
    return matchResults.slice(0, numMatches);
}

// Calculate cosine similarity between two arrays of interests (fallback method)
function calculateCosineSimilarityInterests(interestsA, interestsB) {
    // Create combined vocabulary
    const allInterests = new Set([...interestsA, ...interestsB]);
    
    // Create vectors
    const vectorA = Array.from(allInterests).map(interest => interestsA.includes(interest) ? 1 : 0);
    const vectorB = Array.from(allInterests).map(interest => interestsB.includes(interest) ? 1 : 0);
    
    return calculateCosineSimilarityVectors(vectorA, vectorB);
}

// Calculate cosine similarity between two vectors (used for both embedding and fallback)
function calculateCosineSimilarityVectors(vectorA, vectorB) {
    if (vectorA.length !== vectorB.length) {
        throw new Error('Vectors must have the same length');
    }
    
    // Calculate dot product
    let dotProduct = 0;
    let magnitudeA = 0;
    let magnitudeB = 0;
    
    for (let i = 0; i < vectorA.length; i++) {
        dotProduct += vectorA[i] * vectorB[i];
        magnitudeA += vectorA[i] * vectorA[i];
        magnitudeB += vectorB[i] * vectorB[i];
    }
    
    magnitudeA = Math.sqrt(magnitudeA);
    magnitudeB = Math.sqrt(magnitudeB);
    
    // Avoid division by zero
    if (magnitudeA === 0 || magnitudeB === 0) {
        return 0;
    }
    
    return dotProduct / (magnitudeA * magnitudeB);
}

// Display matches in the UI
function displayMatches(matches) {
    matchesContainer.innerHTML = '';
    
    if (matches.length === 0) {
        matchesContainer.innerHTML = '<p>No matches found. Try updating your interests.</p>';
        return;
    }
    
    matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        
        const matchScore = Math.round(match.similarityScore * 100);
        
        matchCard.innerHTML = `
            <div class="match-header">
                <h3>${match.name}</h3>
                <span class="match-score">${matchScore}% Match</span>
            </div>
            <div class="match-details">
                <p><strong>Age:</strong> ${match.age}</p>
                <p><strong>Major:</strong> ${match.major}</p>
                <p><strong>Academic Level:</strong> ${match.academicLevel}</p>
            </div>
            <div>
                <p><strong>Interests:</strong></p>
                <div class="match-interests">
                    ${match.interests.map(interest => `<span class="interest-tag">${interest}</span>`).join('')}
                </div>
            </div>
        `;
        
        matchesContainer.appendChild(matchCard);
    });
}

// Reset the application to the profile creation page
function resetApplication() {
    userProfileForm.reset();
    switchSection(matchesSection, profileSection);
}