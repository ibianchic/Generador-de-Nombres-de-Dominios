let pronoun = ['the', 'our','my', 'his'];
let adj = ['great', 'big','little', 'bad'];
let noun = ['jogger', 'racoon','tiger', 'cat'];
let ext = ['.com', '.cl','.net', '.es'];
let domain = [];
for (let i = 0; i < pronoun.length; i++){
    for (let j = 0; j < adj.length; j++){
        for (let k = 0; k < noun.length; k++){
            for (let l = 0; l < ext.length; l++){
            let gen = pronoun[i] + adj[j] + noun[k] + ext[l];
            domain.push(gen);

        }
        }
}

}

console.log(domain);