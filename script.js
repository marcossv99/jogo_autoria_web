const sprites = new Image();
sprites.src = "./sprites.png";
const cenario = new Image();
cenario.src = "./cenario.png";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

sprites.onload = function () {
  const personagem = {
    spriteX: -70,
    spriteY: -70,
    largura: 470,
    altura: 470,
    x: 35,
    y: 30,
    largura2: 70,
    altura2: 70,
    desenha() {
      ctx.drawImage(
        sprites,
        personagem.spriteX,
        personagem.spriteY,
        personagem.largura,
        personagem.altura,
        personagem.x,
        personagem.y,
        personagem.largura2,
        personagem.altura2
      );
    },
  };

  cenario.onload = function () {
    const labirinto = {
      spriteX: 20,
      spriteY: -10,
      largura: 1040,
      altura: 1110,
      x: 0,
      y: 0,
      largura2: 820,
      altura2: 770,
      desenha() {
        ctx.drawImage(
          cenario,
          labirinto.spriteX,
          labirinto.spriteY,
          labirinto.largura,
          labirinto.altura,
          labirinto.x,
          labirinto.y,
          labirinto.largura2,
          labirinto.altura2
        );
      },
    };
    function loop() {
      personagem.desenha();
      labirinto.desenha();
      requestAnimationFrame(loop);
    }
    loop();
  };
};
