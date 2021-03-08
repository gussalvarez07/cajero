function movimiento(cuenta, operacion = "credito") {
    // valor1 = suma_en_cuenta
    if (operacion == "credito") {
      const oper = "ingresar";
    } else {
      const oper = "debitar";
    }
    const monto = prompt(`Monto a ${oper}`);

    if (cuenta == "567") {
      const valor1 = 10000;
    } else {
      const valor1 = 5000;
    }

    if (operacion == "debito") {
      const resultado = valor1 - Number(monto);
    } else {
      const resultado = valor1 + Number(monto);
    }
    return resultado;
  }

  const usuario = prompt("Ingresa tu usuario");
  const contrasenia = prompt("Ingresa tu contraseña");

  if (usuario == "admin") {
    if (contrasenia == "123456") {
      alert("Bienvenida admin");

      const menu = prompt("Ingresá el valor del menu");
      if (menu == "1") {
        const cuenta = prompt("¿A qué cuenta desea ingresarlo?");
        if (cuenta == "567") {
          const suma = movimiento(cuenta);
          alert(`La cuenta ${cuenta} posee ${suma}`);
        } else {
          // Sino ingreso 567 es porque ingresó 789
          const suma = movimiento(cuenta);
          alert(`La cuenta ${cuenta} posee ${suma}`);
        }
      } else if (menu == "2") {
        const cuenta = prompt("¿De qué cuenta se debitará?");
        if (cuenta == "567") {
          const resta = movimiento(cuenta, "debito");
          alert(`La cuenta ${cuenta} posee ${resta}`);
        } else {
          // 789
          const resta = movimiento(cuenta, "debito");
          alert(`La cuenta ${cuenta} posee ${resta}`);
        }
      } else {
        // menu = 3
        const cuenta = prompt("¿Qué cuenta desea verificar?");
        if (cuenta == "567") {
          alert(`La cuenta 567 posee 10000`);
        } else {
          alert(`La cuenta 789 posee 5000`);
        }
      }
    } else {
      alert("Nombre de usuario o contraseña incorrecta");
    }
  } else {
    alert("Nombre de usuario o contraseña incorrecta");
  }