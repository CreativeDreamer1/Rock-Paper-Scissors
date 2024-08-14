document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.querySelectorAll('input[type=image]');

    userInput.forEach(choice => {
        choice.addEventListener('click', () => {
            
            const playerChoice = choice.dataset.val;
            const displayCompHand = document.querySelector('.item9');
            const displayPlayerHand = document.querySelector('.item8');
            const playerHand = document.createElement('img');
            const compHand = document.createElement('img');
            const compChoice = Math.random();
            const resultArea = document.querySelector('.item10');
            const result = document.createElement('h2')
            
            if (playerChoice <= 1/3) {

                playerHand.src = 'images/rock.png';
                if (compChoice <= 1/3) {
                    compHand.src = 'images/rock.png';
                    result.innerHTML = "Draw!";
                    result.style.color = '#e8e8e8';
                } else if ((compChoice > 1/3) && (compChoice <=2/3)) {
                    compHand.src = 'images/paper.png';
                    result.innerHTML = 'You Lose!';
                    result.style.color = '#d57d7d';
                } else {
                    compHand.src = 'images/scissors.png';
                    result.innerHTML = 'You Win!';
                    result.style.color = '#7cd886';
                };

            } else if ((playerChoice > 1/3) && (playerChoice <=2/3)) {

                playerHand.src = 'images/paper.png';
                if (compChoice <= 1/3) {
                    compHand.src = 'images/rock.png';
                    result.innerHTML = 'You Win!';
                    result.style.color = '#7cd886';
                } else if ((compChoice > 1/3) && (compChoice <=2/3)) {
                    compHand.src = 'images/paper.png';
                    result.innerHTML = 'Draw!';
                    result.style.color = '#e8e8e8';
                } else {
                    compHand.src = 'images/scissors.png';
                    result.innerHTML = 'You Lose!';
                    result.style.color = '#d57d7d';
                };

            } else {

                playerHand.src = 'images/scissors.png';
                if (compChoice <= 1/3) {
                    compHand.src = 'images/rock.png';
                    result.innerHTML = 'You Lose!';
                    result.style.color = '#d57d7d';
                } else if ((compChoice > 1/3) && (compChoice <=2/3)) {
                    compHand.src = 'images/paper.png';
                    result.innerHTML = 'You Win!';
                    result.style.color = '#7cd886';
                } else {
                    compHand.src = 'images/scissors.png';
                    result.innerHTML = "Draw!";
                    result.style.color = '#e8e8e8';
                };

            };

            playerHand.style.width = '150px';
            playerHand.style.height = '150px';
            displayPlayerHand.appendChild(playerHand);

            compHand.style.width = '150px';
            compHand.style.height = '150px';
            compHand.style.transform = 'scaleX(-1)';
            displayCompHand.appendChild(compHand);

            resultArea.appendChild(result);

            setInterval(() => {
                result.innerHTML += '.'
            }, 500)

            setTimeout(() => {
                playerHand.remove();
                compHand.remove();
                result.remove();
            }, 2000);
        });
    });

});
