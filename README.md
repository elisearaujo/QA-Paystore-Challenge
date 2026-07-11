# QA-Paystore-Challenge

## API:			
|ID	  |  CENÁRIO                |	PASSOS                                |	RESULTADO ESPERADO             |
|-----|-------------------------|-----------------------------------------|--------------------------------|
|C-01 |	Criar Pet               | Enviar Post com id, name e status       |	Pet criado, status 200         |
|C-02 |	Buscar Pet existente    | Fazer GET pelo id criado                |	Retornar os dados cadastrados  |
|C-03 |	Buscar Pet inexistente  | 	Fazer GET por id inválido             |	Retornar erro 404              |
|C-04 |	Excluir Pet             |	Fazer DELETE do id criado	          | Pet removido                   |

			
## FRONT:	
|ID	  |   CENÁRIO      |	PASSOS           |	RESULTADO ESPERADO             |
|-----|----------------|-------------------|---------------------------------|
|C-05 |	Abrir história |	Entrar na página | Timeline carregada              |
|C-06 |	Clicar em 1997 |	Selecionar ano	 | Texto mostra ano clicado (1997) |
|C-07 |	Clicar em 2005 |	Selecionar ano	 | Texto mostra ano clicado (2005) |
|C-08 |	Clicar em 2022 |	Selecionar ano	 | Texto mostra ano clicado (2022) |


# API Postman Link Compartilhamento:
https://www.postman.com/elisearaujoc-9895957/teste-qa-automacao/collection/56545857-1fb6439c-0d0a-44e4-8b7d-6bc2268324ea?action=share&source=copy-link&creator=56545857

# API Automação Collection Runner:
https://elisearaujoc-9895957.postman.co/teste-qa-automacao/run/56545857-6e892eb1-9828-4de7-812b-7e9375964712/entity?action=share&creator=56545857

-------------------------------------------

# API:
Nos arquivos você pode encontrar "Requests_Pet.postman_collection.json", o arquivo .json gerado do Postman sobre os Requests feitos no primeiro desafio.

-------------------------------------------
# Site Phoebus:
Nos arquivos também pode se encontrar o .spec.js com o código JS da automação feita com Playwright (pode ser encontrado na pasta tests). Estão nos arquivos também as screenshots (pasta screenshots) tiradas na automação, mas pode ser analizado o relatório que mostra os prints anexados. 

No terminal: $ npx playwright test 
roda o arquivo historia.spec.js

$ npx playwright show-report
executa o relatório

<img width="788" height="837" alt="image" src="https://github.com/user-attachments/assets/5a260c35-248f-4aa7-9252-82bc2da3719e" />

<img width="737" height="523" alt="image" src="https://github.com/user-attachments/assets/42b9b4e6-d31a-4cc2-887e-ece87637e180" />
<img width="698" height="458" alt="image" src="https://github.com/user-attachments/assets/32c94ec9-c6f7-45be-8d90-54543654c077" />
<img width="706" height="461" alt="image" src="https://github.com/user-attachments/assets/5724a563-972f-4bf4-852b-a29f65897020" />
