const Konva = require('konva');
const { KonvaDimensions } = require('./constants');

window.addEventListener('DOMContentLoaded', () => {
    const stage = new Konva.Stage({
        container: '#launchpad',
        ...KonvaDimensions
    });
    
    const layer = new Konva.Layer();
    
    const generateLaunchpadButton = (squareWidth, xPos, yPos, xSpacing, ySpacing) => {
        const cutWidth = squareWidth / 5;

        let pointsDefinition = [
            xSpacing + squareWidth * xPos, ySpacing + squareWidth * yPos,
            xSpacing + squareWidth + squareWidth * xPos, ySpacing + squareWidth * yPos,
            xSpacing + squareWidth + squareWidth * xPos, ySpacing + squareWidth + squareWidth * yPos,
            xSpacing + squareWidth * xPos, ySpacing + squareWidth + squareWidth * yPos
        ];
    
        if (xPos === 3 && yPos === 3) {
            pointsDefinition = [
                xSpacing + squareWidth * xPos, ySpacing + squareWidth * yPos,
                xSpacing + squareWidth + squareWidth * xPos, ySpacing + squareWidth * yPos,
                xSpacing + squareWidth + squareWidth * xPos, ySpacing + (squareWidth + squareWidth * yPos) - cutWidth,
                xSpacing + (squareWidth + squareWidth * xPos) - cutWidth, ySpacing + squareWidth + squareWidth * yPos,
                xSpacing + squareWidth * xPos, ySpacing + squareWidth + squareWidth * yPos
            ];
        }
    
        if (xPos === 4 && yPos === 3) {
            pointsDefinition = [
                xSpacing + squareWidth * xPos, ySpacing + squareWidth * yPos,
                xSpacing + squareWidth + squareWidth * xPos, ySpacing + squareWidth * yPos,
                xSpacing + squareWidth + squareWidth * xPos, ySpacing + (squareWidth + squareWidth * yPos),
                xSpacing + (squareWidth + squareWidth * xPos) - (squareWidth - cutWidth), ySpacing + squareWidth + squareWidth * yPos,
                xSpacing + squareWidth * xPos, ySpacing + squareWidth + squareWidth * yPos - cutWidth
            ];
        }
    
        if (xPos === 3 && yPos === 4) {
            pointsDefinition = [
                xSpacing + squareWidth * xPos, ySpacing + squareWidth * yPos,
                xSpacing + squareWidth + squareWidth * xPos - cutWidth, ySpacing + squareWidth * yPos,
                xSpacing + squareWidth + squareWidth * xPos, ySpacing + (squareWidth + squareWidth * yPos) - (squareWidth - cutWidth),
                xSpacing + (squareWidth + squareWidth * xPos), ySpacing + squareWidth + squareWidth * yPos,
                xSpacing + squareWidth * xPos, ySpacing + squareWidth + squareWidth * yPos
            ];
        }
    
        if (xPos === 4 && yPos === 4) {
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
    
        button.on('mouseover', () => {
            button.fill('#bbb');
            button.draw();
        });
    
        button.on('mouseout', () => {
            button.fill('#ddd');
            button.draw();
        });
    
        button.on('mousedown', () => {
            button.fill('#aaa');
            button.draw();
        });
    
        button.on('mouseup', () => {
            button.fill('#bbb');
            button.draw();
        });
    
        return button;
    };
    
    const gridConfig = {
        buttonSize: 70,
        spacing: 10,
        centered: true
    }

    const getLaunchpadWidth = ({ buttonSize, spacing }) => buttonSize * 8 + spacing * 7;
    const getLaunchpadCenteringOffset = (launchpadWidth) => Math.floor((KonvaDimensions.width - launchpadWidth) / 2);
    
    const gridCenteringOffset = getLaunchpadCenteringOffset(getLaunchpadWidth(gridConfig));
    
    for (let row = 0; row < 8; ++row) {
        for (let column = 0; column < 8; ++column) {

            const launchpadButton = generateLaunchpadButton(
                gridConfig.buttonSize, // square width
                row, // x position
                column, // y position
                gridConfig.centered
                    ? gridConfig.spacing * row + gridCenteringOffset
                    : gridConfig.spacing * row, // x spacing
                gridConfig.centered
                    ? gridConfig.spacing * column + gridCenteringOffset
                    : gridConfig.spacing * column // y spacing
            );

            layer.add(launchpadButton);
        }
    }
    
    stage.add(layer);
});