function findAnagram(str1, str2){
    let s1 = str1.replace(/\s/g, "").toLowerCase();
    let s2 = str2.replace(/\s/g, "").toLowerCase();

    // console.log(s1);
    // console.log(s2);

    
    if(s1.length !== s2.length) return false;

    let charCount = {};
  // s1 charactor count for s1
    for(let i = 0; i < s1.length; i++){
        let char = s1[i];
        charCount[char] = (charCount[char] || 0) + 1
    }
    // substrack charCount for s2
    // console.log(charCount)
    for(let i = 0; i < s2.length; i++){
        let char = s2[i];
        if(!charCount[char]) return false;
        charCount[char]--;
    }
    return true;
}

console.log(findAnagram("listen", "silent")); // true
