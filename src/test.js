// // Dans votre fichier JavaScript
// const couleurs = {
//     rouge: '#FF0000',
//     vert: '#00FF00',
//     bleu: '#0000FF'
//   };
  
//   // Dans votre feuille de style CSS
//   :root {
//     --rouge: #{couleurs.rouge};
//     --vert: #{couleurs.vert};
//     --bleu: #{couleurs.bleu};
//   }
  
//   .mon-element {
//     background-color: var(--rouge);
//   }

// However, if you want to use JavaScript to generate the CSS value, 
// you should use a preprocessor like Sass or a JavaScript library that
//  allows you to dynamically generate CSS.
React.useEffect(() => {
    let a = true
    document.onscroll = () => {
        if(reactAnimation.current.getBoundingClientRect().bottom - 70 < window.innerHeight && a){
            const counters = [
                {
                    element: document.getElementById('counter-value-1'),
                    targetNumber: experience,
                },
                {
                    element: document.getElementById('counter-value-2'),
                    targetNumber: satisfiedPatient,
                },
                {
                    element: document.getElementById('counter-value-3'),
                    targetNumber: awards,
                }
            ];
            const animationDuration = 2000; // Durée de l'animation (en ms)
            let startTimestamp = null;
        
            function animateCounters(timestamp){
                if(!startTimestamp) startTimestamp = timestamp;
                const progress = timestamp - startTimestamp; // Durée depuis le début de l'animation
                const percentage = Math.min(progress / animationDuration, 1); // Limiter la valeur entre 0 et 1
                const easedPercentage = percentage * percentage * (3 - 2 * percentage); // Fonction ease in out
        
                counters.forEach(counter => {
                    const displayedNumber = Math.round(easedPercentage * counter.targetNumber);
                    counter.element.textContent = displayedNumber + "+";
                })
                if(percentage < 1){
                    requestAnimationFrame(animateCounters);
                }
            }
            requestAnimationFrame(animateCounters)
            a = false
        }
    }
}, [])
