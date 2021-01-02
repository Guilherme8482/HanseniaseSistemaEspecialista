
/**
 *
 * @author Guilherme Rocha
 */

import java.io.IOException;

import norsys.netica.NeticaException;

public class Main {
	public static void main(String[] args) {
		/**
		 * Teste neutro:
		 * args = new String[]{"-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "4"};
		 */
		System.out.print(new GerenciadorDeRede(args).avaliar());
	}
}