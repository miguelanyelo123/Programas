package pi;

import java.util.Scanner;

/**
 *
 * @author Miguel Hernandez
 */
public class PI {

    Scanner leer = new Scanner(System.in);
    float contDenominador = 1;
    float signo = 2;
    float PI = 0;
    int Repit = 0;

    void EncontrarPI() {
        System.out.println("Cuantas repeticiones ");
        Repit = leer.nextInt();

        for (int i = 0; i < Repit;
                i++) {

            if (signo % 2 == 0) {

                PI += (1 / contDenominador);
                System.out.println(" + " + "1/" + contDenominador);

                signo++;
                contDenominador += 2;

            } else {
                PI -= (1 / contDenominador);
                System.out.println(" - " + "1/" + contDenominador);

                signo++;
                contDenominador += 2;
            }

        }

        System.out.println(
                "PI = " + PI * 4);
    }
}
