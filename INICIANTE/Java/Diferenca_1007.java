// Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença 
// do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

// Entrada
// O arquivo de entrada contém 4 valores inteiros.

// Saída
// Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, 
// com um espaço em branco antes e depois da igualdade.

import java.io.IOException;
import java.util.Scanner;

public class Diferenca_1007 {
    public static void main(String[] args) throws IOException {
        try(Scanner lerTeclado = new Scanner(System.in)){
            int A, B, C, D, DIFERENCA; 
            A = lerTeclado.nextInt(); 
            B = lerTeclado.nextInt(); 
            C = lerTeclado.nextInt(); 
            D = lerTeclado.nextInt(); 

            DIFERENCA = ((A * B) - (C * D)); 
            System.out.printf("DIFERENCA = %d\n", DIFERENCA);
        }
    }
    
}