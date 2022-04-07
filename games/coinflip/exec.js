document.getElementById("toss").addEventListener('click', () => {
    document.getElementById("result").innerHTML = getRandomInt(0,1);
});