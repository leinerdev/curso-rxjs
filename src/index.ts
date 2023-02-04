import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>(subscriber => {
  // Crear un contador, 1,2,3,4,5....
  let contador = 0;
  const interval = setInterval(() => {
    contador++;
    subscriber.next(contador);
  }, 1000)

  return () => {
    clearInterval(interval);
  }
});

const subscription = intervalo$.subscribe(num => console.log('Num: ', num));

setTimeout(() => {
  subscription.unsubscribe();
}, 3000);

