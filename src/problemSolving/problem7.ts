// Define an enum called Color with values representing different colors (e.g., Red, Green, Blue). Create a function that takes a Color value as input and prints out a corresponding message (e.g., "You selected Red").

enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

function printColorMessage(color: Color) {
  switch (color) {
    case Color.Red:
      console.log("You are selected Red");
      break;
    case Color.Green:
      console.log("You are selected Green");
      break;
    case Color.Blue:
      console.log("You are selected Blue");
      break;
    default:
      console.log("unknown color select");
  }
}

const selectedColor = Color.Blue;
printColorMessage(selectedColor);
