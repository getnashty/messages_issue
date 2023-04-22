/**
 * This util will replace the spaces in the last part of the string with
 * nbsp;'s and this will prevent those words from being orphaned
 *
 * @param line - the string to prettify
 * @param percentage - the amount of string to replace spaces
 * @param lineLength - the avg line length incase multiple breaks are needed
 *
 * @returns - a string
 */
export function prettyLineBreak(
  line: string,
  percentage = 0.6,
  lineLength: number
): string {
  const lines = line.length / lineLength;
  if (lines > 2) {
    const startLength = line.length - lineLength;
    const centerIndex = lineLength * percentage + startLength;
    const start = line.slice(0, centerIndex);
    const end = line.slice(centerIndex).replace(/ /g, "\u00a0");
    return start + end;
  } else {
    const centerIndex = line.length * percentage;
    const start = line.slice(0, centerIndex);
    const end = line.slice(centerIndex).replace(/ /g, "\u00a0");
    return start + end;
  }
}

// This util will return a string with the first letter capitalized
export function capitalize(text = "") {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
