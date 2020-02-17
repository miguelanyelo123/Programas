package pi;

import java.util.Scanner;

public class Matetaticas {

    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        int op = 1;
        while (op != 0) {
            System.out.println("/////////////Menu//////////// \n 1. PI \n 2. Seno \n 3. E \n 4. cos \n 0. Salir");
            op = leer.nextInt();
            switch (op) {
                case 1: {
                    PI pi = new PI();
                    pi.EncontrarPI();
                    break;
                }
                case 2: {
                    Seno seno = new Seno();
                    System.out.println("Cuantas repeticiones");
                    int repeticiones = leer.nextInt();
                    System.out.println("Dijite los grados");
                    int grados = leer.nextInt();
                    System.out.println(seno.suma(repeticiones, grados));
                    break;
                }
                case 3: {
                    E e = new E();
                    System.out.println("Cuantas repeticiones");
                    int repeticiones = leer.nextInt();
                    System.out.println("Dijite los grados");
                    int grados = leer.nextInt();
                    System.out.println(e.suma(repeticiones, grados));
                    break;
                }
                case 4: {

                    break;
                }
            }
        }

    }
}
