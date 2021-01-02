/**
 *
 * @author Guilherme Rocha
 */

import java.io.*;
import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.Stream;

import org.json.*;

import norsys.netica.NeticaException;


public class GerenciadorDeRede {
	String errorMsg = null;
	Rede rede;
	String[][] dicionario;
	
	GerenciadorDeRede(String []params) throws IOException, NeticaException{
		try {
			int[] parametros = Arrays.asList(params).stream().mapToInt(Integer::parseInt).toArray();
			carregarDicionario();
			if(parametros.length != dicionario.length) { 
				throw new Exception("Parametros inadequados. Esperado: " + dicionario.length + "  Recebido: " + parametros.length);
			}			
			String[] pathDasBases = dicionario[dicionario.length - 1];
			if(parametros[parametros.length - 1] >= pathDasBases.length) {
				throw new Exception("Parametros inadequados");
			}			
			rede = new Rede(pathDasBases[parametros[parametros.length - 1]]);
			atualizarRede(parametros);
		}
		catch(Exception e) {
			errorMsg = "[GerenciadorDeRede()] " + e.getMessage();
		}
	}
	private String readFile(String arquivo) throws FileNotFoundException {
	    Scanner scanner = new Scanner(new File(arquivo));
	    scanner.useDelimiter("\\Z");
	    return scanner.next();
	}
	private void carregarDicionario() {
		try {
			String a = readFile("Data Files/dicionarioDeVariaveis.json");
			JSONObject obj = new JSONObject(a);
			JSONArray arrI = obj.getJSONArray("dicionario"), arrJ;
			dicionario = new String[arrI.length()][];
			for(int i = 0; i < arrI.length(); i++) {
				arrJ = arrI.getJSONArray(i);
				dicionario[i] = new String[arrJ.length()];
				for(int j = 0; j < arrJ.length(); j++) {
					dicionario[i][j] = arrJ.getString(j);
				}
			}
		}
		catch(Exception e) {
			errorMsg = "[carregarDicionario()] " + e.getMessage();
		}
		
	}
	private void atualizarRede(int []parametros){
		try {
			if(errorMsg != null) return;
			for(int i = 0; i < parametros.length - 1; ++i) {
				/* Pular variaveis excluidas*/
				if(dicionario[i].length == 0) continue;
				if(parametros[i] == 0) {
					rede.clearNode(i);
				}
				else if(parametros[i] >= dicionario[i].length) {
					throw new Exception("Parametro indisponivel. Esperado: <" + dicionario[i].length + "  Recebido" + parametros[i]);
				}
				else if(parametros[i] > 0){
					rede.setNode(i, dicionario[i][parametros[i]]);
				}
				//-1 nada a fazer
			}
			
		}
		catch(Exception e) {
			errorMsg = "[atualizarRede()] " + e.getMessage();
		}
		
	}
	public String avaliar() {
		if(errorMsg != null)
			return "{\"error\":true, \"errorMsg\":\"" + errorMsg  + "\"}";
        return "{\"sr\":" + (rede.finding_controle()*100) + 
        		", \"r1\":" + (rede.finding_rr()*100) + 
        		", \"r2\":" + (rede.finding_enh()*100) + "}";
	}
}
