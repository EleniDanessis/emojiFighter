let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let emoji1 = Math.floor( Math.random() * fighters.length)
    let emoji2 = Math.floor( Math.random() * fighters.length)
    stageEl.textContent = fighters[emoji1] + " vs " + fighters[emoji2]
})