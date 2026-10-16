# Bodlák Encoding — poznámky vývojáře

Interní nástroj kóduje citlivé zprávy vlastní variantou Base64 — místo
standardní abecedy používá zpřeházenou verzi. Zdrojový kód nástroje se
ztratil, ale zůstala po něm tahle poznámka s abecedou a jedna zakódovaná
zpráva.

## Standardní Base64 abeceda (pro referenci)
```
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

## Naše upravená (zpřeházená) abeceda
```
Cub2le/3ySMHw0gqxvm6pNkKVt4OBLz85JPhQDsocFE1nd+RiTfa7X9ZAGjWYIUr
```

Znak na pozici N ve standardní abecedě odpovídá znaku na pozici N
v naší abecedě (je to prostě permutace — 1:1 náhrada znak za znak).

## Zakódovaná zpráva k rozlousknutí
```
L/JFBZvntKdPw/vn0/d8VZNaL2udKa0+VauQwkGo8x==
```

## Nápověda k postupu
1. Napiš si (v čemkoliv — Python, JS, i ručně) překladovou tabulku:
   znak ze zpřeházené abecedy → odpovídající znak ze standardní abecedy.
2. Přelož tou tabulkou zakódovanou zprávu zpátky na standardní Base64.
3. Standardní Base64 dekóduj běžným způsobem (`base64 -d`, `atob()` v JS,
   nebo online dekodér).
