function toggleAdminSection() {
    const adminSection = document.getElementById("adminSection");
    const adminToggle = document.getElementById("adminToggle");

    if (adminSection.style.display === "none") {
        adminSection.style.display = "block";
        adminToggle.textContent = "Hide Admin Section";
    } else {
        adminSection.style.display = "none";
        adminToggle.textContent = "Admin use only";
    }
}

function formatJapaneseRegex(word, pronunciation, definition, type) {
    // Helper function to split word and handle base pattern
    const getBasePattern = (word, endingPattern = '') => {
        return word.split('').map(char => `(${char})(?!X)`).join('') + endingPattern;
    };

    // Updated helper function to generate the replacement string
    const getReplacement = (word, pronunciation, definition, typeSuffix, requiresAdditionalX) => {
        const baseReplacement = word.split('').map((char, index) => 
            ` $${index + 1}X(${pronunciation.split(/\s+/)[index] || ''})`
        ).join('');
        return requiresAdditionalX
            ? `${baseReplacement} ${definition} ;${typeSuffix}$${word.length + 1}` 
            : `${baseReplacement} ${definition} ;${typeSuffix}`; // Skip $X for exceptions
    };

    let endingPattern;
    let typeSuffix;
    let requiresAdditionalX = true;

    switch (type) {
        case "RuVerb":
            endingPattern = `([らりるれろっ])(?!X)`;
            typeSuffix = "RuVerb;Par";
            break;
        case "SuVerb":
            endingPattern = `([さしすせそ])(?!X)`;
            typeSuffix = "SuVerb;Par";
            break;
        case "IAdjective":
            endingPattern = `([いくかさ])(?!X)`;
            typeSuffix = "IAdjective;Par";
            break;
        case "KuVerb":
            endingPattern = `([かきくけこい])(?!X)`;
            typeSuffix = "KuVerb;Par";
            break;
        case "GuVerb":
            endingPattern = `([がぎぐげごい])(?!X)`;
            typeSuffix = "GuVerb;Par";
            break;			
        case "BuVerb":
            endingPattern = `([ばびぶべぼん])(?!X)`;
            typeSuffix = "BuVerb;Par";
            break;
        case "MuVerb":
            endingPattern = `([まみむめもん])(?!X)`;
            typeSuffix = "MuVerb;Par";
            break;
        case "NuVerb":
            endingPattern = `([なにぬねのん])(?!X)`;
            typeSuffix = "NuVerb;Par";
            break;
        case "TsuVerb":
            endingPattern = `([たちつてとっ])(?!X)`;
            typeSuffix = "TsuVerb;Par";
            break;
        case "UVerb":
            endingPattern = `([わいうえおっ])(?!X)`;
            typeSuffix = "UVerb;Par";
            break;			
        case "IchidanVerb":
            endingPattern = ''; // No specific ending for Ichidan verbs
            typeSuffix = "IchidanVerb;Par";
            requiresAdditionalX = false; // Exception: No $X for Ichidan verbs
            break;
        default:
            endingPattern = ''; // Non-verbs
            typeSuffix = "Par";
            requiresAdditionalX = false; // Exception: No $X for Non-verbs
            break;
    }

    // Generate the regex pattern and replacement string
    const regexPattern = getBasePattern(word, endingPattern);
    const replacement = getReplacement(word, pronunciation, definition, typeSuffix, requiresAdditionalX);

    return `{p1:/${regexPattern}/g , r1:'${replacement} '},`;
}

function formatAndDisplay() {
    const inputWord = document.getElementById("wordInput").value;
    const inputPronunciation = document.getElementById("pronunciationInput").value;
    const inputDefinition = document.getElementById("definitionInput").value;
    const selectedType = document.getElementById("typeSelector").value; 
    const output = formatJapaneseRegex(inputWord, inputPronunciation, inputDefinition, selectedType);
    document.getElementById("output").innerText = output;
}

function copyToClipboard() {
    const outputText = document.getElementById("output").innerText;
    if (outputText) {
        navigator.clipboard.writeText(outputText).then(() => {
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    } else {
        alert("Nothing to copy!");
    }
}