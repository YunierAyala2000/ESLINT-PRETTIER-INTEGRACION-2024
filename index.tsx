// 1 y 2 (prefer-const) (@typescript-eslint/no-unused-vars) muestra un mensaje cuando una varible esta declarada pero (NO SE ESTA USANDO)
// const hello = 'hello';
// console.log(hello);
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//::::::::: 3 (no-cond-assign) No permitir operadores de asignación en expresiones condicionales :::::::::::::::::::
// //FORMA INCORRECTA
// let x;
// if ((x = 0)) {
//   x = 1;
// }

// // FORMA CORRECTA
// if (x === 0) {
//   x = 1;
// }
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// :::::: 4 (no-constant-binary-expression) No permitir expresiones donde la operación no afecte el valor ::::::::::::::::::::::::
// // INCORRECTO
// const value1 = x == null;
// const value2 = condition ? x : {} || DEFAULT;

// // CORRECTO
// const value1 = x == null;
// const value2 = x !== 10 ? x : 30;
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//:::::: 5 (no-debugger) No permitir el uso dedebugger ::::::::::::::::::::::::::::::::::::::::::
// // INCORRECTO
// function isTruthy(x) {
//   debugger;
//   return Boolean(x);
// }

// // CORRECTO
// function isTruthy(x) {
//     return Boolean(x);
// }
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//:::::: 6 (no-arrow-body-style) Esta regla puede imponer o prohibir el uso de llaves alrededor del cuerpo de la función de flecha. ::::::::::::::::::::::::::::::::::::::::::
// // INCORRECTO
const foo = () => {
	return console.log('hola');
};

// // CORRECTO
// let foo = () => {
//   return 0;
// };
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
