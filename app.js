let result = document.querySelector(".result");
let player1 = document.querySelector("#p1");
let player2 = document.querySelector("#p2");
let match = document.querySelector(".match");

function ab() {
	console.log("fired");
}

match.addEventListener("click", () => {
	let n1 = Math.ceil(Math.random() * 6);
	player1.setAttribute("src", `images/dice (${n1}).png`);
	let n2 = Math.ceil(Math.random() * 6);
	player2.setAttribute("src", `images/dice (${n2}).png`);
	if (n1 > n2) {
		result.innerHTML = "Player 1 Won";
	} else if (n1 < n2) {
		result.innerHTML = "Player 2 Won";
	} else {
		result.innerHTML = "Drawn";
	}
});
