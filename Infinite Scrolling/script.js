var listElm = document.querySelector('#masai-list');

// Add 20 items.
var nextItem = 1;
var loadMore = function() {
  for (var i = 0; i < 25; i++) {
    var item = document.createElement('li');
    item.innerText = 'Masai School ' + nextItem++;
    listElm.appendChild(item);
  }
}

// Detect when scrolled to bottom.
listElm.addEventListener('scroll', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    
    setTimeout(() =>{
        loadMore()
    },800);
  }
});

// Initially load some items.
loadMore();