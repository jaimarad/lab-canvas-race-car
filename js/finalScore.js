class finalScore {
    drawFinalPage(score) {
        ctx.rect(0, 0, 500, 700)
        ctx.fillStyle = 'black'
        ctx.fill()
        ctx.font = '70px Arial'
        ctx.fillStyle = 'red'
        ctx.textAlign = 'center'
        ctx.fillText(`GAME OVER!`, 250, 250)
        ctx.font = '30px Arial'
        ctx.fillStyle = 'white'
        ctx.textAlign = 'center'
        ctx.fillText(`Score: ${score}`, 250, 350)

    }
}