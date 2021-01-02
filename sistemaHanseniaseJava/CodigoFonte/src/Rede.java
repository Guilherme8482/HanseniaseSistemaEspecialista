/**
 *
 * @author Luis Felipe
 */

import norsys.netica.*;

public class Rede {
        Net net;
        
        //Caracteristicas Gerais
        public Node []nodes = new Node[40];
        Node Gender;
        Node META;
        Node AGE;
        Node YR_FIRST_SYN;
        Node TREATMENT;
        Node CLINICAL_FORM;
        Node ETINIA;
        
        //Historico Familiar
        Node PRIMEIRO_GRAU;
        Node SEGUNDO_GRAU;
        Node CONTATO;
        
        //Exames Clinicos
        Node LESOES;
        Node TIPO_LESAO;
        Node COR_LESAO;
        Node SENSE;
        
        //Exames Laboratoriais
        Node BACILO;
        Node HISTO;
        Node PGL;
        Node RS32D;
        Node RS40D;
        Node RS45D;
        Node RS95D;
        Node RS41;
        Node RS18;
        Node RS95;
        
        //Novos dados Geneticos 05/2017
//        Node RS490;
//        Node RS413;
        Node RS647;
        Node RS786;
        Node RS155;
        Node RS318;
        Node RS709;
        Node RS108;
        Node RS187;
        Node RS791;
        Node RS476;
        Node RS376;
        Node RS388;
//        Node RS602;
//        Node RS606;
        
        boolean valid;
    
    public Rede(String file_rede) throws NeticaException{
        try{
        	Environ env = new Environ ("+BastosL/PUCPR/120,310-4-A/35764");
        }
        catch (Exception e) {
            ////e.printStackTrace();
        }
        initialize(file_rede);     
        
    }
    
    public void initialize(String file_rede) throws NeticaException{                      
        net = new Net (new Streamer (file_rede));
        //Caracteristicas Gerais
        Gender  = net.getNode ("Sexo");
        META  = net.getNode ("Tipo_de_Rea__o");
        AGE  = net.getNode ("Idade");
        YR_FIRST_SYN  = net.getNode ("Primeiros_Sinais_e_Sintomas");
        TREATMENT  = net.getNode ("Forma_de_Tratamento");
        CLINICAL_FORM  = net.getNode ("Forma_Cl_nica"); 
        ETINIA = net.getNode ("Etnia");  
        
        //Historico Familiar
        PRIMEIRO_GRAU  = net.getNode ("Primeiro_Grau");
        SEGUNDO_GRAU  = net.getNode ("Segundo_Grau");
        CONTATO  = net.getNode ("Contato");
        
        //Exames Clinicos
        LESOES  = net.getNode ("N_mero_de_Les_es");
        TIPO_LESAO  = net.getNode ("Tipo_de_Les_o");
        COR_LESAO  = net.getNode ("Cor_da_Les_o");
        SENSE  = net.getNode ("Sensibilidade");
        
        BACILO  = net.getNode ("Indice_Bacilosc_pico");
        HISTO  = net.getNode ("Indice_Histol_gico");
        PGL  = net.getNode ("Intensidade_do_PGL_1_");
        RS32D  = net.getNode ("rs2069832");
        RS40D  = net.getNode ("rs2069840");
        RS45D  = net.getNode ("rs2069845");
        RS95D  = net.getNode ("rs1800795");   
        RS41  = net.getNode ("rs8057341");
        RS18  = net.getNode ("rs5743618");
        RS95  = net.getNode ("rs4833095");
        
        //Novos dados geneticos
//            RS490 = net.getNode ("rs4909863");
//            RS413 = net.getNode ("rs4130173");
        RS647 = net.getNode ("rs6478108");
        RS786 = net.getNode ("rs7863183");
        RS155 = net.getNode ("rs1555457");
        RS318 = net.getNode ("rs3181348");
        RS709 = net.getNode ("rs7090170");
        RS108 = net.getNode ("rs10826321");
        RS187 = net.getNode ("rs1875147");
        RS791 = net.getNode ("rs7916086");
        RS476 = net.getNode ("rs4768236");
        RS376 = net.getNode ("rs3761863");
        RS388 = net.getNode ("rs3886747");
//            RS602 = net.getNode ("rs6020566");
//            RS606 = net.getNode ("rs6067472");
        
        net.compile();
        valid = true;
        
        nodes[0] = Gender;
        nodes[1] = AGE;
        nodes[2] = YR_FIRST_SYN;
        nodes[3] = TREATMENT;
        nodes[4] = CLINICAL_FORM;
        nodes[5] = ETINIA;
        nodes[6] = PRIMEIRO_GRAU;
        nodes[7] = SEGUNDO_GRAU;
        nodes[8] = CONTATO;
        nodes[9] = LESOES;
        nodes[10] = TIPO_LESAO;
        nodes[11] = COR_LESAO;
        nodes[12] = SENSE;
        nodes[13] = BACILO;
        nodes[14] = HISTO;
        nodes[15] = PGL;
        nodes[16] = RS32D;
        nodes[17] = RS40D;
        nodes[18] = RS45D;
        nodes[19] = RS95D;
        nodes[20] = RS41;
        nodes[21] = RS18;
        nodes[22] = RS95;
//            nodes[23] = RS490;
//            nodes[24] = RS413;
        nodes[25] = RS647;
        nodes[26] = RS786;
        nodes[27] = RS155;
        nodes[28] = RS318;
        nodes[29] = RS709;
        nodes[30] = RS108;
        nodes[31] = RS187;
        nodes[32] = RS791;
        nodes[33] = RS476;
        nodes[34] = RS376;
        nodes[35] = RS388;
//            nodes[36] = RS602;
//            nodes[37] = RS606;
    }
    
