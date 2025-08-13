export function applyMask(value: string, mask: string): string {
  let maskedValue = "";
  let rawIndex = 0;
  const rawValue = value.replace(/\D/g, "");

  const maskLength = mask.split("_").length - 1;

  if (rawValue.length < maskLength) {
    return rawValue;
  }

  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === "_") {
      if (rawIndex < rawValue.length) {
        maskedValue += rawValue[rawIndex];
        rawIndex++;
      } else {
        break;
      }
    } else {
      maskedValue += mask[i];
    }
  }

  return maskedValue;
}
