import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("Siguiente [next]: ", value),
  error: (error) => console.warn("Error [obs]: ", error),
  complete: () => console.info("Completado [obs]"),
};

const obs$ = new Observable<string>((suscriber) => {
  suscriber.next("Hola");
  suscriber.next("Mundo");

  // Forzar error
  //   const a = undefined;
  //   a.nombre = "Leiner";

  suscriber.complete();

  suscriber.next("Mundo"); // No se ejecuta luego del complete
});

obs$.subscribe(observer);

// obs$.subscribe({
//   next: (valor) => console.log("next: ", valor),
//   error: (error) => console.warn("Error: ", error),
//   complete: () => console.info("Complete"),
// });
