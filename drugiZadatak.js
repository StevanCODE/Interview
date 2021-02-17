const dots = paper => {

    const dots = paper.match(/[a-z]/g).sort();
    const width = paper.indexOf('\n') + 1;
    const positions = dots.map(ch => {
      const p = paper.indexOf(ch);
      const y = Math.floor(p / width);
      const x = p - y*width;
      return [x, y];
    });
    
    const grid = paper.split('\n').map(line => line.split(''));
    
    for (let i = 0; i < positions.length - 1; i++) {
      drawLine(grid, positions[i], positions[i+1]);
    }
    return grid.map(line => line.join('')).join('\n');
  }
  
  const drawLine = (grid, [x1, y1], [x2, y2]) => {
    const dx = Math.sign(x2 - x1);
    const dy = Math.sign(y2 - y1);
    
    let x = x1, y = y1;
    while(x !== x2 || y !== y2) {
      grid[y][x] = '*';
      x += dx;
      y += dy;
    }
    grid[y][x] = '*';
  }

  var inp = 
      "           \n" +
      " a       b \n" +
      " e         \n" +
      "           \n" +      
      " d       c \n" +
      "           \n";

  console.log(dots(inp))