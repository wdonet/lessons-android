export const calculateWinner = squares => {
  const lines = [
    [0, 1, 2], // i + 1 twice
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // i + 3 twice
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // i + 4 twice
    [2, 4, 6], // i + 2 twice
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
