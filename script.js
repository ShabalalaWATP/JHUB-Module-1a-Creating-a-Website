// Function to filter news by continent
function filterNews() {
  var continent = document.getElementById('continent-select').value;
  var newsItems = document.querySelectorAll('.news-item');

  newsItems.forEach(function(item) {
    if (continent === 'all' || item.classList.contains(continent)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
