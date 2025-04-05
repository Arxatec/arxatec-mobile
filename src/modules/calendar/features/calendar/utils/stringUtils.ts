/**
 * Convierte el primer carácter de un texto a mayúscula (camelCase)
 * @param text Texto a convertir
 * @returns El texto con el primer carácter en mayúscula
 */
export const toCamelCase = (text: string): string => {
  if (!text || text.length === 0) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
};
