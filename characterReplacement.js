var characterReplacement = function(s, k) {
    const count = new Map();
    let maxFreq = 0;
    let maxLen = 0;
    let left = 0;
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        count.set(char, (count.get(char) || 0) + 1);
        maxFreq = Math.max(maxFreq, count.get(char));
        
        const windowSize = right - left + 1;
        
        if (windowSize - maxFreq > k) {
            count.set(s[left], count.get(s[left]) - 1);
            left++;
        }
        
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
};