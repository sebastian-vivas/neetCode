var topKFrequent = function(nums, k) {
    const freqMap = {};
    for (let num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }
    
    const buckets = Array(nums.length + 1).fill().map(() => []);
    
    for (let num in freqMap) {
        const freq = freqMap[num];
        buckets[freq].push(Number(num));
    }
    
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...buckets[i]);
    }
    
    return result.slice(0, k);
};