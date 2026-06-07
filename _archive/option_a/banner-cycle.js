(function () {
  var imgs = [
    'banner_basalt.jpg', 'banner_bloembollen.jpg', 'banner_bolders.jpg',
    'banner_bos.jpg', 'banner_bottles.jpg', 'banner_delta.jpg',
    'banner_fietswielen.jpg', 'banner_gallerij.jpg', 'banner_gevallenboom.jpg',
    'banner_gevlochtenriet.jpg', 'banner_koeien.jpg', 'banner_masten.jpg',
    'banner_narcissen.jpg', 'banner_stammen.jpg', 'banner_varen.jpg',
    'banner_zeelandbrug.jpg', 'banner_zeilen.jpg', 'banner_zweefvliegtuig.jpg'
  ];
  var page = location.pathname.replace(/.*\//, '') || 'index.html';
  var key = 'bi_' + page;
  var i = (+localStorage.getItem(key) || 0) % imgs.length;
  var el = document.querySelector('.page-banner img');
  if (el) el.src = 'banners/' + imgs[i];
  localStorage.setItem(key, i + 1);
  var yrEl = document.querySelector('.copy-year');
  if (yrEl) yrEl.textContent = new Date().getFullYear();
}());
