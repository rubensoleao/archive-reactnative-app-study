// Gera chaves aleatórias para inserção no BD
// Adaptado de: https://gist.github.com/gordonbrander/2230317 

export default function (){
  return 'aluno'+'_' + Math.random().toString(36).substr(2, 16);
};