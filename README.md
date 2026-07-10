# QA-Paystore-Challenge

## API:			
|ID	  |  CENÁRIO              |	PASSOS                                  |	RESULTADO ESPERADO             |
|-----|-----------------------|-----------------------------------------|--------------------------------|
|C-01 |	Criar Pet             | Enviar Post com id, name e status       |	Pet criado, status 200         |
|C-02 |	Buscar Pet existente  | Fazer GET pelo id criado                |	Retornar os dados cadastrados  |
|C-03 |	Buscar Pet            | inexistente	Fazer GET por id inválido   |	Retornar erro 404              |
|C-04 |	Excluir Pet           |	Fazer DELETE do id criado	              | Pet removido                   |
|C-05 |	Buscar após Excluir   |	Fazer GET de novo                       |	Retornar 404                   |
			
## FRONT:	
|ID	  |   CENÁRIO      |	PASSOS           |	RESULTADO ESPERADO             |
|-----|----------------|-------------------|---------------------------------|
|C-06 |	Abrir história |	Entrar na página | Timeline carregada              |
|C-07 |	Clicar em 1997 |	Selecionar ano	 | Texto mostra ano clicado (1997) |
|C-08 |	Clicar em 2005 |	Selecionar ano	 | Texto mostra ano clicado (2005) |
|C-09 |	Clicar em 2022 |	Selecionar ano	 | Texto mostra ano clicado (2022) |

