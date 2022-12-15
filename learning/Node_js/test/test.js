// Obtener el promedio de la digonal principal de una matriz
// Dado una matriz de dimesnsión n x n, sacar el promedio de la diagonal principal.
// Ejemplo: [[1, 2, 3, 4], [2, 3, 3, 2], [1, 2, 5, 4], [3, 3, 3, 9]] el promedio es 4.5
// hello world uwu
function obtenerM(matriz){
  var promedio = [0,0]
  for(let i = 0; i < matriz.length; i++){
      console.log(matriz[i][i])
      promedio[0] = promedio[0]+ matriz[i][i];
        promedio[1]++
  }
  promedio = promedio[0] / promedio[1];
  console.log(promedio)
}

const matriz = [[1, 2, 3, 4], [2, 3, 3, 2], [1, 2, 5, 4], [3, 3, 3, 9]];
obtenerM(matriz);