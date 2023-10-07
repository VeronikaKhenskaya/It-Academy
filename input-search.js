 document.addEventListener('click', function hideLastSearches(event) {
            const inputDiv = document.querySelector(".inputSearchList");
            const inputField = document.querySelector(".inputData");
            if (!inputDiv.contains(event.target) && !inputField.contains(event.target)) {
                inputDiv.replaceChildren();
                inputDiv.style.display = "none";
            }
        })

        function showLastSearches() {
            let lastSearches = JSON.parse(localStorage.getItem('storageArray'));
            let inputDiv = document.querySelector(".inputSearchList");
            let list = document.createElement('div');
            list.className = "list-container";
            inputDiv.replaceChildren(list);
            for (let i = 0; i < lastSearches.length; i++) {
                let li = document.createElement('div');
                li.className = "last-searches-container";
                let lastinput = list.appendChild(li);
                lastinput.textContent = `${lastSearches[i]}`;
                //создание div с крестиком
                let x = document.createElement('div');
                x.className = "cross"
                x.textContent = 'x'
                li.appendChild(x);
            };
            inputDiv.style.display = "block";
            changeColorOfSearchesList();

            //сделать отдельной функцией
            let arrayOfInputValues = Array.from(list.children);
            for (let i = 0; i < arrayOfInputValues.length; i++) {
                arrayOfInputValues[i].addEventListener('click', function () {
                    document.querySelector(".inputData").value = event.target.textContent;
                    
                    list.style.display = "none";
                })
            }
        }

        function createCrossInDiv() {

        }

        function inputSearch() {
            let list = document.querySelector(".inputSearchList");
            list.style.display = "block";
            let inputData = document.querySelector(".inputData").value;
            //findWeatherData(inputData);
            let stored = localStorage.getItem('storageArray');
            let lastSearches;
            if (stored === null) {
                lastSearches = []
            } else {
                lastSearches = JSON.parse(stored);
            }
            if (lastSearches.length >= 10) {
                lastSearches.shift();
            }
            //arr.push => arr.unshift
            lastSearches.unshift(document.querySelector(".inputData").value);
            localStorage.setItem('storageArray', JSON.stringify(lastSearches));
        }

        function bindEnterKey() {
            document.querySelector(".inputData").addEventListener('keydown', function (enter) {
                if (enter.key === "Enter") {
                    inputSearch();
                    document.querySelector(".inputSearchList").style.display = "none";
                }
            });
        };
        bindEnterKey();

        function changeColorOfSearchesList() {
            let listOfSearches = document.getElementsByTagName('div');
            let arrayOfSearches = Array.from(listOfSearches);
            for (i = 0; i < arrayOfSearches.length; i++) {
                arrayOfSearches[i].onmouseover = arrayOfSearches[i].onmouseout = handler;
                function handler(event) {
                    if (event.type == "mouseover") {
                        event.target.style.background = "grey";
                        document.querySelector(".cross").style.display = "block";
                    }
                    if (event.type == "mouseout") {
                        event.target.style.background = "white";
                    }
                }
            }
        }