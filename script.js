let input = document.querySelector("#input");
            // const boutons = document.querySelectorAll("button");
            const boutons = document.querySelectorAll("#keys button:not([id])");
            const pourcentage = document.querySelector("#pourcentage");
            let equal = document.querySelector("#equal");
            let clear = document.querySelector("#clear");
            let sign = document.querySelector("#sign");


            boutons.forEach((bouton) => {
                bouton.addEventListener("click", () => {
                    let valeur = bouton.textContent;
                    //  appendToDisplay(valeur);
                    input.value += valeur;
                    bouton.blur();




                });
            });

            equal.addEventListener("click", () => {
                calculate();
            });

            clear.addEventListener("click", () => {
                clearDisplay();
            });

            pourcentage.addEventListener("click", () => {
                per();
            });

            sign.addEventListener("click", () => {
                changSign();
            });



            function per() {
                input.value = Number(input.value) / 100;
            }
            function changSign() {
                input.value = -Number(input.value);
            }
            function appendToDisplay(val) {
                input.value += val;
            }
            function clearDisplay() {
                input.value = "";

            }


            function calculate() {
                try {

                    input.value = eval(input.value
                        .replaceAll("×", "*")
                        .replaceAll("÷", "/")
                    );


                }
                catch (error) {
                    input.value = "Erreur";
                }

            }

            document.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    calculate();
                }
                else if (e.key === "Backspace") {
                    input.value = input.value.slice(0, -1);

                }
            });
