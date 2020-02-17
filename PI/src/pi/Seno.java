package pi;

/**
 *
 * @author Miguel Hernandez
 */
public class Seno {

    public int factorial(int numero) {
        if (numero == 0) {
            return 1;
        } else {
            return numero * factorial(numero - 1);
        }
    }

    public double Seno(int repeticiones, int grados) {

        double numerador = Math.pow(-1.0, (double) repeticiones);
        int fact = (2 * repeticiones) + 1;
        double denominador = (double) factorial(fact);
        double division = numerador / denominador;
        double radianes = Math.toRadians((double) grados);
        double resp = Math.pow(radianes, (double) fact);
        return division * resp;
    }

    public double suma(int repeticiones, int grados) {
        double acum = 0;
        for (int n = 0; n < repeticiones; n++) {
            acum += Seno(n, grados);
        }

        return acum;
    }
}
