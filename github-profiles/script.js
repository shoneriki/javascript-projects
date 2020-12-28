const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("shoneriki");

async function getUser(user) {
  const resp = await fetch(APIURL + user)
  const respData = await resp.json();


  createUserCard(respData);

}

function createUserCard(user) {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" />
    </div>
  `
}
