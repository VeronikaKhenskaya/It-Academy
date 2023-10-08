//перезаписывает данные поиска при клике на странице
document.addEventListener('click', function hideLastSearches(event) {
    const inputDiv = document.querySelector(".inputSearchList");
    const inputField = document.querySelector(".inputData");
    if (!inputDiv.contains(event.target) && !inputField.contains(event.target)) {
        inputDiv.replaceChildren();
        inputDiv.style.display = "none";
    }
})
//создает элементы поиска, удаляет элемент из поиска, отображает элементы поиска
function showLastSearches() {
    let inputDiv = document.querySelector(".inputSearchList");
    let lastSearches = getLastStoredSearches();
    if (lastSearches.length === 0) {
        inputDiv.style.display = "none";
    } else {
        inputDiv.style.display = "block";
    }
    let list = document.createElement('div');
    list.className = "list-container";
    inputDiv.replaceChildren(list);
    for (let i = 0; i < lastSearches.length; i++) {
        let previousSearchContainer = list.appendChild(document.createElement('div'));
        previousSearchContainer.className = "previous-search-container";
        let searchText = previousSearchContainer.appendChild(document.createElement('div'));
        searchText.className = "search-text";
        searchText.textContent = `${lastSearches[i]}`;
        searchText.addEventListener('click', function (event) {
            if (!event.target.classList.contains('delete-search')) {
                document.querySelector(".inputData").value = event.target.textContent;
                inputDiv.style.display = "none";
            }
        })
        previousSearchContainer.addEventListener('click', function (event) {
            if (!event.target.classList.contains('delete-search')) {
                document.querySelector(".inputData").value = searchText.textContent;
                inputDiv.style.display = "none";
            }
        })
        let deleteSearch = previousSearchContainer.appendChild(document.createElement('div'));
        deleteSearch.className = "delete-search";
        deleteSearch.textContent = 'x';
        previousSearchContainer.onmouseover = previousSearchContainer.onmouseout = handler;
        function handler(event) {
            if (event.type == "mouseover") {
                deleteSearch.style.display = "block";
            }
            if (event.type == "mouseout") {
                deleteSearch.style.display = "none";
            }
        }
        deleteSearch.addEventListener('click', function () {
            if (document.querySelector(".inputData").value === searchText.textContent) {
                document.querySelector(".inputData").value = "";
            }
            previousSearchContainer.remove();
            lastSearches.splice(i, 1);
            localStorage.setItem('storageArray', JSON.stringify(lastSearches));
        })
    };
}