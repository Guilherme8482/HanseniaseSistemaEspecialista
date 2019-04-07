/**
 *
 * @author Guilherme Rocha
 */
 
import java.io.IOException;

import norsys.netica.NeticaException;

public class Main {
	public static void main(String []args) throws IOException, NeticaException{
		System.out.print(new GerenciadorDeRede(args).avaliar());
	}
}