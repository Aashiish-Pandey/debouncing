const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

const searchState = async (searchText) => {
  const res = await fetch("./data/states.json");
  const states = await res.json();

  //get matches to current text input

  let matches = states.filter((state) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return state.name.match(regex) || state.abbr.match(regex);
    if (searchText.length == 0) {
      matches = [];
    }
  });

  let html = outputHtml(matches);
  matchList.innerHTML = html;
};

const outputHtml = (matches) => {
  if (matches.length > 0) {
    const html = matches
      .map(
        (match) => `


        <div>

        <h3>
        ${match.name} ${match.abbr}

        <div>${match.capital}</div>

        <small>Lat: ${match.lat}/ Lang: ${match.long}</small> </h3>


        
        </div>
        
        
        `
      )
      .join("");
    return html;
  }
};
search.addEventListener("input", () => searchState(search.value));
