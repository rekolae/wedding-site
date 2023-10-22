// List of entries in navbar
export const navData: Array<Array<String | Boolean | null>> = [
  // [Nav text, id, href, show when authenticated (null if show always)]
  ["Koti", "home", "/", null],
  ["Ruokalista", "menu", "/menu", true],
  ["Ohjelma", "programme", "/ohjelma", true],
  //["Galleria", "gallery", "/galleria", true],
  ["Saapumisohjeet", "arrival", "/saapuminen", true],
  ["Muistaminen", "gifts", "/muistaminen", true],
  ["Kirjaudu", "login", "/kirjaudu", false]
];
