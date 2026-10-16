/*
 * ThistleSec — interní build skript, který se omylem dostal do produkčního
 * bundlu. Je záměrně "obfuskovaný" (ztížený k přečtení), ale žádná
 * pokročilá magie v tom není — jen XOR a pole kódů znaků.
 *
 * Úkol: zjisti, co tenhle kód vypíše, aniž bys ho nutně musel spouštět
 * (i když spustit ho v Node.js nebo v konzoli prohlížeče je taky
 * platná cesta — otevři si třeba DevTools na libovolné stránce a vlož
 * to tam).
 */

(function () {
  var _0x9f = [94, 66, 67, 89, 94, 70, 79, 81, 64, 31, 117, 26, 72, 76, 95,
               89, 73, 30, 94, 27, 26, 68, 117, 90, 93, 68, 25, 78, 87];
  var _0xk = 0x2A;

  function _0xd(arr, key) {
    var out = "";
    for (var i = 0; i < arr.length; i++) {
      out += String.fromCharCode(arr[i] ^ key);
    }
    return out;
  }

  var vysledek = _0xd(_0x9f, _0xk);
  console.log(vysledek);
})();
