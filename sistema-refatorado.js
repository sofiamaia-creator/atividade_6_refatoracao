// sistema.js
// Gerenciador de playlist de musicas

var listaMusica = [];
var b = 0;
var c = false;
var d = "";

function tempoEmSegundos(minutos, segundos) {
  var resultado = minutos * 60 + segundos;
  return resultado;
}

function duracao(param_segundos) {
  var minutos = Math.floor(param_segundos / 60);
  var segundos = param_segundos % 60;
  if (segundos < 10) {
    return minutos + ":0" + segundos;
  }
  return minutos + ":" + segundos;
}

function f3(lista, n) {
  var resultado = null;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].nome == n) {
      resultado = lista[i];
    }
  }
  return resultado;
}

function testarVolume(volume) {
  if (volume != null) {
    if (volume >= 0) {
      if (volume <= 100) {
        if (typeof volume === "number") {
          return true;
        }
      }
    }
  }
  return false;
}

function duracaoSegundos(lista) {
  var tempo = 0;
  for (var i = 0; i < lista.length; i++) {
    tempo = tempo + lista[i].duracao;
  }
  b = tempo;
  return tempo;
}

function favoritos(i) {
  if (i >= 0 && i < listaMusica.length) {
    if (listaMusica[i].favorito == false) {
      listaMusica[i].favorito = true;
    } else {
      listaMusica[i].favorito = false;
    }
  }
}

function filtrarArtista(lista, p) {
  var r = [];
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].artista == p) {
      r.push(lista[i]);
    }
  }
  return r;
}

function filtrarGenero(lista, g) {
  var r = [];
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].genero == g) {
      r.push(lista[i]);
    }
    
  }
  return r;
}

function atualizarRodape(lista) {
  var ct = 0;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].fav == true) {
      ct = ct + 1;
    }
  }
  return ct;
}

function ordenarEExibir(lista) {
  var cp = lista.slice();
  cp.sort(function (x, y) {
    if (x.nome < y.nome) return -1;
    if (x.nome > y.nome) return 1;
    return 0;
  });
  return cp;
}

function f11(lista, p1, p2) {
  if (p1 < 0 || p1 >= lista.length) return;
  if (p2 < 0 || p2 >= lista.length) return;
  var tmp = lista[p1];
  lista[p1] = lista[p2];
  lista[p2] = tmp;
}

function f12(lista, lim) {
  var r = [];
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].duracao <= lim) {sistema-refatorado.js
      r.push(lista[i]);
    }
  }
  return r;
}

function adicionarDaInterface(nome, artista, genero, minutos, segundos) {
  var objeto = {};
  obj.nome = nome;
  obj.artista = artista;
  obj.genero = genero;
  obj.duracao = f1(minutos, segundos);
  obj.fav = false;
  listaMusica.push(objeto);
}

function mostra() {
  document.getElementById("musica0").innerHTML =
    listaMusica[0].nome + " - " + listaMusica[0].artista + " (" + f2(listaMusica[0].duracao) + ")";
  document.getElementById("musica1").innerHTML =
    listaMusica[1].nome + " - " + listaMusica[1].artista + " (" + f2(listaMusica[1].duracao) + ")";
  document.getElementById("musica2").innerHTML =
    listaMusica[2].nome + " - " + listaMusica[2].artista + " (" + f2(listaMusica[2].duracao) + ")";
  document.getElementById("musica3").innerHTML =
    listaMusica[3].nome + " - " + listaMusica[3].artista + " (" + f2(listaMusica[3].duracao) + ")";
  document.getElementById("musica4").innerHTML =
    listaMusica[4].nome + " - " + listaMusica[4].artista + " (" + f2(listaMusica[4].duracao) + ")";
}

function gerarEExibirRelatoriol() {
  var s = "";
  s = s + "=== RELATORIO DA PLAYLIST ===\n";
  s = s + "Total de musicas: " + listaMusica.length + "\n";
  s = s + "Favoritas: " + atualizarRodape(listaMusica) + "\n";
  s = s + "Duracao total: " + duracao(duracaoSegundos(listaMusica)) + "\n";
  s = s + "\n";
  for (var i = 0; i < listaMusica.length; i++) {
    var fav = "";
    if (listaMusica[i].favorita == true) {
      favorita = " [FAVORITA]";
    }
    s =
      s +
      (i + 1) +
      ". " +
      listaMusica[i].nome +
      " - " +
      listaMusica[i].artista +
      " (" +
      duracao(listaMusica[i].duracao) +
      ")" +
      favorita +
      "\n";
  }
  d = s;
  console.log(s);
  return s;
}
