var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    
    const s1Count = new Array(26).fill(0);
    const windowCount = new Array(26).fill(0);
    
    const getIndex = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);
    
    for (let i = 0; i < s1.length; i++) {
        s1Count[getIndex(s1[i])]++;
        windowCount[getIndex(s2[i])]++;
    }
    
    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] === windowCount[i]) matches++;
    }
    
    for (let right = s1.length; right < s2.length; right++) {
        if (matches === 26) return true;
        
        const rightChar = getIndex(s2[right]);
        windowCount[rightChar]++;
        if (windowCount[rightChar] === s1Count[rightChar]) {
            matches++;
        } else if (windowCount[rightChar] === s1Count[rightChar] + 1) {
            matches--;
        }
        
        const left = right - s1.length;
        const leftChar = getIndex(s2[left]);
        windowCount[leftChar]--;
        if (windowCount[leftChar] === s1Count[leftChar]) {
            matches++;
        } else if (windowCount[leftChar] === s1Count[leftChar] - 1) {
            matches--;
        }
    }
    
    return matches === 26;
};