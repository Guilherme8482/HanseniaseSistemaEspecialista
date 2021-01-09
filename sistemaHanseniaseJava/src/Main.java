import java.io.IOException;

import norsys.netica.NeticaException;

public class Main {
	public static void main(String[] args) {		
		// Teste base:
		// args = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 0 0 0 0 0 0 0 0 0 -1 -1 4".split(" ");
		System.out.print(new GerenciadorDeRede(args).avaliar());
	}
}