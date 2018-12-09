const stage = new Konva.Stage({
    container: 'launchpad',
    width: 1000,
    height: 1000,
});

const layer = new Konva.Layer();

function generateLaunchpadButton(squareWidth, cutWidth, xPos, yPos, xSpacing, ySpacing) {
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

    return new Konva.Line({
        points: pointsDefinition,
        closed: true,
        fill: '#ccc',
        strokeWidth: 0,
    });
};

const gridConfig = {
    buttonSize: 50,
    buttonCutSize: 10,
    rows: 8,
    columns: 8,
    spacing: 10,    
}

for (let row = 1; row < gridConfig.rows + 1; ++row) {
    for (let column = 1; column < gridConfig.columns + 1; ++column) {
        layer.add(generateLaunchpadButton(gridConfig.buttonSize, 
            gridConfig.buttonCutSize, 
            row, column, 
            gridConfig.spacing * row, 
            gridConfig.spacing * column));
    }
}

stage.add(layer);

