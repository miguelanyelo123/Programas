package pi;

/**
 *
 * @author Miguel Hernandez
 */
public class E {

    public static int factorial(int num) {
        if (num == 0) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    }

    public static double division(int n, int x) {
        double radianes = Math.toRadians(x);
        double numerador = Math.pow(radianes, n);

        double denominador = factorial(n);

        return numerador / denominador;
    }

    public double suma(int i, int x) {
        double acum = 0;
        for (int n = 0; n < i; n++) {
            acum += division(n, x);
        }
        return acum;
    }

}
