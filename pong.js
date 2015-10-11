function Background() {}

Background.prototype.draw = function(context) {
  var colors = ['#fff','#ffff00','#00ffff','#00ff00','#ff0000','#0000ff','#7920FF','#FD0987','#FF3300','#ff00ff']
  var rand = Math.floor((Math.random()*10)+1)
  context.fillStyle = colors[rand-1]
  //context.fillStyle = '#000'
  context.fillRect(0, 0, game.width, game.height)

  // Print scores
  context.fillStyle = '#fff'
  context.font = "40px monospace"
  context.fillText(game.player.score, game.width * 3 / 8, 50)
  context.fillText(game.bot.score,    game.width * 5 / 8, 50)
}


// Initialize and start the game

var game = new Game($('canvas')[0])

// Load the game entities
game.entities = [
  new Background(),
  game.ball = new Ball(),
  game.player = new Player(),
  game.bot = new Bot()
]

game.start()
$('canvas')[0].focus()