    void clearNode(int index) throws Exception {
        try {
        	getNode(index).finding().clear();
		} catch (NeticaException e) {
			e.printStackTrace();
		}
    }
    public void setNode(int index, String value){
        try{
        	/*value = value.replace("ç", "_");   
            value = value.replace("ã", "_");
            value = value.replace(" ", "_");
            value = value.replace("ô", "_");
            value = value.replace("á", "_");
            value = value.replace("ó", "_");
            
            value = value.replace("+", "_");*/
        	
            
        	getNode(index).finding().clear();
        	getNode(index).finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    private Node getNode(final int index) throws Exception {
    	Node node = nodes[index];
    	if(node == null) {
    		/*
    		 * Erro geralmente ocorre quando se tenta acessar um node indisponivel na base.
    		 * Consultar o path da base de dadso.
    		 * */
    		throw new Exception("Node não instanciado. Indice: " + index);
    	}
    	return node;
    }
    
    
    public void exit(){
        try{
            net.finalize();
        }
        catch (Exception e) {
            //e.printStackTrace();
        }
    }
    public void clearAll(){
        try{
            Gender.finding().clear();
            META.finding().clear();
            AGE.finding().clear();
            YR_FIRST_SYN.finding().clear();
            ETINIA.finding().clear();
            TREATMENT.finding().clear();
            CLINICAL_FORM.finding().clear();
            
            PRIMEIRO_GRAU.finding().clear();
            SEGUNDO_GRAU.finding().clear();
            CONTATO.finding().clear();
            
            //Exames Clinicos
            LESOES.finding().clear();
            TIPO_LESAO.finding().clear();
            COR_LESAO.finding().clear();
            SENSE.finding().clear();
            
            BACILO.finding().clear();
            HISTO.finding().clear();
            PGL.finding().clear();
            RS32D.finding().clear();
            RS40D.finding().clear();
            RS45D.finding().clear();
            RS95D.finding().clear(); 
            RS41.finding().clear();
            RS18.finding().clear();
            RS95.finding().clear();
            
            //Novos dados geneticos
//            RS490.finding().clear();
//            RS413.finding().clear();
            RS647.finding().clear();
            RS786.finding().clear();
            RS155.finding().clear();
            RS318.finding().clear();
            RS709.finding().clear();
            RS108.finding().clear();
            RS187.finding().clear();
            RS791.finding().clear();
            RS476.finding().clear();
            RS376.finding().clear();
            RS388.finding().clear();
//            RS602.finding().clear();
//            RS606.finding().clear();
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    //META-----------------------------------------------
    public double finding_controle(){        
        try{
            return META.getBelief ("Sem_Rea__o"); 
        }
        catch (Exception e) {            
            e.printStackTrace();
            return 0;
        }
    }
    
    public double finding_enh(){        
        try{
            return META.getBelief ("Rea__o_do_Tipo_2"); 
        }
        catch (Exception e) {            
            e.printStackTrace();
            return 0;
        }
    }
    
    public double finding_rr(){        
        try{
            return META.getBelief ("Rea__o_do_Tipo_1"); 
        }
        catch (Exception e) {            
            e.printStackTrace();
            return 0;
        }
    }
    //CARACTERISTICAS GERAIS-----------------------------------------------
    public void setGender(String value){
        try{
            Gender.finding().clear();
            Gender.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearGender(){
        try{
            Gender.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void setFEtaria(String value){
        try{
            AGE.finding().clear();
            AGE.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    public void clearFEtaria(){
        try{
            AGE.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void setYR_FIRST(String value){
        try{
            YR_FIRST_SYN.finding().clear();
            YR_FIRST_SYN.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    public void clearYR_FIRST(){
        try{
            YR_FIRST_SYN.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void setETNIA(String value){
        try{
            ETINIA.finding().clear();
            ETINIA.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearETNIA(){
        try{
            ETINIA.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void setTREATMENT(String value){
        try{
            TREATMENT.finding().clear();
            TREATMENT.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearTREATMENT(){
        try{
            TREATMENT.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void setFormaClinica(String value){
        try{
            CLINICAL_FORM.finding().clear();
            CLINICAL_FORM.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearFormaClinica(){
        try{
            CLINICAL_FORM.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    //HISTORICO FAMILIAR-----------------------------------------------
    public void setPRIMEIRO_GRAU(String value){
        try{
            PRIMEIRO_GRAU.finding().clear();
            PRIMEIRO_GRAU.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearPRIMEIRO_GRAU(){
        try{
            PRIMEIRO_GRAU.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    public void setSEGUNDO_GRAU(String value){
        try{
            SEGUNDO_GRAU.finding().clear();
            SEGUNDO_GRAU.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearSEGUNDO_GRAU(){
        try{
            SEGUNDO_GRAU.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    public void setCONTATO(String value){
        try{
            CONTATO.finding().clear();
            CONTATO.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearCONTATO(){
        try{
            CONTATO.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    //EXAMES CLINICOS-----------------------------------------------
    public void setLESOES(String value){
        try{
            LESOES.finding().clear();
            LESOES.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearLESOES(){
        try{
            LESOES.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    public void setTIPO_LESAO(String value){
        try{
            TIPO_LESAO.finding().clear();
            TIPO_LESAO.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearTIPO_LESAO(){
        try{
            TIPO_LESAO.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    public void setCOR_LESAO(String value){
        try{
            COR_LESAO.finding().clear();
            COR_LESAO.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearCOR_LESAO(){
        try{
            COR_LESAO.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    public void setSENSE(String value){
        try{
            SENSE.finding().clear();
            SENSE.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearSENSE(){
        try{
            SENSE.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    //EXAMES LABORATORIAIS-----------------------------------------------
    public void setRS32D(String value){
        try{
            RS32D.finding().clear();
            RS32D.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearRS32D(){
        try{
            RS32D.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    public void setRS40D(String value){
        try{
            RS40D.finding().clear();
            RS40D.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearRS40D(){
        try{
            RS40D.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    public void setRS45D(String value){
        try{
            RS45D.finding().clear();
            RS45D.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearRS45D(){
        try{
            RS45D.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    public void setRS95D(String value){
        try{
            RS95D.finding().clear();
            RS95D.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearRS95D(){
        try{
            RS95D.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    public void setRS41(String value){
        try{
            RS41.finding().clear();
            RS41.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearRS41(){
        try{
            RS41.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    public void setRS18(String value){
        try{
            RS18.finding().clear();
            RS18.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearRS18(){
        try{
            RS18.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    public void setRS95(String value){
        try{
            RS95.finding().clear();
            RS95.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearRS95(){
        try{
            RS95.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    public void setBACILO(String value){
        try{
            BACILO.finding().clear();
            BACILO.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearBACILO(){
        try{
            BACILO.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    public void setHISTO(String value){
        try{
            HISTO.finding().clear();
            HISTO.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearHISTO(){
        try{
            HISTO.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    public void setPGL(String value){
        try{
            PGL.finding().clear();
            PGL.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clearPGL(){
        try{
            PGL.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
    
    //NOVOS DADOS GENETICOS    
    public void set_RS490(String value){
        try{
//            RS490.finding().clear();
//            RS490.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clear_RS490(){
        try{
//            RS490.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
     
    public void set_RS413(String value){
        try{
//            RS413.finding().clear();
//            RS413.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clear_RS413(){
        try{
//            RS413.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
     
    public void set_RS647(String value){
        try{
            RS647.finding().clear();
            RS647.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clear_RS647(){
        try{
            RS647.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
     
    public void set_RS786(String value){
        try{
            RS786.finding().clear();
            RS786.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clear_RS786(){
        try{
            RS786.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
     
    public void set_RS155(String value){
        try{
            RS155.finding().clear();
            RS155.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clear_RS155(){
        try{
            RS155.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
     
    public void set_RS318(String value){
        try{
            RS318.finding().clear();
            RS318.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clear_RS318(){
        try{
            RS318.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
     
    public void set_RS709(String value){
        try{
            RS709.finding().clear();
            RS709.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clear_RS709(){
        try{
            RS709.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
     
    public void set_RS108(String value){
        try{
            RS108.finding().clear();
            RS108.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clear_RS108(){
        try{
            RS108.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
     
    public void set_RS187(String value){
        try{
            RS187.finding().clear();
            RS187.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clear_RS187(){
        try{
            RS187.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
     
    public void set_RS791(String value){
        try{
            RS791.finding().clear();
            RS791.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clear_RS791(){
        try{
            RS791.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
     
    public void set_RS476(String value){
        try{
            RS476.finding().clear();
            RS476.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clear_RS476(){
        try{
            RS476.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
     
    public void set_RS376(String value){
        try{
            RS376.finding().clear();
            RS376.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clear_RS376(){
        try{
            RS376.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
     
    public void set_RS388(String value){
        try{
            RS388.finding().clear();
            RS388.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clear_RS388(){
        try{
            RS388.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
     
    public void set_RS602(String value){
        try{
//            RS602.finding().clear();
//            RS602.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clear_RS602(){
        try{
//            RS602.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
     
    public void set_RS606(String value){
        try{
//            RS606.finding().clear();
//            RS606.finding().enterState(value);  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }

    public void clear_RS606(){
        try{
//            RS606.finding().clear();  
        }
        catch (Exception e) {            
            e.printStackTrace();
        }
    }
}
