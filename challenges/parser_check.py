#!/usr/bin/env python3
"""
Interní validační skript ThistleSec — vstupní brána do systému.
Vývojář zapomněl smazat debug verzi před nasazením.

Tvůj úkol: zjisti, jaký vstup projde funkcí over() a vypiš si flag.
Nemusíš skript ani spouštět — dá se to spočítat i ručně/na papíře.
"""

TARGET = [116, 105, 107, 118, 120, 113, 107, 123, 100, 50, 103, 55, 100, 120, 51,
          119, 53, 117, 119, 56, 101, 112, 53, 116, 118, 55, 119, 131]


def transform(s):
    """Každý znak vstupu se posune o (index modulo 7)."""
    out = []
    for i, ch in enumerate(s):
        out.append(ord(ch) + (i % 7))
    return out


def over(vstup):
    return transform(vstup) == TARGET


def main():
    vstup = input("Zadej přístupový kód: ")
    if over(vstup):
        print("Přístup povolen. Flag je přesně tenhle vstup, který jsi právě zadal.")
    else:
        print("Špatně, zkus to znovu.")


if __name__ == "__main__":
    main()
