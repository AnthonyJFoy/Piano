const pianoKeys = document.querySelectorAll('.key') // assign pianoKeys with key class

// create function to play the sound
function playSound(newUrl) {
    console.log(newUrl)
    new Audio(newUrl).play()
}


pianoKeys.forEach((pianoKey, i) => { 
    const reMap = ['09','11','14','16','18','21','23','02','04','06','08','10','12','13','15','17','19','20','22','24','01','03','05','07'] // create array of numbers matching piano keys
    const newUrl = '24-piano-keys/key' + reMap[i] + '.mp3' // Create string to match file name and assign to newUrl
    pianoKey.addEventListener('click', () => playSound(newUrl)) // listen for click of piano key and play sound associated with key in newUrl
})