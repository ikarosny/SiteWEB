function verificar()
{
    
    var n, t, c, p, l;
    n = document.form1.Nome.value;
    t = document.form1.Telefone.value;
    p = document.form1.procedimento.value;
    c = document.form1.CEP.value;
    l = document.form1.Local.value;
    d = document.form1.domicilio.value;
    date = document.form1.data.value;

    
    if (n.length==0)
    {
        alert("Preencha o campo Nome");
        document.form1.Nome.style.background= "#dba3cd";
        document.form1.Nome.focus();

        return false ;
    }

    if (t.length==0 || t.length <9 )
    {
        alert("Verifique o numero Telefone");
        document.form1.Telefone.style.background= "#dba3cd";
        document.form1.Telefone.focus();
        return false ;

    }

    var quant = 0 ;
    if( document.form1.procedimento[0].checked ) {  quant++ ;  }
    if( document.form1.procedimento[1].checked ) {  quant++ ;  }
    if( document.form1.procedimento[2].checked ) {  quant++ ;  }
    if( document.form1.procedimento[3].checked ) {  quant++ ;  }

    if (quant ==0 || quant >=3)
    {
        alert("Escolha ao menos um procedimento. Lembrando que há um limite de dois procedimentos por cliente.");
        
        return false ;
    }

     if (d == "Não")
    {
        document.form1.submit();
        return true;
    }
    if (c.length == 0 || c.length <7)
    {
        alert("É necessário um CEP válido para consulta.");
        document.form1.CEP.style.background = "#dba3cd";
        document.form1.CEP.focus();
        return false;
    }
    if (l.length == 0)
    {
        alert("É necessário que especifique onde será o procedimento.");
        document.form1.Local.style.background = "#dba3cd";
        document.form1.Local.focus();
        return false;
    }


    document.form1.submit();
}
