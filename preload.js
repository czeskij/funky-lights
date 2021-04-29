const Konva = require('konva');

window.addEventListener('DOMContentLoaded', () => {
    const stage = new Konva.Stage({
        container: '#launchpad',
        width: 1000,
        height: 1000,
    });
    
    const layer = new Konva.Layer();
    
    function generateLaunchpadButton(squareWidth, xPos, yPos, xSpacing, ySpacing) {
        const cutWidth = squareWidth / 5;
        let pointsDefinition = [
            xSpacing + squareWidth * xPos, ySpacing + squareWidth * yPos,
            xSpacing + squareWidth + squareWidth * xPos, ySpacing + squareWidth * yPos,
            xSpacing + squareWidth + squareWidth * xPos, ySpacing + squareWidth + squareWidth * yPos,
            xSpacing + squareWidth * xPos, ySpacing + squareWidth + squareWidth * yPos
        ];
    
        if (xPos === 4 && yPos === 4) {
            pointsDefinition = [
                xSpacing + squareWidth * xPos, ySpacing + squareWidth * yPos,
                xSpacing + squareWidth + squareWidth * xPos, ySpacing + squareWidth * yPos,
                xSpacing + squareWidth + squareWidth * xPos, ySpacing + (squareWidth + squareWidth * yPos) - cutWidth,
                xSpacing + (squareWidth + squareWidth * xPos) - cutWidth, ySpacing + squareWidth + squareWidth * yPos,
                xSpacing + squareWidth * xPos, ySpacing + squareWidth + squareWidth * yPos
            ];
        }
    
        if (xPos === 5 && yPos === 4) {
            pointsDefinition = [
                xSpacing + squareWidth * xPos, ySpacing + squareWidth * yPos,
                xSpacing + squareWidth + squareWidth * xPos, ySpacing + squareWidth * yPos,
                xSpacing + squareWidth + squareWidth * xPos, ySpacing + (squareWidth + squareWidth * yPos),
                xSpacing + (squareWidth + squareWidth * xPos) - (squareWidth - cutWidth), ySpacing + squareWidth + squareWidth * yPos,
                xSpacing + squareWidth * xPos, ySpacing + squareWidth + squareWidth * yPos - cutWidth
            ];
        }
    
        if (xPos === 4 && yPos === 5) {
            pointsDefinition = [
                xSpacing + squareWidth * xPos, ySpacing + squareWidth * yPos,
                xSpacing + squareWidth + squareWidth * xPos - cutWidth, ySpacing + squareWidth * yPos,
                xSpacing + squareWidth + squareWidth * xPos, ySpacing + (squareWidth + squareWidth * yPos) - (squareWidth - cutWidth),
                xSpacing + (squareWidth + squareWidth * xPos), ySpacing + squareWidth + squareWidth * yPos,
                xSpacing + squareWidth * xPos, ySpacing + squareWidth + squareWidth * yPos
            ];
        }
    
        if (xPos === 5 && yPos === 5) {
            pointsDefinition = [
                xSpacing + squareWidth * xPos + cutWidth, ySpacing + squareWidth * yPos,
                xSpacing + squareWidth + squareWidth * xPos, ySpacing + squareWidth * yPos,
                xSpacing + squareWidth + squareWidth * xPos, ySpacing + (squareWidth + squareWidth * yPos),
                xSpacing + (squareWidth + squareWidth * xPos), ySpacing + squareWidth + squareWidth * yPos,
                xSpacing + squareWidth * xPos, ySpacing + squareWidth + squareWidth * yPos,
                xSpacing + squareWidth * xPos, ySpacing + squareWidth + squareWidth * yPos - (squareWidth - cutWidth)
            ];
        }
    
        let button = new Konva.Line({
            points: pointsDefinition,
            closed: true,
            fill: '#ddd',
            strokeWidth: 0,
        });
    
        button.on('mouseover', function () {
            button.fill('#bbb');
            button.draw();
        });
    
        button.on('mouseout', function () {
            button.fill('#ddd');
            button.draw();
        });
    
        button.on('mousedown', function () {
            button.fill('#aaa');
            button.draw();
        });
    
        button.on('mouseup', function () {
            button.fill('#bbb');
            button.draw();
        });
    
        return button;
    };
    
    const gridConfig = {
        buttonSize: 70,
        spacing: 10,    
    }
    
    for (let row = 1; row < 8 + 1; ++row) {
        for (let column = 1; column < 8 + 1; ++column) {
            layer.add(generateLaunchpadButton(gridConfig.buttonSize, 
                row, column, 
                gridConfig.spacing * row, 
                gridConfig.spacing * column));
        }
    }
    
    stage.add(layer);
});