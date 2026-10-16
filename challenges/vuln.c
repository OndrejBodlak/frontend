#include <stdio.h>
#include <string.h>

void shell() {
    printf("Přístup povolen. Flag: thistle{st4ck_sm4sh3d}\n");
}

void vuln() {
    char buffer[64];
    printf("Zadej heslo pro pristup ke stonku: ");
    gets(buffer); // Zde je zranitelnost - buffer overflow pres funkci gets()!
}

int main() {
    vuln();
    return 0;
}
