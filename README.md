# MQTT Web - Exemplo

Este é um projeto demonstrativo de funcionamento do protocolo MQTT. 
Este exemplo é básico apenas para demonstrar de forma fácil o funcionamento do protocolo MQTT, com subscribe e publis.

## Funcionamento do projeto
Foi desenvolvido para ser simples e de fácil entendimento, sabendo o básico de funcionamento do protocolo.

### Dados de **SUBSCRIBE** - Configuração de conexão
- *Endereço do Broker*: Endereço do broker utilizado para demonstração; na inicialização da página é apresentado um broker público para testes;
- *Porta de conexão*: Porta de lógica de acesso ao broker; na inicialização é apresentada uma porta funcional para o broker informado no endereço;
- *Tópico para subscrição*: Este é o tópico em que projeto se inscreverá para visualizar os dados recebidos;
- *Conectar broker*: Botão que efetuará a conexão no broker MQTT;
- *Status conexão*: Label de apresentação de status: verde quando conectado ou vermelho quando desconectado do broker;
- *Desconectar broker*: Botão para realizar a desconexão do broker MQTT; IMPORTANTE: com a conexão com o broker interrompida, NÃO é possível ler as mensagens publicadas no tópico; 
- *Alterar tópico*: Botão para alterar o tópico em que se está inscrito no broker, mesmo conectado ao broker é possível realizar a alteração de tópico de subscrição;

### Dados de **PUBLISH** - Envio de mensagem
- *Tópico de publicação da mensagem*: Tópico em que será feita a publicação da mensagem;
- *Mensagem a ser publicada*: Dados a serem enviados para publicação no tópico selecionado e no broker;
  
Para executar o publish será utilizado os mesmos dados de conexão ao broker que são utilizados no processo de subscribe.

### Tópico de publicação da informação
Neste campo será apresentado o tópico em que a mensagem foi recebida, mesmo que a subscrição tenha sido feita em tópico genérico, será possível identificar em qual tópico a informação foi publicada;

### Informação recebida no tópico MQTT
Informação recebida pelo MQTT no tópico em que foi feita a subscrição, mesmo que a subscrição tenha sido feita em tópico genérico.

## Informações sobre o projeto.

O projeto é baseado em web, desta forma a conexão com o broker pode sofrer variação de uma conexão através de software desktop ou algum código executado por terminal, visto as limitações impostas pelo navegador; isto pode ser observado na porta que é informada na tela do navegador e a porta padrão do protocolo MQTT (broker).
Para melhor visualização de algumas informações, estas são informadas no console do navegador, caso tenha dúvida é possível observar o que é impresso no console. Através do console também é possível verificar possíveis erros de comunicação com o broker.
O protocolo MQTT permite subscrição(subscribe) em múltiplos tópicos, porém neste exemplo está demonstrado apenas a subscrição em 1 tópico.
